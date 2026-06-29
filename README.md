## Welcome to [Learn React](https://scrimba.com/learn-react-c0e)

[![CI](https://github.com/jrosas47/learn-react-main/actions/workflows/ci.yml/badge.svg)](https://github.com/jrosas47/learn-react-main/actions/workflows/ci.yml)
[![CodeQL](https://github.com/jrosas47/learn-react-main/actions/workflows/codeql.yml/badge.svg)](https://github.com/jrosas47/learn-react-main/actions/workflows/codeql.yml)

> Los badges muestran el estado del **CI** (lint + formato + tests + build) y del análisis de seguridad **CodeQL**. Detalles en la sección [**Integración Continua (CI) y calidad de código**](#integración-continua-ci-y-calidad-de-código) al final de este archivo.

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
| 2. Auditoría de seguridad | `npm audit --omit=dev --audit-level=high` | **Bloquea** si hay vulnerabilidades *high/critical* en dependencias de producción; la auditoría completa se reporta sin bloquear. |
| 3. Lint | `npm run lint` | Reglas de ESLint (React Hooks + React Refresh). |
| 4. Formato | `npm run format:check` | Que el código respete el estilo de Prettier. |
| 5. Type-check | `tsc --noEmit` *(condicional)* | Solo se ejecuta **si existe `tsconfig.json`**. Hoy se omite porque ambos proyectos son JS. |
| 6. Tests + cobertura | `npm run coverage --if-present` | Ejecuta **Vitest** (`vitest run --coverage`) y genera el reporte de cobertura. |
| 7. Artefacto de cobertura | `actions/upload-artifact` | Sube la carpeta `coverage/` como artefacto descargable (`coverage-calculator`, `coverage-welcome-home`). |
| 8. Build | `npm run build` | Que el proyecto compile en producción con Vite. |

Todo está definido en **`.github/workflows/ci.yml`**. La matriz usa entradas `{ project, slug }`: `project` es la carpeta y `slug` nombra el artefacto de cobertura.

## Calidad de código y seguridad

El repositorio combina varias capas, todas automatizadas en GitHub Actions:

**Calidad de código**
- **ESLint** (`npm run lint`) — análisis estático de errores y malas prácticas de React.
- **Prettier** (`npm run format:check`) — estilo de código consistente.
- **Vitest** (`npm run coverage`) — tests unitarios y de integración con cobertura.

**Seguridad**

| Herramienta | Archivo | Qué hace | Cuándo corre |
|-------------|---------|----------|--------------|
| **npm audit** | `.github/workflows/ci.yml` | Audita dependencias; **bloquea** ante vulnerabilidades *high/critical* en producción (`react`/`react-dom`) y reporta el resto sin bloquear. | En cada push y PR, por proyecto. |
| **CodeQL** | `.github/workflows/codeql.yml` | Análisis estático de seguridad de GitHub sobre el código JS/JSX; los hallazgos aparecen en **Security → Code scanning**. | Push/PR a `main` + semanal (lunes 04:23 UTC). |
| **Dependabot** | `.github/dependabot.yml` | Abre PRs automáticos con actualizaciones de dependencias (npm de los 2 proyectos activos + las GitHub Actions); agrupa *minor*/*patch* para reducir ruido. | Semanal. |
| **Auto-merge** | `.github/workflows/dependabot-auto-merge.yml` | Activa el auto-merge de los PRs de Dependabot de tipo **patch**; el merge solo ocurre cuando el CI pasa en verde. | En cada PR de Dependabot. |
| **`.npmrc` (`ignore-scripts`)** | `<proyecto>/.npmrc` | `ignore-scripts=true`: npm **no ejecuta** los scripts de ciclo de vida (`pre`/`post`/`install`) de las dependencias al instalar. Defensa contra malware que se ejecuta durante `npm install`. | En cada `npm ci`/`npm install` (local y CI). |

> 🔒 **Notas:**
> - **CodeQL** es gratuito en repositorios públicos; en privados requiere *GitHub Advanced Security*. Sus resultados se ven en *Security → Code scanning alerts*.
> - **Dependabot** empezará a abrir PRs automáticamente al fusionar su archivo. Ajusta la frecuencia (`interval`) o el tope (`open-pull-requests-limit`) en `.github/dependabot.yml`.
> - Auditoría local: `npm audit` (completa) o `npm audit --omit=dev` (solo producción), dentro de la carpeta del proyecto.
> - **`.npmrc` con `ignore-scripts=true`** en cada proyecto activo bloquea los scripts de instalación de las dependencias. Explicación, compatibilidad y comandos en [**Seguridad de dependencias (cadena de suministro)**](#seguridad-de-dependencias-cadena-de-suministro).
>
> ⚙️ El auto-merge requiere configuración **única** en *Settings* (permitir auto-merge, squash y *branch protection*). Ver [**Activar el auto-merge y proteger `main`**](#activar-el-auto-merge-y-proteger-main) abajo.

### Activar el auto-merge y proteger `main`

El auto-merge necesita configuración en *Settings* del repositorio (una sola vez). Puedes hacerlo desde la **UI de GitHub** o con la **CLI (`gh`)**.

#### Opción A — Desde la UI de GitHub

1. **Permitir auto-merge y squash:** *Settings → General → Pull Requests* → marca **Allow auto-merge** y **Allow squash merging**.
2. **Proteger la rama `main`:** *Settings → Branches → Add branch protection rule* (o *Add ruleset*):
   - **Branch name pattern:** `main`.
   - Marca **Require status checks to pass before merging**.
   - En el buscador de checks añade **`CI · 07. Calculator`** y **`CI · react-welcome-home`** *(opcional: `Analyze (javascript)` de CodeQL)*.
   - **No** marques *Require approvals*: si exiges revisión, los PRs de Dependabot no se auto-fusionarán solos.
   - **Create / Save**.

> 💡 Si los checks no aparecen en el buscador, haz un push o abre un PR para que el CI corra **al menos una vez**; después GitHub los listará.

#### Opción B — Con la CLI de GitHub (`gh`)

```bash
REPO=jrosas47/learn-react-main

# 1. Permitir auto-merge y squash merge en el repositorio
gh repo edit "$REPO" --enable-auto-merge --enable-squash-merge

# 2. Proteger main: exigir los checks del CI antes de fusionar (sin revisión obligatoria)
gh api --method PUT "repos/$REPO/branches/main/protection" --input - <<'JSON'
{
  "required_status_checks": {
    "strict": false,
    "checks": [
      { "context": "CI · 07. Calculator" },
      { "context": "CI · react-welcome-home" }
    ]
  },
  "enforce_admins": false,
  "required_pull_request_reviews": null,
  "restrictions": null
}
JSON
```

> 🪟 En **PowerShell** el *here-doc* (`<<'JSON'`) no funciona. Guarda el JSON en un archivo y pásalo con `--input`:
> ```powershell
> $REPO = "jrosas47/learn-react-main"
> gh repo edit $REPO --enable-auto-merge --enable-squash-merge
> '{ "required_status_checks": { "strict": false, "checks": [ { "context": "CI · 07. Calculator" }, { "context": "CI · react-welcome-home" } ] }, "enforce_admins": false, "required_pull_request_reviews": null, "restrictions": null }' | Out-File -Encoding utf8 protection.json
> gh api --method PUT "repos/$REPO/branches/main/protection" --input protection.json
> Remove-Item protection.json
> ```

> Los nombres de los checks (`CI · 07. Calculator`, `CI · react-welcome-home`) deben coincidir exactamente con el campo `name:` del job en `.github/workflows/ci.yml`. Si cambias la matriz, actualiza estos contextos.

## Archivos que componen la configuración

| Archivo | Acción asociada | Propósito |
|---------|-----------------|-----------|
| `.github/workflows/ci.yml` | CI | Pipeline de GitHub Actions: triggers, matriz de proyectos y pasos. **Único, en la raíz.** |
| `<proyecto>/eslint.config.mjs` | Configuración de ESLint | Flat config de ESLint 9 (estilo de la plantilla oficial de Vite). |
| `<proyecto>/.prettierrc.json` | Configuración de Prettier | Estilo de formato: sin `;`, comillas simples, ancho 100, indentación 2. |
| `<proyecto>/.prettierignore` | Configuración de Prettier | Excluye `dist`, `coverage`, `node_modules`, `package-lock.json` (y `src/data` en welcome-home). |
| `<proyecto>/.npmrc` | Seguridad de instalación | `ignore-scripts=true`: npm no ejecuta scripts de ciclo de vida de las dependencias al instalar (defensa de cadena de suministro). |
| `<proyecto>/package.json` | Scripts + dependencias | Scripts `lint` / `format` / `format:check` / `test` / `coverage` y `devDependencies` de ESLint, Prettier, Vitest y Testing Library. |
| `<proyecto>/package-lock.json` | Instalación | Lockfile actualizado por `npm install`; lo usan la caché del CI y `npm ci`. |
| `<proyecto>/vitest.config.*` | Configuración de tests | Configura Vitest: entorno `jsdom`, archivo de setup y opciones de cobertura. (`vitest.config.mjs` en Calculator, `vitest.config.mts` en welcome-home.) |
| `<proyecto>/.../test/setup.js` | Configuración de tests | Carga los matchers de `@testing-library/jest-dom`. |
| `07. Calculator/lib/calculate.js` | Código testeado | Lógica pura de la calculadora extraída del componente para poder testearla. |
| `*.test.js` / `*.test.jsx` | Tests | Las pruebas de Vitest (ver tabla de la sección **Tests**). |

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
- **Qué hace:** descarga e instala las devDependencies:
  - **Lint/formato:** `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint-config-prettier`, `globals`, `prettier`.
  - **Tests/cobertura:** `vitest`, `@vitest/coverage-v8`, `jsdom`, `@testing-library/react`, `@testing-library/dom`, `@testing-library/jest-dom`, `@testing-library/user-event`.
- **Archivos afectados:** actualiza **`package-lock.json`** y crea/actualiza **`node_modules/`** (ignorado por git).

### 4. Formateo inicial (establecer una línea base verde)

```bash
npx prettier --write .   # ejecutado dentro de cada proyecto
```
- **Qué hace:** aplica el estilo de Prettier a todo el código existente, para que el chequeo de formato del CI pase desde el primer commit.
- **Archivos afectados:** reformatea fuentes `.jsx`, `.css`, `.html`, `.md`, etc. (respetando `.prettierignore`).

### 5. Verificación local (reproduce lo que hará el CI)

```bash
npm run lint           # ESLint   → debe terminar en exit 0
npm run format:check   # Prettier → "All matched files use Prettier code style!"
npm run coverage       # Vitest   → tests en verde + reporte de cobertura
npm run build          # Vite     → genera dist/ sin errores
```
- **Qué hace:** corre localmente los mismos chequeos del CI. Si pasan en verde, el CI también pasará.
- **Archivos afectados:** `npm run build` genera **`dist/`** y `npm run coverage` genera **`coverage/`** (ambos ignorados por git); los demás no escriben nada.

### 6. Commit y push

```bash
git add -A
git commit -m "ci: añade ESLint, Prettier y type-check condicional a los proyectos activos"
git push
```
- **Qué hace:** versiona los archivos de configuración, los `package.json`/`package-lock.json` y el código reformateado. Al hacer push se dispara el CI.

## Tests

Las pruebas usan **[Vitest](https://vitest.dev/)** (+ **Testing Library** para componentes). Se ejecutan con `npm test` dentro de cada proyecto y forman parte del CI.

| Proyecto | Archivo de test | Qué prueba | Tipo |
|----------|-----------------|------------|------|
| `07. Calculator` | `lib/calculate.test.js` | Las operaciones (`+ − × ÷`), la división entre cero → `"Error"` y el recorte de imprecisiones de punto flotante. | Unitario (lógica pura) |
| `07. Calculator` | `components/Calculator.test.jsx` | Renderiza la calculadora y **simula pulsaciones** de botones (`7 + 8 =` → `15`, `6 × 2 − 4 =` → `8`, `AC` reinicia, `÷ 0` → `Error`), verificando el visor. | Integración (componente) |
| `react-welcome-home` | `src/components/Hero.test.jsx` | Que el `Hero` renderiza título/subtítulo y el CTA con su enlace. | Componente (render) |
| `react-welcome-home` | `src/components/NavBar.test.jsx` | Que el `NavBar` pinta todos los enlaces y que el botón hamburguesa alterna `aria-expanded`. | Componente (interacción) |

Para añadir un test: crea un archivo `*.test.js` / `*.test.jsx` junto al código que pruebas; Vitest lo detecta automáticamente.

> 🧩 En el Calculator se extrajo la lógica pura a `lib/calculate.js` (antes vivía dentro de `components/Calculator.jsx`) para poder probarla sin renderizar el componente. El comportamiento de la app no cambió.

### Cobertura de código

`npm run coverage` ejecuta los tests y genera un reporte con el proveedor **v8** de Vitest en la carpeta `coverage/` (ignorada por git):

- **En consola:** una tabla resumen (`% Stmts`, `% Branch`, `% Funcs`, `% Lines`).
- **HTML navegable:** abre `coverage/index.html` en el navegador.
- **`coverage/lcov.info`:** formato estándar para integrarlo con herramientas externas (Codecov, SonarQube, etc.).

En el CI, cada proyecto **sube su carpeta `coverage/` como artefacto** descargable desde la página de la ejecución en *Actions* (`coverage-calculator` y `coverage-welcome-home`). No hay umbral mínimo configurado: la cobertura es informativa, no bloquea el build.

## Comandos de uso diario

Ejecutar **dentro de la carpeta del proyecto** (`cd "07. Calculator"` o `cd "react-welcome-home"`):

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Servidor de desarrollo de Vite (http://localhost:5173). |
| `npm run lint` | Reporta problemas de ESLint (no modifica archivos). |
| `npm run format` | **Reescribe** los archivos aplicando Prettier. |
| `npm run format:check` | Solo verifica el formato (no escribe) — es lo que corre el CI. |
| `npm test` | Ejecuta los tests una vez con Vitest (`vitest run`). |
| `npm run test:watch` | Ejecuta Vitest en modo interactivo (re-corre al guardar). |
| `npm run coverage` | Ejecuta los tests y genera el reporte de cobertura → `coverage/`. |
| `npm audit` | Audita las dependencias en busca de vulnerabilidades conocidas. |
| `npm audit signatures` | Verifica las firmas/procedencia de los paquetes instalados contra el registro de npm. |
| `npm run build` | Build de producción → `dist/`. |
| `npm run preview` | Sirve el build de producción. |

---

# Seguridad de dependencias (cadena de suministro)

Instalar un paquete de npm puede ejecutar **código de terceros en tu máquina y en el CI**. Esta sección resume las defensas configuradas y cómo operarlas. Aplica a los proyectos activos `07. Calculator/` y `react-welcome-home/`.

## Dos amenazas distintas

| Amenaza | Qué es | Defensa principal |
|---------|--------|-------------------|
| **Vulnerabilidades conocidas (CVE)** | Un paquete legítimo con un fallo de seguridad ya reportado. | `npm audit` (bloquea en CI) + Dependabot + CodeQL. |
| **Malware / cadena de suministro** | Un paquete malicioso: *typosquatting*, una versión secuestrada o un `postinstall` que roba credenciales. `npm audit` **no** lo detecta. | `.npmrc` con `ignore-scripts`, `package-lock.json` + `npm ci`, verificación manual antes de instalar. |

## Capas configuradas en este repo

1. **`npm audit` en el CI** — `npm audit --omit=dev --audit-level=high` **bloquea** el build ante vulnerabilidades *high/critical* en dependencias de producción; la auditoría completa se reporta sin bloquear.
2. **Dependabot** (`.github/dependabot.yml`) — abre PRs semanales con actualizaciones y agrupa *minor*/*patch*. Solo abre PRs: **no instala nada en tu máquina** (tu `node_modules` solo cambia cuando tú haces `git pull` + `npm install`).
3. **Auto-merge conservador** (`.github/workflows/dependabot-auto-merge.yml`) — fusiona automáticamente **solo** los PRs de tipo *patch* y **solo si el CI pasa en verde**; *minor*/*major* requieren tu aprobación.
4. **CodeQL** (`.github/workflows/codeql.yml`) — análisis estático de seguridad de tu propio código.
5. **`.npmrc` con `ignore-scripts=true`** (en cada proyecto activo) — npm **no ejecuta** los scripts `preinstall`/`install`/`postinstall` de las dependencias. Es la defensa directa contra el malware que se ejecuta durante `npm install`.
6. **`package-lock.json` + `npm ci`** — instalación reproducible y clavada al lockfile; falla si alguien lo manipuló.

## `.npmrc` con `ignore-scripts` — configuración y compatibilidad

Cada proyecto activo incluye un `.npmrc`:

```ini
# 07. Calculator/.npmrc  y  react-welcome-home/.npmrc
ignore-scripts=true
```

- **Qué hace:** al correr `npm install` / `npm ci`, npm omite los scripts de ciclo de vida de **las dependencias**. Un paquete malicioso ya no puede ejecutar código solo por instalarlo.
- **¿Rompe algo?** Es el *trade-off* habitual: algunos paquetes usan `postinstall` para preparar su binario. En estos dos proyectos la **única** dependencia con `postinstall` es **esbuild** (lo usan Vite y Vitest), y esbuild resuelve su binario desde su paquete de plataforma (`optionalDependencies`), así que **funciona sin el postinstall**.
- **Verificado:** con `.npmrc` puesto, una instalación limpia (`npm ci`) seguida de `npm run build` y `npm test` pasa en verde en ambos proyectos (Calculator: 13 tests; welcome-home: 4 tests).

> ⚠️ Si en el futuro agregas una dependencia que **sí** necesite su script de instalación, esa instalación puede fallar. Soluciones: ejecutar **una vez** `npm rebuild <paquete>` (corre los scripts de ese paquete a propósito) tras revisar que es de confianza, o instalarlo puntualmente con `npm install <paquete> --foreground-scripts`.

## Activar las *security updates* de Dependabot (GitHub)

El `.github/dependabot.yml` configura **version updates** (mantener al día). Las **security updates** (PRs en cuanto se publica una CVE, aunque no sea el día programado) se activan **aparte**, una sola vez, en la UI de GitHub:

**Settings → Code security and analysis**, y activa:
- **Dependency graph**
- **Dependabot alerts**
- **Dependabot security updates**

> 💡 Recomendado además: **Secret scanning** y **Push protection**, para no subir credenciales por accidente.

## Antes de instalar un paquete nuevo (checklist)

1. **Nombre exacto** — copia/pega desde el repo oficial; cuidado con el *typosquatting* (`react-domm`, guiones de más, caracteres parecidos…).
2. **Inspección rápida:** `npm view <paquete>` → último release, repositorio, mantenedores y descargas. Desconfía de un paquete "popular" con pocas descargas o publicado hace horas.
3. **Deja madurar** las versiones recién publicadas; los secuestros suelen detectarse y retirarse en horas/días.
4. **Tras instalar:** `npm audit` y, opcionalmente, `npm audit signatures` (verifica firmas/procedencia contra el registro).

## Comandos de seguridad

Ejecutar **dentro de la carpeta del proyecto** (`cd "07. Calculator"` o `cd "react-welcome-home"`):

```bash
npm audit                                 # auditoría completa (todas las dependencias)
npm audit --omit=dev                      # solo dependencias de producción
npm audit --omit=dev --audit-level=high   # exactamente lo que bloquea el CI
npm audit signatures                      # verifica firmas/procedencia de lo instalado
npm ci                                    # instalación reproducible desde package-lock.json (respeta .npmrc)
npm view <paquete>                        # inspeccionar un paquete antes de añadirlo
npm rebuild <paquete>                     # ejecutar a propósito los scripts de un paquete de confianza
```