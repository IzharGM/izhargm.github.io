// Publishes Source/dist/website to the gh-pages branch.
//
// Everything happens inside a throwaway git worktree in the OS temp directory,
// so the branch checked out in the repo itself is never touched. This is the
// reason the script exists: angular-cli-ghpages was running its git commands
// against the real working tree and left the repo sitting on gh-pages.
//
// Usage: npm run deploy -- "commit message"

import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readdirSync, rmSync, cpSync, writeFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const sourceDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = resolve(sourceDir, '..');
const distDir = join(sourceDir, 'dist', 'website');
const branch = 'gh-pages';

const message = process.argv.slice(2).join(' ').trim() || 'Publish the site';

function git(args, cwd = repoRoot) {
    return execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
}

function step(text) {
    console.log(`\n${text}`);
}

if (!existsSync(join(distDir, 'index.html'))) {
    console.error(`No build found at ${distDir}. Run "npm run build" first.`);
    process.exit(1);
}

// A dirty tree is not fatal, but publishing work that isn't committed anywhere
// makes the live site impossible to trace back to a commit, so say so.
const dirty = git(['status', '--porcelain', '--untracked-files=no']);
if (dirty) {
    console.warn('Warning: Source has uncommitted changes. The build being published may not match any commit.');
}

step(`Fetching origin/${branch}...`);
git(['fetch', 'origin', branch]);

const worktree = mkdtempSync(join(tmpdir(), 'ghpages-'));
let worktreeAdded = false;

try {
    step(`Checking out origin/${branch} into a temporary worktree...`);
    // Detached, so the local gh-pages branch ref is left alone and we always
    // build on top of what is actually published.
    git(['worktree', 'add', '--detach', worktree, `origin/${branch}`]);
    worktreeAdded = true;

    step('Replacing the published files with the current build...');
    for (const entry of readdirSync(worktree)) {
        // .git here is a file pointing back at the main repo, not a directory.
        if (entry === '.git') continue;
        rmSync(join(worktree, entry), { recursive: true, force: true });
    }
    cpSync(distDir, worktree, { recursive: true });
    // Keeps GitHub Pages from running the output through Jekyll.
    writeFileSync(join(worktree, '.nojekyll'), '');
    // GitHub Pages serves 404.html for any path it has no file for. Making it a
    // copy of index.html is what lets a deep link like /projects/... load the
    // app instead of GitHub's 404 page. angular-cli-ghpages did this too.
    cpSync(join(worktree, 'index.html'), join(worktree, '404.html'));

    git(['add', '-A'], worktree);
    if (!git(['status', '--porcelain'], worktree)) {
        console.log('\nThe build is identical to what is already published. Nothing to do.');
        process.exit(0);
    }

    step('Committing...');
    git(['commit', '-m', message], worktree);

    step(`Pushing to origin/${branch}...`);
    git(['push', 'origin', `HEAD:${branch}`], worktree);

    const published = git(['rev-parse', '--short', 'HEAD'], worktree);
    console.log(`\nPublished ${published} to ${branch}.`);
} finally {
    if (worktreeAdded) {
        try {
            git(['worktree', 'remove', '--force', worktree]);
        } catch {
            console.warn(`Could not remove the temporary worktree at ${worktree}. Run "git worktree prune" to clean up.`);
        }
    } else {
        rmSync(worktree, { recursive: true, force: true });
    }

    // The branch in the repo should be exactly what it was before this ran.
    console.log(`Repo is on branch: ${git(['rev-parse', '--abbrev-ref', 'HEAD'])}`);
}
