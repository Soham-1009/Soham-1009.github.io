# Known Bugs

*Current source-level bug status: no confirmed application bugs after inspection. Production build validation is currently blocked by an incomplete local dependency installation (the repository has no usable `vite`/`eslint` binaries in `node_modules`).*

### Verification Checks (September 2026)

- **Static source inspection**: Project routing, card interactions, and project data were reviewed after the InfraNovaAI update.
- **Dependency validation**: `npm ci` could not complete within the execution environment; the existing `node_modules` is incomplete, so `tsc`, `eslint`, and Vite cannot currently run here.

### Prior Verification Checks (August 2026)
- **Type Checking**: `npx tsc --noEmit` completed with 0 errors.
- **Linting & Formatting**: `npm run lint` and `npm run format` completed successfully with 0 warnings/errors.
- **Build**: `npm run build` (Vite) completed successfully with all modules compiled correctly.

### Resolved Bugs
5. **Missing Favicon Asset**: The root layout referenced `/favicon.ico`, but no such file existed in `public/`; the favicon now uses the existing `/logo.jpg` asset.
6. **InfraNovaAI Project Navigation**: Added the live project URL and made the InfraNovaAI card clickable, with the dedicated Live demo and Source links preserved.
1. **Missing Site Footer**: The `<SiteFooter />` component was successfully added to the main layout (`src/routes/__root.tsx`) and is now rendering properly across all pages.
2. **Invalid Contact Email**: The placeholder email in `src/data/portfolio.ts` was successfully updated to the valid address: `soham.deshpande100904@gmail.com`.
3. **Generic GitHub Repository Links**: The repository URLs for Translytic and Notes Taking App in `src/data/portfolio.ts` have been updated to point to their exact project URLs rather than the generic profile.
4. **Prettier Formatting Errors**: 37 formatting errors were resolved project-wide using `npm run format` / `npx prettier --write .`.
