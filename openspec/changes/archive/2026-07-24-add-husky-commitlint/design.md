## Context

The repo is a solo-maintained Next.js portfolio (npm, single `main` branch, no PR review flow — `deploy.yml` builds and redeploys directly on every push to `main`). There is currently no git hook tooling (`.git/hooks` only has the stock samples) and no lint-staged/CI lint gate. Recent commits have started drifting toward Conventional Commits style organically (`docs: add OpenSpec project context`), which is the trigger for formalizing it.

## Goals / Non-Goals

**Goals:**

- Every new commit message follows Conventional Commits (`type(scope?): subject`).
- Staged files are auto-linted/formatted (ESLint + Prettier) before a commit is created.
- Hook installation is automatic on `npm install` (no manual setup step to forget).

**Non-Goals:**

- No CI-side commit message enforcement.
- No changelog generation or automated version bumping (`semantic-release`, `standard-version`).
- No rewriting or validating existing (pre-change) commit history.
- No change to ESLint/Prettier rules themselves — lint-staged reuses the existing `next lint` / `.prettierrc.js` config as-is.

## Decisions

**1. Husky v9, installed via `prepare` script.**
`npm pkg set scripts.prepare="husky"` (v9 dropped the old `husky install` wrapper). This runs automatically on every `npm install`, including CI/Docker builds, so hooks are never "forgotten" after a clone — though in this project hooks only matter locally since CI doesn't invoke git commit.

**2. commitlint config: `@commitlint/config-conventional`, unmodified.**
No custom scopes or rule overrides. Alternatives considered: a relaxed custom ruleset (rejected — adds bikeshedding for a solo repo with no immediate need) and a minimal "type-prefix-only" check (rejected — the full ruleset is a well-known standard, negligible extra friction, and cheap to install as-is via `commitlint --extends @commitlint/config-conventional`).

**3. `lint-staged` for pre-commit, wired to existing `eslint` and `prettier` configs.**
Runs `eslint --fix` on `*.{js,jsx,ts,tsx}` and `prettier --write` on staged files matching the project's existing Prettier scope. No new lint rules are introduced — this only changes _when_ linting/formatting happens (automatically, at commit time, on the diff) rather than requiring a manual `npm run lint`.

**4. No CI enforcement — decided and rejected explicitly.**
Considered adding a commitlint step to `deploy.yml` as a bypass safety net (catches `--no-verify` or a forgotten `npm install`). Rejected because:

- This is a solo repo — the only committer is the repo owner, who runs the local hook on every normal commit.
- There is no PR flow to hang a standard `commitlint` GitHub Action on; `deploy.yml` only triggers on direct pushes to `main`. Validating a push's commit range without a PR means diffing `github.event.before`/`github.event.after` SHAs, which breaks down on force-pushes, squashed history, and the initial push — meaningful added complexity for an edge case that mainly protects against the owner bypassing their own hook.
- If the repo ever becomes multi-contributor, this decision should be revisited.

**5. No changelog/versioning automation.**
`package.json` version is static (`0.1.0`) and this isn't a published package, so there's no consumer of a generated changelog. Commit hygiene is the end goal, not a stepping stone toward `semantic-release` — confirmed with the repo owner during exploration.

## Risks / Trade-offs

- **[Risk] Local-only enforcement is bypassable** (`git commit --no-verify`, or committing before `npm install` has run) → **Mitigation**: accepted trade-off per Decision 4; low blast radius for a solo repo, revisit if the repo gains contributors.
- **[Risk] `lint-staged` auto-fixing staged files could silently change code the developer didn't review** → **Mitigation**: `eslint --fix` and `prettier --write` only apply deterministic, already-configured formatting rules; developer sees the final diff before push.
- **[Risk] Husky v9's `prepare` script running on every `npm install` (including in Docker build stage)** → **Mitigation**: `.husky/` hook files are harmless no-ops in a non-git context (Docker build), and Husky v9 skips silently when `.git` isn't present, so no build breakage expected; verify during implementation.

## Open Questions

None outstanding — all key decisions were resolved during exploration.
