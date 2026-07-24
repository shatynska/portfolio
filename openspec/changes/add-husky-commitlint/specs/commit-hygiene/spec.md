## ADDED Requirements

### Requirement: Commit messages follow Conventional Commits
The system SHALL reject, via a local `commit-msg` git hook, any commit whose message does not conform to `@commitlint/config-conventional` (a `type(scope?): subject` header with `type` in `feat|fix|chore|docs|refactor|style|test|perf|build|ci`, lowercase subject, no trailing period).

#### Scenario: Conventional commit message is accepted
- **WHEN** a developer commits with the message `fix(header): correct mobile nav overflow`
- **THEN** the commit-msg hook passes and the commit is created

#### Scenario: Non-conventional commit message is rejected
- **WHEN** a developer commits with the message `Fixed the header bug`
- **THEN** the commit-msg hook fails with a commitlint error and the commit is not created

#### Scenario: Existing history is unaffected
- **WHEN** the hook is installed on a repo with pre-existing non-conventional commits
- **THEN** those existing commits remain untouched and unvalidated; only new commits are checked

### Requirement: Staged files are linted and formatted before commit
The system SHALL run a local `pre-commit` git hook that executes `lint-staged`, applying `eslint --fix` and `prettier --write` to staged files before the commit is created.

#### Scenario: Staged file with fixable lint/format issues
- **WHEN** a developer stages a `.tsx` file with fixable ESLint or Prettier violations and runs `git commit`
- **THEN** the pre-commit hook auto-fixes the violations in place, re-stages the fixed content, and the commit proceeds with the fixed version

#### Scenario: Staged file with unfixable lint errors
- **WHEN** a developer stages a file with an ESLint error that cannot be auto-fixed
- **THEN** the pre-commit hook fails, blocking the commit until the developer resolves the error

### Requirement: Hooks install automatically on dependency install
The system SHALL install git hooks automatically when dependencies are installed, via an npm `prepare` script, without requiring a manual setup step.

#### Scenario: Fresh clone and install
- **WHEN** a developer clones the repo and runs `npm install`
- **THEN** the Husky hooks in `.husky/` become active in `.git/hooks` without any additional manual command

### Requirement: No CI-side commit or lint enforcement
The system SHALL NOT add any CI step that re-validates commit messages or re-runs lint-staged; enforcement is local-hook-only.

#### Scenario: Push bypassing local hooks
- **WHEN** a commit created with `--no-verify` (bypassing the local hooks) is pushed to `main`
- **THEN** the existing `deploy.yml` workflow builds and deploys normally, with no commit-message or lint-staged check in CI blocking it
