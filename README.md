## Welcome to [Learn React](https://scrimba.com/learn-react-c0e)

[![CI](https://github.com/jrosas47/learn-react-main/actions/workflows/ci.yml/badge.svg)](https://github.com/jrosas47/learn-react-main/actions/workflows/ci.yml)
[![CodeQL](https://github.com/jrosas47/learn-react-main/actions/workflows/codeql.yml/badge.svg)](https://github.com/jrosas47/learn-react-main/actions/workflows/codeql.yml)
[![codecov](https://codecov.io/gh/jrosas47/learn-react-main/branch/main/graph/badge.svg)](https://codecov.io/gh/jrosas47/learn-react-main)

> Los badges muestran el estado del **CI** (lint + formato + tests + build), del análisis de seguridad **CodeQL** y de la **cobertura de tests (Codecov)**. Detalles en la sección [**Integración Continua (CI) y calidad de código**](#integración-continua-ci-y-calidad-de-código) al final de este archivo.

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

## Resumen de lo implementado

Todo lo configurado en los proyectos activos (`07. Calculator/` y `react-welcome-home/`):

| Área | Qué se implementó | Dónde |
|------|-------------------|-------|
| **Calidad de código** | ESLint 9 (flat config: React Hooks + React Refresh) y Prettier (sin `;`, comillas simples, ancho 100). | `eslint.config.mjs`, `.prettierrc.json`, `.prettierignore` |
| **Tests + cobertura** | Vitest (`jsdom` + Testing Library) con reporte de cobertura v8 (`text`/`html`/`lcov`). | `vitest.config.*`, `*.test.js[x]`, `test/setup.js` |
| **CI (GitHub Actions)** | Pipeline en matriz sobre los 2 proyectos: install → audit → lint → formato → type-check condicional → tests/cobertura → artefacto → **Codecov** → **SonarQube** → build. | `.github/workflows/ci.yml` |
| **Cobertura publicada** | Cobertura subida a **Codecov** con un *flag* por proyecto (badge + *diff* en PRs). | `ci.yml` + secret `CODECOV_TOKEN` |
| **Calidad + seguridad unificadas** | **SonarQube Cloud** (1 proyecto Sonar por carpeta): bugs, *code smells*, *security hotspots*, duplicación, cobertura y *Quality Gate*. | `<proyecto>/sonar-project.properties` + secret `SONAR_TOKEN` |
| **Seguridad — CVEs** | `npm audit` que **bloquea** en CI ante *high/critical* en producción; **CodeQL** (análisis estático); **Dependabot** (*version* + *security updates*). | `ci.yml`, `codeql.yml`, `dependabot.yml` |
| **Seguridad — cadena de suministro** | `.npmrc` con `ignore-scripts=true` (bloquea scripts de instalación de dependencias). | `<proyecto>/.npmrc` |
| **Automatización de PRs** | Auto-merge de los PRs *patch* de Dependabot, solo con el CI en verde. | `dependabot-auto-merge.yml` |
| **Despliegue (CD)** | Publicación de ambos proyectos en **GitHub Pages** bajo subrutas, vía workflow al hacer push a `main`. | `.github/workflows/deploy.yml`, `pages-index.html` |
| **Documentación** | Configuración, comandos, paso a paso y operación (este README). | `README.md`, `CLAUDE.md` |

> Cada fila tiene su sección detallada más abajo. Los archivos de configuración se **duplican por proyecto** porque son Vite independientes.

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
| 8. Cobertura a Codecov | `codecov/codecov-action@v5` | Publica `coverage/lcov.info` en Codecov con un *flag* por proyecto (`calculator` / `welcome-home`). No bloquea el CI si la subida falla. |
| 9. Análisis SonarQube | `SonarSource/sonarqube-scan-action@v5` | Analiza cada proyecto en SonarQube Cloud (calidad, seguridad, duplicación y cobertura) y evalúa la *Quality Gate*. |
| 10. Build | `npm run build` | Que el proyecto compile en producción con Vite. |

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
| **Dependabot** | `.github/dependabot.yml` | Abre PRs automáticos con actualizaciones de dependencias (npm de los 2 proyectos activos + las GitHub Actions). **Agrupado para reducir ruido:** 1 PR para todas las Actions y, por proyecto npm, 1 PR de *producción* (`react`/`react-dom`) y 1 de *desarrollo* (tooling) — incluyendo *major*. | Semanal. |
| **Auto-merge** | `.github/workflows/dependabot-auto-merge.yml` | Activa el auto-merge de los PRs de Dependabot de tipo **patch**; el merge solo ocurre cuando el CI pasa en verde. | En cada PR de Dependabot. |
| **`.npmrc` (`ignore-scripts`)** | `<proyecto>/.npmrc` | `ignore-scripts=true`: npm **no ejecuta** los scripts de ciclo de vida (`pre`/`post`/`install`) de las dependencias al instalar. Defensa contra malware que se ejecuta durante `npm install`. | En cada `npm ci`/`npm install` (local y CI). |
| **SonarQube Cloud** | `<proyecto>/sonar-project.properties` | Calidad + seguridad unificadas: bugs, *code smells*, *security hotspots*, duplicación, cobertura y una **Quality Gate**. Un proyecto Sonar por carpeta. | En cada push y PR, por proyecto. |

> 🔒 **Notas:**
> - **CodeQL** es gratuito en repositorios públicos; en privados requiere *GitHub Advanced Security*. Sus resultados se ven en *Security → Code scanning alerts*.
> - **Dependabot** empezará a abrir PRs automáticamente al fusionar su archivo. Ajusta la frecuencia (`interval`) o el tope (`open-pull-requests-limit`) en `.github/dependabot.yml`.
> - Auditoría local: `npm audit` (completa) o `npm audit --omit=dev` (solo producción), dentro de la carpeta del proyecto.
> - **`.npmrc` con `ignore-scripts=true`** en cada proyecto activo bloquea los scripts de instalación de las dependencias. Explicación, compatibilidad y comandos en [**Seguridad de dependencias (cadena de suministro)**](#seguridad-de-dependencias-cadena-de-suministro).
>
> ⚙️ El auto-merge requiere configuración **única** en *Settings* (permitir auto-merge, squash y *branch protection*). Ver [**Activar el auto-merge y proteger `main`**](#activar-el-auto-merge-y-proteger-main) abajo.

### CodeQL: una sola configuración (este repo usa *advanced*)

CodeQL tiene **dos modos que no pueden coexistir**:

- **Default setup** — lo gestiona GitHub desde *Settings*, sin workflow.
- **Advanced setup** — el workflow `codeql.yml` (es el que usa este repo: permite `queries: security-and-quality`, *schedule* semanal y control total).

Si el **Default setup está activo a la vez** que el workflow avanzado, GitHub **rechaza** el SARIF del workflow con el error:

> *"Code Scanning could not process the submitted SARIF file"* — en el log suele detallar *"advanced configurations cannot be processed when the default setup is enabled"*.

**Solución (una vez):** *Settings → Code security → Code scanning → CodeQL analysis →* **Switch to advanced** (desactiva el Default). El asistente ofrecerá crear un `codeql.yml`: **no lo commitees** — el del repo ya existe y lo sobrescribirías. Después **re-ejecuta** el run de CodeQL y el SARIF se acepta.

### Comparativa: qué hace cada herramienta y qué se solapa

Varias capas **se solapan en parte**. Esta tabla aclara la utilidad propia de cada una y qué añade respecto a las demás:

| Herramienta | Categoría | Utilidad propia | Se solapa con | Qué añade que las otras no |
|---|---|---|---|---|
| **ESLint** | Calidad (lint) | Errores y malas prácticas de JS/React por archivo. | SonarQube (*code smells*) | Reglas específicas de **React Hooks/Refresh** y *fix* inmediato en el editor. |
| **Prettier** | Formato | Estilo de código uniforme. | — | Formateo **automático** (reescribe), no solo detección. |
| **Vitest** | Tests | Ejecuta las pruebas y mide cobertura. | — | Es la **base**: sin tests no hay cobertura que reportar. |
| **Codecov** | Cobertura | Visualiza la cobertura y su *diff* por PR. | SonarQube (cobertura) | Dashboard de cobertura dedicado y **diff coverage** muy pulido, por *flag*. |
| **npm audit** | Seguridad de deps | Detecta CVEs conocidas en las deps y **bloquea** el CI. | Dependabot, SonarQube | Es una **puerta** en el CI (rompe el build ante *high/critical*). |
| **Dependabot** | Mantenimiento de deps | Abre PRs que **actualizan** deps vulnerables/desactualizadas. | npm audit | No solo detecta: **propone el arreglo** (PR) y lo mantiene. |
| **CodeQL** | Seguridad del código | Análisis profundo de *data-flow* en tu código. | SonarQube (*security*) | Motor de seguridad de GitHub; alertas en **Security → Code scanning**. |
| **SonarQube Cloud** | Calidad + seguridad + cobertura **unificadas** | Reúne todo en un dashboard con una **Quality Gate**. | ESLint, CodeQL, Codecov | **Quality Gate** que aprueba/bloquea, ratings A–E de **fiabilidad/seguridad/mantenibilidad**, **duplicación** y **deuda técnica**. |

**En resumen:**
- **Seguridad:** `npm audit` (deps, *gate*) + **CodeQL** (tu código, profundo) + **SonarQube** (visión consolidada). Se complementan más de lo que se repiten.
- **Calidad/estilo:** **ESLint** (reglas React, al instante) + **Prettier** (formato) + **SonarQube** (*smells*, duplicación, deuda).
- **Cobertura:** **Codecov** (especializado, *diff* por PR) y **SonarQube** (la integra en su Quality Gate). Puedes quedarte con uno o tener ambos.
- **Lo que SOLO aporta SonarQube:** la **Quality Gate** unificada, la **duplicación de código** y la **deuda técnica** con ratings.

### Activar el auto-merge y proteger `main`

> **¿Qué es y para qué sirve la *branch protection*?** Son reglas sobre `main` que impiden que entre código sin pasar por el filtro: exigen un **PR** (nada de `push` directo a `main`), que los **checks del CI estén en verde** antes de fusionar y, opcionalmente, **revisión**. Sin ella, GitHub te deja mergear aunque el CI esté en rojo; **con** ella, el CI se vuelve una **puerta real** y el auto-merge de Dependabot solo fusiona lo que pasa los checks. También bloquea el *force-push* y el borrado de la rama.

El auto-merge necesita configuración en *Settings* del repositorio (una sola vez). Puedes hacerlo desde la **UI de GitHub** o con la **CLI (`gh`)**.

#### Estrategias de merge (qué casillas marcar)

En *Settings → General → Pull Requests* hay cuatro casillas. Las tres primeras eligen **cómo** se fusiona un PR; la cuarta habilita la auto-fusión:

| Opción | Qué hace | Implicación en el historial |
|---|---|---|
| **Allow merge commits** | Fusiona creando un *merge commit*. | Conserva **todos** los commits del PR + un commit de merge (historia ramificada, con "burbujas"). |
| **Allow squash merging** | Aplasta el PR en **un solo commit**. | Historia **lineal y limpia**: 1 PR = 1 commit en `main`. |
| **Allow rebase merging** | Reaplica los commits del PR sobre `main`. | Historia **lineal**, pero conserva cada commit (sin merge commit). |
| **Allow auto-merge** | Permite que un PR se fusione **solo** cuando sus checks requeridos pasan. | No afecta el historial; es el "interruptor" del auto-merge. |

> ⚠️ **Imprescindibles en este repo:** **Allow squash merging** y **Allow auto-merge**. El workflow `dependabot-auto-merge.yml` ejecuta `gh pr merge --auto --squash`, así que sin esas dos el auto-merge de Dependabot falla.

**Combinación recomendada según la estrategia de historial que prefieras:**

| Estrategia | Marca | Desmarca | Para quién |
|---|---|---|---|
| **Lineal limpia** (recomendada) | Squash + Auto-merge | Merge commits, Rebase | 1 PR = 1 commit; lo más fácil de leer. Encaja con el auto-merge por *squash*. |
| **Flexible** (lo que tienes ahora) | Las 4 | — | Eliges la estrategia en cada PR; cómodo, pero historial mixto. |
| **Lineal conservando commits** | Rebase + Squash + Auto-merge | Merge commits | Lineal, pero puedes preservar los commits de un PR cuando interese. |

> No hay opción "incorrecta": mientras **Squash** y **Auto-merge** sigan marcadas, todo funciona. El resto es preferencia de estilo del historial.

**Otra casilla — *Always suggest updating pull request branches*:** muestra **siempre** el botón **"Update branch"** cuando `main` avanzó, para traer lo último de `main` a la rama del PR con un clic (aunque no haya conflictos ni lo exija la protección). Cada actualización crea un *merge commit* en la rama del PR, pero **con _squash_ ese ruido se colapsa al fusionar**. Es **opcional** y **no afecta al auto-merge**: actívala por comodidad o déjala desactivada si prefieres menos ruido en los PRs.

> No confundir con *Require branches to be up to date before merging* (de la *branch protection*): esa **obliga** a que la rama esté al día antes de poder fusionar; *Always suggest…* solo **sugiere** el botón, no obliga.

#### Flujo de ramas: tras un *squash merge*, crea una rama nueva

El **squash merge** crea en `main` un commit **nuevo** (SHA distinto) con el mismo contenido que tu rama; **no** incorpora los commits originales de la rama. Por eso, después de fusionar, GitHub sigue viendo tu rama como **"divergente"** (mismo contenido, distinta historia) y el botón **"New pull request"** te ofrece PRs *fantasma* (con diff vacío).

> Síntoma típico: "main y mi rama parecen distintas y el botón de nuevo PR siempre está activo, aunque ya fusioné". Es **esperado** con squash, no un error.

**Regla:** tras fusionar un PR con *squash*, **borra la rama y crea una nueva desde `main` actualizado** para el siguiente cambio. No reutilices la rama ya fusionada.

```bash
git checkout main
git pull origin main                       # trae el commit squash recién fusionado
git branch -D <rama-fusionada>             # borra local (squash → git no la ve como mergeada)
git push origin --delete <rama-fusionada>  # borra remota (o el botón "Delete branch" del PR)
git checkout -b <rama-nueva>               # parte limpio desde main para lo siguiente
```

#### Classic vs. Ruleset (cuál usar)

GitHub ofrece **dos sistemas** para proteger ramas. **Aquí seguimos el _classic_** (más simple y suficiente para proteger `main`); el *ruleset* es la alternativa moderna y más potente que GitHub recomienda a futuro. Ambos logran lo mismo: exigir PR + checks del CI en verde.

| | **Classic branch protection** | **Branch ruleset** |
|---|---|---|
| Estado | Original (en mantenimiento). | Nuevo, **recomendado** por GitHub. |
| Composición | 1 regla por patrón; no se combinan. | Varias reglas en **capas** con prioridad. |
| Modos | Solo activo. | **Active / Evaluate (prueba) / Disabled**. |
| Extras | Lo básico. | *Bypass lists*, reglas de commits, **export/import JSON**. |
| Targeting | Patrón de rama. | *Default branch*, patrones múltiples, ramas/tags. |

**Equivalencia de ajustes** (lo que marcas en *classic* → su equivalente en *ruleset*):

| Classic | Ruleset |
|---|---|
| *Branch name pattern* = `main` | **Target branches** → *Include default branch* (o patrón `main`) |
| *Require a pull request before merging* | Regla **Require a pull request before merging** |
| *Require status checks to pass* + checks | Regla **Require status checks to pass** + añadir los checks |
| *Require branches to be up to date* | Casilla homónima dentro de esa regla |
| *Do not allow bypassing* | **Bypass list** vacía + *Enforcement status: Active* |
| (implícito) bloquear `push` directo / *force-push* | Reglas **Restrict deletions** + **Block force pushes** |

> Para un *ruleset* equivalente: *Settings → Rules → Rulesets → New branch ruleset* → *Enforcement: Active*, *Target: Default branch*, y activa las reglas de la columna derecha. El modo *Evaluate* permite probarlo sin bloquear todavía.

#### Opción A — Classic, paso a paso (lo que usamos)

**Paso 1 · Habilitar auto-merge y squash**

1. Repo → **Settings** → **General**.
2. Baja a la sección **Pull Requests**.
3. Marca **Allow auto-merge** y **Allow squash merging** (se guarda solo).

**Paso 2 · Crear la regla *classic* de `main`**

1. Repo → **Settings** → **Branches**.
2. En **Branch protection rules** → **Add classic branch protection rule**.
3. **Branch name pattern:** escribe `main`.
4. ✅ **Require a pull request before merging** (impide el `push` directo a `main`).
   - ⚠️ Deja **Required approvals** en **0**: si exiges aprobación, los PRs de **Dependabot no se auto-fusionarán** solos. (Si prefieres revisión humana, súbelo a 1 y asume merge manual.)
   - *Dismiss stale approvals* / *Require review from Code Owners*: **sin marcar**.
5. ✅ **Require status checks to pass before merging**.
   - *(Opcional, más estricto)* ✅ **Require branches to be up to date before merging**.
   - En el buscador añade los checks a **exigir**:
     - **`CI · 07. Calculator`** y **`CI · react-welcome-home`** (obligatorios).
     - *(opcionales)* `Analyze (javascript)` (CodeQL), `codecov/project`, `codecov/patch`, `SonarQube Code Analysis`.
6. *(Opcional)* ✅ **Require conversation resolution before merging** (obliga a resolver los comentarios del PR antes de fusionar).
7. ✅ **Do not allow bypassing the above settings** (aplica también a administradores) — recomendado.
8. **Deja SIN marcar** (no los necesitas aquí): *Require signed commits*, *Require linear history*, *Require deployments to succeed*, *Lock branch*.
9. Pulsa **Create** (o **Save changes**).

**Paso 3 · Verificar que quedó activa**

- Abre (o reutiliza) un PR hacia `main`: el botón **Merge** debe estar **bloqueado** hasta que los checks requeridos estén en verde.
- Un `git push` directo a `main` debe ser **rechazado** por el remoto.
- En *Settings → Branches* la regla aparece listada junto a `main`.

> 💡 Si un check no aparece en el buscador, es que aún no ha corrido: haz un push o abre un PR para que se ejecute **al menos una vez** y vuelve a buscarlo.
>
> 🔢 **Orden recomendado:** primero mergea el PR `ci/github-actions → main` (para que `main` tenga el CI) y luego crea la regla. Si la creas antes, el propio PR deberá cumplir los checks para poder fusionarse.

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

## SonarQube Cloud

Análisis unificado de **calidad + seguridad + cobertura** con una *Quality Gate*. Al ser un monorepo de proyectos independientes se usa **un proyecto Sonar por carpeta** (`calculator` y `welcome-home`), análogo a los *flags* de Codecov: el análisis corre **dentro** de cada proyecto y su cobertura (`coverage/lcov.info`) mapea correctamente.

### Configuración (única)

1. **Alta:** en [sonarcloud.io](https://sonarcloud.io) con GitHub, crea la **organización** (gratis en repos públicos) e importa el repo creando **dos proyectos** (uno por carpeta).
2. **Desactiva *Automatic Analysis*** en cada proyecto (*Administration → Analysis Method* → *CI-based / GitHub Actions*). Es obligatorio: *Automatic Analysis* no lee la cobertura lcov y choca con el análisis del CI.
3. **Token:** genera uno en *My Account → Security* y guárdalo en GitHub como secret **`SONAR_TOKEN`** (un solo token sirve para ambos proyectos).
4. **Config por proyecto:** cada carpeta tiene su `sonar-project.properties`. Los `projectKey`/`organization` **deben coincidir exactamente** con los de sonarcloud.io.
5. **CI:** el paso `SonarSource/sonarqube-scan-action@v5` corre dentro del job de matriz con `projectBaseDir: ${{ matrix.project }}`, y el `Checkout` usa `fetch-depth: 0` (Sonar necesita el historial para detectar "código nuevo" y decorar PRs).
6. **Renombra la rama principal a `main`:** al crear el proyecto, Sonar nombra la rama principal `master` por defecto y **no se sincroniza** con la de GitHub. En cada proyecto: *Administration → Branches and Pull Requests →* menú **⋯ → Rename →** `main`. Hazlo **antes** de analizar `main` (si ya hubiera una rama `main` suelta, bórrala primero y luego renombra `master`). Importa porque la *Quality Gate* sobre "código nuevo" se calcula comparando contra la rama principal.

```properties
# <proyecto>/sonar-project.properties
sonar.organization=jrosas47
sonar.projectKey=jrosas47_learn-react-<calculator|welcome-home>
sonar.sources=.
sonar.tests=.
sonar.test.inclusions=**/*.test.js,**/*.test.jsx
sonar.exclusions=node_modules/**,dist/**,coverage/**
sonar.javascript.lcov.reportPaths=coverage/lcov.info
```

### Cómo validar

| Dónde | Qué confirmas |
|---|---|
| **GitHub → Actions** | El paso *"Análisis SonarQube Cloud"* termina en verde con *"ANALYSIS SUCCESSFUL"*. |
| **Dashboard** `sonarcloud.io` (cada proyecto) | **Quality Gate** (Passed/Failed), **Bugs**, **Vulnerabilities**, **Security Hotspots**, **Code Smells**, **Coverage %**, **Duplications** y ratings A–E. |
| **En un PR** | Sonar comenta el análisis del *diff* y añade un **check** propio (puedes exigirlo en la *branch protection*). |
| **Badge** | En el proyecto Sonar → *Information* obtienes el markdown del badge de Quality Gate para el README. |

> ⚠️ Si los `projectKey`/`organization` del `.properties` no coinciden con sonarcloud.io, el paso del CI **falla**. Verifícalos en *Proyecto → Information*.

### Cuándo aparece la cobertura

La cobertura se sube **en el mismo run** (el paso de cobertura corre antes que el de Sonar, así que el `lcov.info` viaja con el análisis). Dónde la ves depende de la rama:

| Vista en Sonar | ¿Cobertura? |
|---|---|
| Rama analizada (p. ej. `ci/github-actions`) | **Sí, inmediata** — selecciónala en el desplegable de ramas del proyecto. |
| Vista principal (`main`) | **Tras mergear el PR** y que el CI corra en `main` (es el % que muestra el badge). |

> Si abres el proyecto y lo ves "vacío", probablemente estás en la rama principal aún sin analizar: cambia el desplegable a la rama de *feature*.

### Badge de Quality Gate (opcional)

En el proyecto Sonar → *Information* obtienes el markdown del badge. Como hay **dos** proyectos, tendrías dos badges (uno por proyecto):

```markdown
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=jrosas47_learn-react-calculator&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jrosas47_learn-react-calculator)
```

## Archivos que componen la configuración

| Archivo | Acción asociada | Propósito |
|---------|-----------------|-----------|
| `.github/workflows/ci.yml` | CI | Pipeline de GitHub Actions: triggers, matriz de proyectos y pasos. **Único, en la raíz.** |
| `.github/workflows/deploy.yml` | Despliegue (CD) | Publica ambos proyectos en GitHub Pages bajo subrutas, al hacer push a `main`. |
| `.github/pages-index.html` | Despliegue (CD) | Landing del sitio de Pages que enlaza `/calculator` y `/welcome-home`. |
| `<proyecto>/eslint.config.mjs` | Configuración de ESLint | Flat config de ESLint 9 (estilo de la plantilla oficial de Vite). |
| `<proyecto>/.prettierrc.json` | Configuración de Prettier | Estilo de formato: sin `;`, comillas simples, ancho 100, indentación 2. |
| `<proyecto>/.prettierignore` | Configuración de Prettier | Excluye `dist`, `coverage`, `node_modules`, `package-lock.json` (y `src/data` en welcome-home). |
| `<proyecto>/.npmrc` | Seguridad de instalación | `ignore-scripts=true`: npm no ejecuta scripts de ciclo de vida de las dependencias al instalar (defensa de cadena de suministro). |
| `<proyecto>/sonar-project.properties` | SonarQube Cloud | `projectKey`/`organization`, fuentes, exclusiones y ruta de cobertura lcov para el análisis de cada proyecto. |
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

### 7. Seguridad de dependencias (añadido después del tooling base)

```bash
# Por proyecto activo:
printf 'ignore-scripts=true\n' > .npmrc   # bloquea scripts de instalación de dependencias
npm ci && npm run build && npm test       # verificar que sigue todo en verde
```
- **Qué hace:** añade el `.npmrc` (defensa de cadena de suministro) y suma al CI el paso de `npm audit`. Se crearon además `.github/dependabot.yml` (actualizaciones), `.github/workflows/codeql.yml` (análisis estático) y `.github/workflows/dependabot-auto-merge.yml` (auto-merge de *patch*).
- **Archivos afectados:** `<proyecto>/.npmrc`, `.github/dependabot.yml`, `.github/workflows/codeql.yml`, `.github/workflows/dependabot-auto-merge.yml`, `.github/workflows/ci.yml`.
- **Detalle completo:** sección [**Seguridad de dependencias (cadena de suministro)**](#seguridad-de-dependencias-cadena-de-suministro).

### 8. Cobertura en Codecov

```bash
# Alta en codecov.io + guardar el token como secret CODECOV_TOKEN en GitHub.
# Luego el CI sube coverage/lcov.info automáticamente; nada que correr en local.
```
- **Qué hace:** publica la cobertura en Codecov (badge + *diff* en PRs) mediante el paso `codecov/codecov-action@v5` del `ci.yml`, con un *flag* por proyecto.
- **Archivos afectados:** `.github/workflows/ci.yml`, `README.md` (badge). **Configuración manual:** secret `CODECOV_TOKEN`.
- **Detalle completo:** subsección [**Codecov**](#codecov).

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

### Codecov

Además del artefacto, el CI **publica la cobertura en [Codecov](https://codecov.io/)** (paso `codecov/codecov-action@v5`), que añade badge, comentario en cada PR, *diff* de cobertura e histórico. Como el repo es un monorepo, cada proyecto se sube con su propio **flag** (`calculator` / `welcome-home`) para que Codecov no mezcle las dos coberturas.

Requisitos (configuración **única**):

1. Dar de alta el repo en [codecov.io](https://codecov.io/) con tu cuenta de GitHub y copiar el *Repository Upload Token*.
2. Guardarlo en GitHub → *Settings → Secrets and variables → Actions* como secret **`CODECOV_TOKEN`**.

El paso usa `fail_ci_if_error: false`: si la subida a Codecov falla (p. ej. token ausente en un fork), el CI **no** se rompe.

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
2. **Dependabot** (`.github/dependabot.yml`) — abre PRs semanales con actualizaciones, **agrupados** (1 PR para las Actions; por proyecto npm, 1 de *producción* y 1 de *desarrollo*, incluyendo *major*) para reducir el ruido. Solo abre PRs: **no instala nada en tu máquina** (tu `node_modules` solo cambia cuando tú haces `git pull` + `npm install`).
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

## Dependabot: *version updates* vs. *security updates*

Dependabot abre PRs por **dos vías independientes**; conviene distinguirlas para no asustarse cuando aparecen PRs "solos":

| | *Version updates* | *Security updates* |
|---|---|---|
| **Qué las dispara** | El archivo `.github/dependabot.yml` (leído desde la rama por defecto). | Las **Dependabot alerts** (*Settings → Code security*), aunque **no** exista `dependabot.yml`. |
| **Cuándo** | En el `interval` programado (semanal). | En cuanto se publica una CVE que te afecta. |
| **Qué actualizan** | Solo dependencias **directas** de los proyectos configurados. | Cualquier dependencia vulnerable, **incluidas las indirectas/transitivas**. |
| **Cómo reconocerlas** | Commit `build(deps…)` sobre una dependencia directa. | Commit con `dependency-type: indirect` o que cita un *advisory*; ramas `dependabot/…` que aparecen sin haber tocado el `.yml`. |

> 🔎 Si ves ramas `origin/dependabot/…` y PRs abiertos **sin** haber fusionado aún el `dependabot.yml` a `main`, son **security updates** (las disparan las alertas del repo, no el `.yml`).

### Cómo manejar los PRs de Dependabot

1. **Deja correr el CI** del PR (lint + tests + build + audit). Si está en rojo, no lo fusiones.
2. **Patches y _minors_ de bajo riesgo** (p. ej. `postcss`, `picomatch`) → seguros de fusionar tras el CI verde.
3. ⚠️ **PRs agrupados con saltos de _major_** (p. ej. `vite 5 → 8`, `@vitejs/plugin-react 4 → 6`) **pueden romper el build**. Pruébalos en local (`npm ci && npm run build && npm test`) antes de fusionar, o ciérralos si no quieres saltar de *major* ahora.
4. **Auto-merge:** solo los *patch* se fusionan solos, y únicamente con el CI en verde y tras configurar *branch protection* (ver [arriba](#activar-el-auto-merge-y-proteger-main)). Nota: como el agrupado incluye *major*, casi ningún PR será un *patch* suelto, así que en la práctica el auto-merge rara vez se activa y los PRs agrupados se fusionan a mano.

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

---

# Despliegue continuo (GitHub Pages)

Los dos proyectos activos se publican como **sitio estático** en **GitHub Pages**, bajo subrutas, mediante el workflow `.github/workflows/deploy.yml`.

## Por qué Pages (hosting estático)

GitHub Pages solo **sirve archivos** (HTML/CSS/JS) por CDN; **no ejecuta código en servidor**. Calculator y react-welcome-home son **SPAs estáticas** (Vite genera un `dist/` de archivos y toda la lógica corre en el navegador), así que encajan perfecto y es **gratis**. *(No serviría para apps con backend/SSR — Next.js con API, Express, etc. —, que necesitan un host que ejecute código.)*

## Cómo funciona el workflow

`deploy.yml` se dispara **al hacer push a `main`** (o manualmente con *Run workflow*) y:

1. Compila cada proyecto con su **`--base`** correspondiente (pasado por CLI para **no tocar** los `vite.config`):
   - Calculator → `--base=/learn-react-main/calculator/`
   - welcome-home → `--base=/learn-react-main/welcome-home/`
   > Pages sirve en `https://<usuario>.github.io/<repo>/`, por eso el `base` incluye el nombre del repo y la subruta; sin él, los assets (`/assets/...`) darían **404**.
2. **Ensambla** un único sitio en `_site/`: `_site/calculator/`, `_site/welcome-home/` y un `index.html` (copiado de `.github/pages-index.html`) que los enlaza.
3. **Publica** con `actions/upload-pages-artifact` + `actions/deploy-pages` (entorno `github-pages`).

## Configuración (única)

**Settings → Pages → Build and deployment → Source = `GitHub Actions`** (no *Deploy from a branch*). **Sin esto el deploy falla.**

## Cómo validar

| Dónde | Qué confirmas |
|---|---|
| **GitHub → Actions** | El run **"Deploy a GitHub Pages"** termina en verde; el job *Deploy* muestra la **URL** publicada. |
| **Navegador** | La landing carga y los enlaces a `/calculator/` y `/welcome-home/` abren cada app. |

URLs publicadas:

- Landing: `https://jrosas47.github.io/learn-react-main/`
- 🧮 Calculator: `https://jrosas47.github.io/learn-react-main/calculator/`
- 🏠 welcome-home: `https://jrosas47.github.io/learn-react-main/welcome-home/`

## Notas

- El `--base` se pasa **solo en el CI**: tu `npm run dev`/`build` local no cambia.
- El deploy **solo corre en `main`** (no en ramas ni PRs): el sitio refleja siempre lo fusionado.
- El primer despliegue puede tardar 1–2 min en propagarse en el CDN de Pages.
- Si renombras el repositorio, actualiza los `--base` de `deploy.yml` (incluyen el nombre del repo).