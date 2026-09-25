# Project Structure

Apply these conventions to all work in this workspace. Preserve the existing Angular CLI layout and make the smallest structural change needed for the requested feature.

- Keep Angular CLI configuration, package metadata, TypeScript configuration, and the project README at the repository root.
- Keep application bootstrap in `src/main.ts`, app configuration in `src/app/app.config.ts`, and route definitions in `src/app/app.routes.ts`.
- Keep components and their related templates, styles, and tests in `src/app/`, following nearby naming and standalone-component patterns.
- Keep global styles in `src/styles.scss` and component-specific styles beside their component.
- Keep user-supplied profile media in `src/data/`. `angular.json` publishes this directory under `assets/profile`; use those output URLs in templates and preserve the mapping.
- Keep general static files in `public/` and preserve Angular CLI's existing asset-copy behavior.
- Keep workspace instructions, skills, and custom agents under their existing `.github/` locations.

Before placing files, inspect the current tree, `package.json`, `angular.json`, and nearby examples; do not assume this baseline has not changed. Do not add generic `components/`, `services/`, `models/`, `utils/`, or feature-module folders without a demonstrated need and an established local pattern. Do not move, rename, delete, or mass-reformat files as incidental cleanup. For a requested restructure, identify affected imports, routes, tests, asset URLs, and tooling, and preserve compatibility unless the user explicitly approves breaking changes.

Keep source files separate from generated output. Never edit or depend on `dist/`, `.angular/`, or `node_modules/` as source. Follow the Angular and TypeScript versions and scripts declared by the project; avoid framework migrations or unrelated dependency/configuration changes. After structural or asset changes, run the narrowest relevant tests and build, and report verified results without claiming checks that were not run.