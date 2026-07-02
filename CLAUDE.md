# CLAUDE.md

> **Maintenance rule**: when editing this file, ensure every rule is unambiguous, non-redundant, and non-contradictory. Keep sections focused — each rule belongs in exactly one place. Remove or merge anything that overlaps. The goal is a single source of truth that leaves zero room for interpretation.

## Project overview

Shared XO/ESLint configuration, published to npm as `eslint-config-xo-bizon` and used across the TypeScript projects. Written in TypeScript, bundled with tsdown, managed with pnpm.

## Checks (run after every change)

```bash
pnpm xo        # linter (ESLint-based via XO)
pnpm check:ts  # type checker (tsc --noEmit)
```

- `pnpm build` — bundle with tsdown (ESM output + type declarations)
- `pnpm xo --fix <path>` to auto-fix lint issues in a specific file
- No test suite in this project

## Commit and PR conventions

- Use semantic commit messages (Conventional Commits)
- Subject line under 55 characters, body lines under 72 characters
- No `Co-Authored-By` trailer
- PR titles follow the same conventions as commit subjects
- No "Generated with Claude Code" footer in PR descriptions
- Branch names prefixed with GitHub username (use `gh api user --jq '.login'`)

## Project structure

- `src/index.ts` — the exported flat config (single `.` export)
- `dist/` — tsdown build output (ESM + type declarations)

## Code patterns

- **Node version**: 24 (see `.node-version`)
- **Package runner**: use `pnpx` instead of `npx`
- **Build**: tsdown, ESM output with type declarations

## CI/CD

- **Tests** (`tests.yml`): lint + type check on every PR and push to master
- **Release** (`release.yml`): semantic-release + npm publish
- **PR validation** (`pr.yml`): enforces semantic PR titles

## Documentation

- Keep `README.md` in sync with the codebase (exported rules, usage, peer dependencies).
