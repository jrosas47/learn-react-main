## Welcome to [Learn React](https://scrimba.com/learn-react-c0e)

[![CI](https://github.com/jrosas47/learn-react-main/actions/workflows/ci.yml/badge.svg)](https://github.com/jrosas47/learn-react-main/actions/workflows/ci.yml)

> El badge muestra el estado del CI (lint + formato + build) de los proyectos activos. Detalles en la sección [**Integración Continua (CI) y calidad de código**](#integración-continua-ci-y-calidad-de-código) al final de este archivo.

Here, you can find the starter files for all the challenges in the course. To get started, download the entire repo and then navigate to the folder you need - the folders are structured just like the course. 

If you have any problems at all, feel free to join our [Discord server](scrimba.com/discord) where you can connect with other learners.

Happy coding!

## Links from slides:
Use Ctrl/Command + F to search for the one you need below 🔍

### General Links:
- Join the Scrimba Discord Server: https://scrimba.com/discord
- Scrimba Discord today-i-did channel: https://scrimba.com/links/discord-today-i-did
- How to use Figma for Developers: https://scrimba.com/links/figma-walkthrough

### Section 1: Static Pages
- Tutorial Hell Article: https://scrimba.com/links/tutorial-hell
- Learn HTML: https://scrimba.com/links/learn-html
- Learn CSS: https://scrimba.com/links/learn-css
- Learn JavaScript: https://scrimba.com/links/learn-javascript
- Connect with Bob Ziroll on X: https://x.com/bobziroll
- ReactFacts Figma Design: https://scrimba.com/links/figma-reactfacts
- Vitejs Homepage: https://scrimba.com/links/vite-homepage
- Installing Nodejs with NVM (YouTube search link): https://www.youtube.com/results?search_query=install+nodejs+with+nvm
- NVM for Mac/Linux: https://scrimba.com/links/github-nvm-sh
- NVM for Windows: https://scrimba.com/links/github-nvm-windows
- 

### Section 2: Data-driven React
- Travel Journal Figma Design: https://scrimba.com/links/figma-travel-journal-sap
- Handling Static Assets in Vite: https://scrimba.com/links/vite-static-asset-handling
- MDN Web Docs - Array.prototype.map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

### Section 3: React State
- Chef Claude Figma Design: https://scrimba.com/links/figma-chef-claude
- React Docs - MouseEvent handler function: https://scrimba.com/links/react-docs-mouse-events-handler
- MDN Web Docs - Conditional (ternary) operator: https://scrimba.com/links/mdn-docs-ternary-operator
- Legacy React Docs - You Probably Don't Need Derived State: https://scrimba.com/links/no-derived-state
- Anthropic Console Login: https://scrimba.com/links/anthropic-console-login-page
- Hugging Face Login: https://scrimba.com/links/hugging-face-join-page
- NPM - react-markdown: https://scrimba.com/links/react-markdown-npm

### Section 4: Side Effects
- Meme Generator Figma Design: https://scrimba.com/links/figma-meme-generator
- React Docs - Escape Hatches: https://scrimba.com/links/react-docs-escape-hatches
- React Docs - Synchronizing with Effects: https://scrimba.com/links/react-docs-sync-with-effects
- React Docs - useEffect: https://scrimba.com/links/react-docs-useeffect

### Section 5: Tenzies
- Tenzies Figma Design: https://scrimba.com/links/figma-tenzies-game
- Scrimba Learn React - Updating an item in an array: https://scrimba.com/links/sounds-pads-updating-item-in-array
- React Docs - You Might Not Need an Effect: https://scrimba.com/links/react-docs-you-might-not-need-an-effect
- GitHub - react-confetti: https://scrimba.com/links/react-confetti-github
- Scrimba Learn React - useRef Sneak Peek: https://scrimba.com/links/use-ref-sneak-peak-lesson-hint

### Section 6: Assembly: Endgame
- Assembly Endgame Figma Design: https://scrimba.com/links/figma-assembly-endgame
- NPM - clsx: https://scrimba.com/links/npm-clsx

---

# Integración Continua (CI) y calidad de código

Esta sección documenta el pipeline de **CI (GitHub Actions)** y el tooling de calidad (**ESLint + Prettier**) configurado para los proyectos **activos** del repositorio: `07. Calculator/` y `react-welcome-home/`.

> ℹ️ Este repo **no tiene `package.json` raíz**: cada proyecto es un Vite independiente. Por eso el tooling y los comandos se aplican **dentro de la carpeta de cada proyecto**, y las rutas con espacios o `#` deben ir **entre comillas**.

## ¿Qué valida el CI?

En **cada `push`** y **cada `pull_request`**, GitHub Actions ejecuta —por cada proyecto activo y en paralelo— estos pasos:

| Paso | Comando | Qué verifica |
|------|---------|--------------|
| 1. Instalación con caché | `npm ci` (respaldo `npm install`) | Instala dependencias reutilizando la caché de npm. |
| 2. Lint | `npm run lint` | Reglas de ESLint (React Hooks + React Refresh). |
| 3. Formato | `npm run format:check` | Que el código respete el estilo de Prettier. |
| 4. Type-check | `tsc --noEmit` *(condicional)* | Solo se ejecuta **si existe `tsconfig.json`**. Hoy se omite porque ambos proyectos son JS. |
| 5. Build | `npm run build` | Que el proyecto compile en producción con Vite. |

Todo está definido en **`.github/workflows/ci.yml`**.

## Archivos que componen la configuración

| Archivo | Acción asociada | Propósito |
|---------|-----------------|-----------|
| `.github/workflows/ci.yml` | CI | Pipeline de GitHub Actions: triggers, matriz de proyectos y pasos. **Único, en la raíz.** |
| `<proyecto>/eslint.config.mjs` | Configuración de ESLint | Flat config de ESLint 9 (estilo de la plantilla oficial de Vite). |
| `<proyecto>/.prettierrc.json` | Configuración de Prettier | Estilo de formato: sin `;`, comillas simples, ancho 100, indentación 2. |
| `<proyecto>/.prettierignore` | Configuración de Prettier | Excluye `dist`, `node_modules`, `package-lock.json` (y `src/data` en welcome-home). |
| `<proyecto>/package.json` | Scripts + dependencias | Scripts `lint` / `format` / `format:check` y `devDependencies` de ESLint y Prettier. |
| `<proyecto>/package-lock.json` | Instalación | Lockfile actualizado por `npm install`; lo usan la caché del CI y `npm ci`. |

*(`<proyecto>` = `07. Calculator` y `react-welcome-home`; los archivos de configuración se duplican en cada uno porque son proyectos independientes.)*

## Paso a paso: instalación, configuración y ejecución

A continuación, **todos los comandos ejecutados**, en orden, con su explicación y los archivos que afecta cada uno.

### 1. Diagnóstico del entorno

```bash
node -v && npm -v
```
- **Qué hace:** verifica que Node y npm estén instalados (se usó Node 24 / npm 11 en local; el CI usa **Node 20 LTS**).
- **Archivos afectados:** ninguno (solo lectura).

### 2. Configuración del tooling (creación de archivos)

En **cada** proyecto se crearon estos archivos de configuración:

```text
07. Calculator/eslint.config.mjs        react-welcome-home/eslint.config.mjs
07. Calculator/.prettierrc.json         react-welcome-home/.prettierrc.json
07. Calculator/.prettierignore          react-welcome-home/.prettierignore
```

Y se editó cada `package.json` para añadir los scripts y las `devDependencies`:

```jsonc
"scripts": {
  "lint": "eslint .",
  "format": "prettier --write .",
  "format:check": "prettier --check ."
}
```
- **Qué hace:** define el linter, el formateador y los scripts que tanto tú como el CI usarán.
- **Archivos afectados:** `eslint.config.mjs`, `.prettierrc.json`, `.prettierignore`, `package.json` (en ambos proyectos).

### 3. Instalación de dependencias

```bash
cd "07. Calculator"      && npm install
cd "react-welcome-home"  && npm install
```
- **Qué hace:** descarga e instala las nuevas devDependencies: `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint-config-prettier`, `globals` y `prettier`.
- **Archivos afectados:** actualiza **`package-lock.json`** y crea/actualiza **`node_modules/`** (ignorado por git).

### 4. Formateo inicial (establecer una línea base verde)

```bash
npx prettier --write .   # ejecutado dentro de cada proyecto
```
- **Qué hace:** aplica el estilo de Prettier a todo el código existente, para que el chequeo de formato del CI pase desde el primer commit.
- **Archivos afectados:** reformatea fuentes `.jsx`, `.css`, `.html`, `.md`, etc. (respetando `.prettierignore`).

### 5. Verificación local (reproduce lo que hará el CI)

```bash
npm run lint           # ESLint  → debe terminar en exit 0
npm run format:check   # Prettier → "All matched files use Prettier code style!"
npm run build          # Vite     → genera dist/ sin errores
```
- **Qué hace:** corre localmente los mismos chequeos del CI. Si pasan en verde, el CI también pasará.
- **Archivos afectados:** `npm run build` genera **`dist/`** (ignorado por git); los demás no escriben nada.

### 6. Commit y push

```bash
git add -A
git commit -m "ci: añade ESLint, Prettier y type-check condicional a los proyectos activos"
git push
```
- **Qué hace:** versiona los archivos de configuración, los `package.json`/`package-lock.json` y el código reformateado. Al hacer push se dispara el CI.

## Comandos de uso diario

Ejecutar **dentro de la carpeta del proyecto** (`cd "07. Calculator"` o `cd "react-welcome-home"`):

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Servidor de desarrollo de Vite (http://localhost:5173). |
| `npm run lint` | Reporta problemas de ESLint (no modifica archivos). |
| `npm run format` | **Reescribe** los archivos aplicando Prettier. |
| `npm run format:check` | Solo verifica el formato (no escribe) — es lo que corre el CI. |
| `npm run build` | Build de producción → `dist/`. |
| `npm run preview` | Sirve el build de producción. |