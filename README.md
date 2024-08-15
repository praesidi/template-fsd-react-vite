# FSD + React + TypeScript + Vite

## Features

- [Feature Sliced Design](https://feature-sliced.design/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)
- [i18n](https://react.i18next.com/)
- [ESLint](https://tailwindcss.com/)
- [Vitest](https://tailwindcss.com/) [powerful configuration](./.eslintrc)
- [Prettier](https://prettier.io/)
- [dotenv (.env)](https://github.com/motdotla/dotenv)
- [editorconfig](https://editorconfig.org/)
- [shadcn/ui](https://ui.shadcn.com/)

## Installation

```bash
npx degit praesidi/fsdvite my-vitesse-app
cd my-fsdvite-app
pnpm i
# If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

Follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `index.html`
- [ ] Change the hostname in `vite.config.ts`
- [ ] Change the favicon in `public`
- [ ] Clean up the READMEs and remove routes

## Available Scripts

In the project directory, you can run:

##### `pnpm dev`

##### `pnpm build`

##### `pnpm preview`

## Development

### Folder Structure

Folder structure of the template;

```
├── public
│   ├── img
│   │   ├── favicon.png
│   │   └── logo.png
│   └── locales
│       ├── en
│       │   └── translation.json
│       └── ru
│           └── translation.json
│
├── src
│   ├── app
│   │   ├── index.tsx
│   │   ├── providers
│   │   │   ├── index.ts
│   │   │   └── providers.tsx
│   │   ├── router.tsx
│   │   └── styles
│   │       └── index.css
│   ├── entities
│   ├── features
│   │   ├── localization
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       └── changeLanguage.tsx
│   │   └── theme
│   │       ├── index.ts
│   │       └── ui
│   │           └── changeTheme.tsx
│   ├── pages
│   │   ├── dynamicRoute
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       └── dynamicRoute.tsx
│   │   ├── homePage
│   │   │   ├── index.ts
│   │   │   └── ui
│   │   │       └── homePage.tsx
│   │   └── staticRoute
│   │       ├── index.ts
│   │       └── ui
│   │           └── staticRoute.tsx
│   ├── shared
│   │   ├── i18n
│   │   │   └── i18n.ts
│   │   ├── lib
│   │   │   └── utils.ts
│   │   ├── theme
│   │   │   ├── index.ts
│   │   │   └── themeProvider.tsx
│   │   └── ui
│   │       ├── basicLayout
│   │       │   └── basicLayout.tsx
│   │       ├── button
│   │       │   └── button.tsx
│   │       ├── dropdown
│   │       │   └── dropdown-menu.tsx
│   │       ├── index.ts
│   │       └── select
│   │           └── select.tsx
│   ├── vite-env.d.ts
│   └── widgets
│       ├── footer
│       │   ├── index.ts
│       │   └── ui
│       │       └── footer.tsx
│       └── header
│           ├── index.ts
│           └── ui
│               └── header.tsx
```

### Linter / Eslint

The project has a strong linter configuration to ensure consistency and
maintainability.
