import { Component, OnInit } from '@angular/core';
import { CardItem, Projects } from 'src/app/details';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  showAllProjects = false;

  // Partitioned once at construction rather than in a getter: the app-wide scroll
  // listener runs change detection on every scroll event, and a getter would rebuild
  // both arrays each time.
  readonly relevantProjects = Projects.filter(p => p.relevant !== false);  // defaults to true

  readonly hiddenProjects = Projects.filter(p => p.relevant === false);  // only explicitly false

  trackByTitle(_index: number, project: CardItem): string {
    return project.title;
  }
}
