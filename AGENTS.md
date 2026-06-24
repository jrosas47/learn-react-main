# AGENTS.md - Guidelines for Claude Code and Agentic Coding Assistants

This file provides guidance for agents working in this React learning course repository.

---

## Repository Overview

This is a [Scrimba's "Learn React"](https://scrimba.com/learn-react-c0e) course repository. Each numbered folder is a **standalone Vite+React project** representing a lesson or capstone project. Projects are **NOT interconnected** - each is self-contained.

```
learn-react-main-vc/
├── 01. Static pages/          # JSX basics, components, styling
├── 02. Data-Driven React/      # Props and data-driven rendering
├── 03. React State/            # useState, event handlers
├── 04. Side Effects/           # useEffect, lifecycle
├── 05. Capstone Project #1 - Tenzies/  # Dice game
├── 06. Capstone Project #2 - Assembly Endgame/  # Word guessing game
├── 07. Calculator/             # Active project - custom calculator
└── react-welcome-home/         # TypeScript Vite project
```

---

## Build/Test/Lint Commands

**All commands must be run from within the specific project folder** - there is no root-level package.json.

```bash
# Navigate to project directory first
cd "07. Calculator"

# Install dependencies (first time only)
npm install

# Development server (default: http://localhost:5173)
npm run dev
# or
npm start

# Production build
npm run build

# Preview production build
npm run preview
```

**Note:** There are **no tests or linters** configured in any project. Do not attempt to run test commands.

### For the TypeScript project
```bash
cd "react-welcome-home"
npm install
npm run dev
npm run build
```

---

## Project Structure Patterns

### Typical JS Project Structure
```
project-name/
├── index.html          # Entry HTML
├── index.jsx           # React DOM render (or main.jsx)
├── App.jsx             # Root component
├── index.css           # Global styles (or styles.css)
├── components/         # Reusable components
│   ├── ComponentName.jsx
│   └── AnotherComponent.jsx
├── vite.config.js      # Vite configuration
└── package.json
```

### TypeScript Project Structure
```
react-welcome-home/
├── index.html
├── vite.config.mts
├── src/
│   ├── main.jsx        # Entry point
│   ├── App.jsx         # Root component
│   └── styles.css      # Global styles
└── package.json
```

---

## Code Style Guidelines

### Component Structure
- **Functional components only** - no class components
- **Default exports** for page-level components
- **Named exports** for reusable utility components when appropriate
- Components should be self-contained with related logic

### Hooks Usage
- Use `useState` for local component state
- Use `useEffect` for side effects (DOM manipulation, subscriptions)
- Use `useRef` for accessing DOM nodes or persisting values across renders
- Use **lazy state initialization** when initial state requires computation:
  ```jsx
  // Good
  const [data, setData] = useState(() => expensiveComputation())
  
  // Avoid (runs on every render)
  const [data, setData] = useState(expensiveComputation())
  ```

### Naming Conventions
| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `Calculator`, `DieComponent` |
| Files | PascalCase for components | `Calculator.jsx`, `Display.jsx` |
| Functions | camelCase | `handleClick`, `calculateResult` |
| Variables | camelCase | `currentValue`, `isGameOver` |
| Constants | SCREAMING_SNAKE_CASE | `BUTTONS`, `OPERATOR_MAP` |
| CSS Classes | kebab-case | `btn--primary`, `display-value` |
| CSS Files | kebab-case | `index.css`, `button-styles.css` |

### CSS Class Naming (BEM-style variants)
- Base class: `.btn`
- Variant: `.btn--primary`, `.btn--operator`, `.btn--number`
- Utility: `.btn--wide` (for spanning columns)
- Combined: `className={\`btn btn--${variant}${wide ? " btn--wide" : ""}\`}`

### CSS Variables for Theming
Use CSS custom properties for theming:
```css
:root {
  --bg-primary: #1a1a2e;
  --color-text: #ffffff;
}

body.light-mode {
  --bg-primary: #ffffff;
  --color-text: #1a1a2e;
}
```

Toggle dark/light mode via `classList.toggle()`:
```jsx
useEffect(() => {
  document.body.classList.toggle("light-mode", !darkMode)
  return () => document.body.classList.remove("light-mode")
}, [darkMode])
```

### Import Order
1. React imports (`import React from "react"`)
2. External libraries (`import { nanoid } from "nanoid"`)
3. Relative imports (`import Calculator from "./components/Calculator"`)
4. CSS imports (`import "./index.css"`)

---

## JSX and Rendering Patterns

### Conditional Rendering
- Use ternary operators for simple conditions
- Use `&&` operator for guarding against falsy values
- Extract complex conditionals into helper functions

```jsx
// Simple condition
{isLoggedIn ? <Dashboard /> : <Login />}

// Guard
{showMessage && <Message />}

// Helper function for complex logic
function renderGameStatus() {
  if (isWon) return <WinMessage />
  if (isLost) return <LoseMessage />
  return null
}
```

### Lists and Keys
- Always use stable, unique `key` props when mapping arrays
- Prefer `id` over array index for keys:
```jsx
{dice.map(die => (
  <Die key={die.id} value={die.value} />
))}
```

### Event Handlers
- Use arrow functions or `useCallback` for stable references
- Pass data through closures rather than currying:
```jsx
// Good
<button onClick={() => handleClick(id)} />

// Avoid
<button onClick={handleClick.bind(null, id)} />
```

---

## State Management

### State Updates with Immutable Patterns
Always create new objects/arrays when updating state:

```jsx
// Array update - use functional form
setItems(prevItems => [...prevItems, newItem])

// Object update - spread existing properties
setState(prev => ({ ...prev, newValue }))

// Conditional update
setItems(prev => prev.includes(item) 
  ? prev.filter(i => i !== item) 
  : [...prev, item])
```

### Avoid Common Pitfalls
```jsx
// BAD - mutating state directly
items.push(newItem)
setItems(items)

// BAD - depending on stale state without functional update
setValue(value + 1) // if multiple updates happen quickly

// GOOD - functional state update
setValue(prev => prev + 1)
```

---

## Accessibility (a11y)

- Use semantic HTML elements (`<main>`, `<section>`, `<header>`, `<button>`)
- Add `aria-label` for icon-only buttons
- Use `aria-live="polite"` for dynamic status updates
- Provide focus management for keyboard users:
  ```jsx
  <button 
    onClick={handleClick}
    disabled={isDisabled}
    aria-disabled={isDisabled}
  >
    {label}
  </button>
  ```
- Include visually-hidden screen reader text for game status:
  ```jsx
  <div className="sr-only" aria-live="polite">
    {gameWon && <p>Congratulations! You won!</p>}
  </div>
  ```

---

## Error Handling

- Validate input at component boundaries
- Handle division by zero explicitly:
  ```jsx
  const result = b === 0 ? "Error" : String(a / b)
  ```
- Use try-catch for async operations
- Display user-friendly error states in the UI

---

## External Dependencies

### Common Libraries Used
- `react`: ^18.2.0 or ^18.3.1
- `react-dom`: ^18.2.0 or ^18.3.1
- `vite`: ^5.0.0 or ^6.0.0
- `@vitejs/plugin-react`: ^4.0.0 or ^4.3.0

### Occasionally Used Libraries
- `nanoid`: For generating unique IDs
- `clsx`: For conditional className composition
- `react-confetti`: For celebration effects

**Note:** Do not add external state management libraries (Redux, Zustand, etc.) unless explicitly requested.

---

## Working Guidelines

### Before Making Changes
1. Identify the correct project folder
2. Read existing component patterns in that project
3. Check CSS files for existing styles and variables

### When Adding Features
1. Follow existing naming and structure conventions
2. Use CSS variables for theming when applicable
3. Add accessibility attributes for interactive elements
4. Test in browser after implementation

### Code Quality
- No TODO comments in production code (educational codebase)
- Remove unused imports
- Keep functions focused and small (< 50 lines when possible)
- Use meaningful variable names

---

## File Size Limits

- Keep components focused on a single responsibility
- Extract complex logic into utility functions (e.g., `utils.js`)
- Large constant arrays (like BUTTONS configs) can be defined at module level

---

## Common Patterns Reference

### Button Component Pattern
```jsx
export default function Button({ label, onClick, variant = "default" }) {
  return (
    <button 
      className={`btn btn--${variant}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}
```

### Display Component Pattern
```jsx
export default function Display({ expression, value }) {
  return (
    <div className="display">
      <div className="display-expression">{expression}</div>
      <div className="display-value">{value}</div>
    </div>
  )
}
```

### Calculator State Pattern
```jsx
export default function Calculator() {
  const [currentValue, setCurrentValue]   = useState("0")
  const [previousValue, setPreviousValue] = useState(null)
  const [operator, setOperator]           = useState(null)
  const [waitingForOperand, setWaiting]   = useState(false)
  
  // ... handlers and render
}
```
