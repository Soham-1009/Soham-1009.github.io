# Known Bugs

*Currently, there are no known bugs in the codebase.*

### Recent Verification Checks (August 2026)
- **Type Checking**: `npx tsc --noEmit` completed with 0 errors.
- **Linting & Formatting**: `npm run lint` and `npm run format` completed successfully with 0 warnings/errors.
- **Build**: `npm run build` (Vite) completed successfully with all modules compiled correctly.

### Resolved Bugs
1. **Missing Site Footer**: The `<SiteFooter />` component was successfully added to the main layout (`src/routes/__root.tsx`) and is now rendering properly across all pages.
2. **Invalid Contact Email**: The placeholder email in `src/data/portfolio.ts` was successfully updated to the valid address: `soham.deshpande100904@gmail.com`.
3. **Generic GitHub Repository Links**: The repository URLs for Translytic and Notes Taking App in `src/data/portfolio.ts` have been updated to point to their exact project URLs rather than the generic profile.
4. **Prettier Formatting Errors**: 37 formatting errors were resolved project-wide using `npm run format` / `npx prettier --write .`.
