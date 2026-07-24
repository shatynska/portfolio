## 1. Install dependencies

- [ ] 1.1 Install `husky`, `@commitlint/cli`, `@commitlint/config-conventional`, and `lint-staged` as devDependencies (npm)

## 2. Configure commitlint

- [ ] 2.1 Add `commitlint.config.js` extending `@commitlint/config-conventional` (no overrides)

## 3. Configure lint-staged

- [ ] 3.1 Add a `lint-staged` config block to `package.json` (or `.lintstagedrc`) running `eslint --fix` on `*.{js,jsx,ts,tsx}` and `prettier --write` on the project's existing Prettier-covered file types

## 4. Set up Husky

- [ ] 4.1 Add `"prepare": "husky"` to `package.json` scripts and run it once to generate `.husky/`
- [ ] 4.2 Add `.husky/commit-msg` hook running `npx --no -- commitlint --edit "$1"`
- [ ] 4.3 Add `.husky/pre-commit` hook running `npx --no -- lint-staged`

## 5. Verify

- [ ] 5.1 Confirm a non-conventional commit message is rejected by the `commit-msg` hook
- [ ] 5.2 Confirm a conventional commit message (e.g. `chore: add husky and commitlint`) is accepted
- [ ] 5.3 Confirm staging a file with a fixable lint/format issue gets auto-fixed and re-staged by the `pre-commit` hook before commit
- [ ] 5.4 Confirm `npm install` on a fresh clone (or `rm -rf .husky && npm install`) re-creates working hooks via the `prepare` script
- [ ] 5.5 Confirm `npm run build` / Docker build still succeeds unaffected (Husky's `prepare` script must not break the container build stage)

## 6. Document

- [ ] 6.1 Add a short "Commit conventions" note to `README.md` (or `CONTRIBUTING.md` if preferred) describing the required commit format and that hooks install automatically via `npm install`
