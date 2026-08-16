import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// Give up on the growth poll if the document never fires `load` (bad path, dead asset).
const POLL_TIMEOUT_MS = 15000;

// The detail pages are plain HTML files under assets, so they carry GitHub Pages'
// default ten minute cache and nothing in their URL changes when they are edited.
// A browser will keep showing a stale one inside the iframe long after a deploy,
// and reloading the app shell does not refetch it. Stamping the URL once per page
// load means a refresh always brings the current file, while moving between
// projects in the same session still reuses what was already fetched.
const CACHE_BUST = Date.now();

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    protected router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private zone: NgZone,) { }

  @ViewChild('iframe') private iframeRef?: ElementRef<HTMLIFrameElement>

  projectName: string | null = null
  projectSrc?: SafeUrl

  private rafId = 0
  private pollDeadline = 0
  private lastHeight = 0
  private resizeObserver?: ResizeObserver

  ngOnInit(): void {
    this.projectName = this.route.snapshot.paramMap.get('title')
    this.projectSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/item-details/' + this.projectName + '.html?v=' + CACHE_BUST)
    window.scroll(0,0)
  }

  ngAfterViewInit(): void {
    // Follow the document's height while it streams in. Sizing the iframe only on
    // its `load` event means waiting on every image and embed in the page first,
    // which leaves the reader staring at a 150px sliver for seconds.
    this.zone.runOutsideAngular(() => {
      this.pollDeadline = performance.now() + POLL_TIMEOUT_MS;
      this.pollHeight();
    });
  }

  ngOnDestroy(): void {
    this.stopPolling();
    this.resizeObserver?.disconnect();
  }

  iframeLoad(iframe: HTMLIFrameElement, backBtn: HTMLButtonElement) {
    // Everything has landed, so swap the frame-by-frame poll for an observer that
    // only reacts to genuine reflows (window resize, the video facade expanding).
    this.stopPolling();
    this.syncHeight();
    backBtn.style.opacity = '1';

    const body = iframe.contentDocument?.body;
    if (body && typeof ResizeObserver !== 'undefined') {
      this.zone.runOutsideAngular(() => {
        this.resizeObserver = new ResizeObserver(() => this.syncHeight());
        this.resizeObserver.observe(body);
      });
    }
  }

  private pollHeight = (): void => {
    this.syncHeight();
    if (performance.now() < this.pollDeadline) {
      this.rafId = requestAnimationFrame(this.pollHeight);
    }
  }

  private stopPolling(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
    this.pollDeadline = 0;
  }

  private syncHeight(): void {
    const iframe = this.iframeRef?.nativeElement;
    const doc = iframe?.contentDocument;
    if (!iframe || !doc?.body) {
      return;
    }

    const height = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
    if (height > 0 && height !== this.lastHeight) {
      this.lastHeight = height;
      iframe.style.height = height + 'px';
    }
  }

  scrollToSection(id: string) {
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Delay ensures content is rendered first
    });
  }
}
