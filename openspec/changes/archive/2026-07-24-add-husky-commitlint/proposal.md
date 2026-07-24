## Why

The repo has no git hook tooling and no commit message convention — history is a mix of free-form messages (`Add project images to public folder`) and a couple of accidentally-conventional ones (`docs: add OpenSpec project context`). As a first step in modernizing the project, we want every future commit to carry a consistent, machine-checkable format and to have staged files auto-linted/formatted before they're committed, without adding any CI or release-automation surface.

## What Changes

- Add Husky as the git hooks manager, wired via an npm `prepare` script so hooks install automatically on `npm install`.
- Add a `commit-msg` hook that runs commitlint against `@commitlint/config-conventional` (unmodified): commits must use `type(scope?): subject` with `type` in `feat|fix|chore|docs|refactor|style|test|perf|build|ci`, lowercase subject, no trailing period.
- Add a `pre-commit` hook that runs `lint-staged`, which runs `eslint --fix` and `prettier --write` on staged files matching the project's lintable/formattable extensions.
- No CI enforcement: local hooks are the only enforcement mechanism (solo repo, direct push to `main`, no PR flow — see design.md for the reasoning).
- No changelog or version automation (no `semantic-release`/`standard-version`) — this is commit hygiene only.
- Existing commit history is left as-is; enforcement applies only to new commits going forward.

## Capabilities

### New Capabilities

- `commit-hygiene`: local git-hook-enforced commit message format (Conventional Commits) and pre-commit lint/format of staged files.

### Modified Capabilities

(none)

## Impact

- `package.json`: new `devDependencies` (`husky`, `@commitlint/cli`, `@commitlint/config-conventional`, `lint-staged`), new `prepare` script, new `lint-staged` config block.
- New files: `.husky/commit-msg`, `.husky/pre-commit`, `commitlint.config.js`.
- No changes to `src/`, `drizzle/`, `Dockerfile`, or `.github/workflows/deploy.yml`.
- No breaking changes to the app itself — purely a dev-tooling addition.
