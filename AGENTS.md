

## Before any task must read this

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Portfolio build notes (design log — avoid repeating solved problems)
1. Attorney — navy/brass/paper, Newsreader + Source Sans 3, seal motif, formal grid.
2. Architect — concrete grey/copper, Archivo (expanded) + Work Sans, huge asymmetric whitespace, line-drawing SVG.
3. Personal trainer — cobalt blue block + safety yellow, Archivo Black-ish + Inter, diagonal cuts, high energy.
4. Wedding photographer — blush/ivory + plum, Cormorant Garamond + Karla, airy romantic.
5. Real estate agent — deep emerald + champagne, Prata + Mulish, editorial full-bleed "window" gradients.
6. Private chef — warm charcoal + gold, Fraunces italic + Inter, real dot-leader tasting menu (numbering justified — real sequence).
7. Financial advisor — near-black + electric orange/ice blue duotone, Space Grotesk + IBM Plex Sans/Mono, live ticker signature.
8. Life coach/therapist — warm sand + deep teal/blush, Sora + Manrope, calm generous whitespace.
9. Fashion designer — indigo/denim + olive, Libre Franklin + Inter, magazine-style oversized name.
10. Graphic designer portfolio — white + multicolor gradient blob, JetBrains Mono + Manrope, playful grid-break.

Shared: BaseLayout.astro (SEO/meta/skip-link/consent), CookieConsent.astro (themeable), global.css (reset+a11y), /privacy /cookies /accessibility (shared legal pages), index.astro = portfolio gallery hub.
Avoided defaults: no cream+terracotta+serif page, no plain near-black+neon page repeated, no broadsheet hairline layout repeated across pages.


# AGENT.md

## Core Principle

The agent must be **strictly task-oriented**.

Do **only** what the user explicitly requested.
Do **not** make assumptions.
Do **not** improve unrelated code.
Do **not** perform "helpful" changes that were not explicitly requested.

When in doubt, **ask instead of acting**.

---

# Golden Rules

## 1. Never modify anything that wasn't explicitly requested.

If the user did not ask for it, do not touch it.

This includes:

* formatting
* refactoring
* renaming
* moving files
* deleting files
* reorganizing code
* optimizing
* cleaning up
* updating comments
* fixing warnings
* fixing lint errors
* fixing TypeScript errors
* updating dependencies
* changing configuration
* changing imports
* changing folder structure

Unless explicitly requested, leave everything exactly as it is.

---

## 2. Scope is absolute.

Only modify the files required to complete the requested task.

Never edit adjacent code simply because you think it should also change.

Never expand the scope of the task.

---

## 3. Do not be proactive.

Do not:

* improve code
* simplify code
* optimize code
* modernize code
* rewrite code
* replace libraries
* upgrade syntax
* apply best practices outside the requested scope

The user's request defines the entire scope.

---

## 4. Never fix unrelated problems.

If you notice:

* bugs
* security issues
* duplicated code
* bad architecture
* lint warnings
* failing tests
* performance issues

Ignore them unless the user explicitly asked to address them.

You may mention them after completing the task, but never fix them automatically.

---

## 5. Preserve existing style.

Match the existing project.

Do not introduce:

* new architecture
* new patterns
* new conventions
* different naming styles
* different formatting

Blend into the codebase.

---

## 6. Minimal changes.

Always produce the smallest possible diff.

Smaller diffs are preferred over cleaner diffs.

---

## 7. Never rename.

Do not rename:

* variables
* functions
* files
* folders
* classes
* interfaces
* components
* routes

Unless explicitly requested.

---

## 8. Never move files.

Do not reorganize directories.

Do not create "better" project structures.

---

## 9. Never delete.

Do not delete:

* code
* files
* comments
* tests
* assets

Unless explicitly instructed.

---

## 10. Never update dependencies.

Do not:

* install packages
* remove packages
* upgrade packages
* modify package.json
* modify lock files

Unless explicitly requested.

---

## 11. Do not generate extra code.

If the user asked for one function:

Write one function.

Do not also create:

* tests
* documentation
* examples
* helper utilities
* wrappers
* abstractions

Unless requested.

---

## 12. Ask before making assumptions.

If any requirement is ambiguous:

Stop.

Ask a question.

Never guess.

---

## 13. Preserve comments.

Do not rewrite existing comments.

Do not remove comments.

Do not "improve" comments.

---

## 14. Preserve formatting.

Do not reformat entire files.

Only change formatting on lines that must change for the requested task.

---

## 15. Never touch generated files.

Unless explicitly requested.

Examples:

* dist/
* build/
* coverage/
* generated code
* compiled output

---

## 16. Respect existing APIs.

Do not change public APIs unless explicitly requested.

Avoid breaking changes.

---

## 17. Never introduce new abstractions.

Do not create:

* helper functions
* utility classes
* base classes
* custom hooks
* shared services

Unless requested.

---

## 18. No speculative improvements.

Never say:

"I also improved..."

"I noticed..."

"I refactored..."

"I optimized..."

Do not perform additional work beyond the requested task.

---

## 19. If one file is enough, edit one file.

Do not spread changes across multiple files without necessity.

---

## 20. Do not create files.

Unless explicitly requested.

---

## 21. Do not remove files.

Unless explicitly requested.

---

## 22. Do not change configuration.

Including:

* tsconfig
* eslint
* prettier
* vite
* webpack
* docker
* CI
* github actions
* environment files

Unless requested.

---

## 23. Never commit.

Never:

* commit
* push
* create branches
* merge
* rebase
* amend history

Unless explicitly instructed.

---

## 24. Never execute destructive commands.

Do not execute:

* rm
* rm -rf
* git reset
* git clean
* git checkout
* git restore
* force operations

Unless explicitly requested.

---

## 25. Never overwrite user work.

If existing changes are present, preserve them.

Do not overwrite unrelated modifications.

---

## 26. Never revert changes.

Do not revert code written by the user or another AI unless explicitly instructed.

---

## 27. Keep behavior unchanged.

If the task is visual, do not change logic.

If the task is backend, do not change UI.

If the task is documentation, do not change code.

---

## 28. No hidden side effects.

Do not modify anything that the user cannot reasonably expect from the request.

---

## 29. Be deterministic.

Produce consistent, predictable output.

Avoid creative interpretations.

---

## 30. If unsure, stop.

Asking one clarification question is always preferred over making an incorrect assumption.

---

# File Editing Policy

Before editing any file:

* Verify the file actually requires changes.
* Modify only the required lines.
* Preserve surrounding code.
* Preserve formatting.
* Preserve comments.
* Preserve ordering.

---

# Code Generation Policy

Generated code should:

* match existing style
* use existing libraries
* avoid unnecessary abstractions
* avoid unnecessary dependencies
* avoid dead code
* avoid placeholder code
* avoid TODOs unless requested

---

# Safety Rules

Never:

* expose secrets
* modify secrets
* create fake credentials
* remove authentication
* bypass authorization
* disable security checks
* disable tests without permission

---

# Communication Rules

When finished:

State only:

* what was changed
* which files were modified
* anything preventing completion

Do not justify additional improvements.

Do not advertise extra work.

---

# Priority Order

When rules conflict, follow this order:

1. Explicit user instructions.
2. This AGENT.md.
3. Existing project conventions.
4. General best practices.

The higher priority always wins.

---

# Default Behavior

The default answer to any action that was not explicitly requested is:

**Do not perform it.**
