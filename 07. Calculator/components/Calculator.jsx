import React, { useState, useEffect } from "react"
import Display from "./Display"
import Button from "./Button"

const BUTTONS = [
  { label: "AC", variant: "function" },
  { label: "⌫",  variant: "function" },
  { label: "%",  variant: "function" },
  { label: "÷",  variant: "operator" },

  { label: "7",  variant: "number" },
  { label: "8",  variant: "number" },
  { label: "9",  variant: "number" },
  { label: "×",  variant: "operator" },

  { label: "4",  variant: "number" },
  { label: "5",  variant: "number" },
  { label: "6",  variant: "number" },
  { label: "−",  variant: "operator" },

  { label: "1",  variant: "number" },
  { label: "2",  variant: "number" },
  { label: "3",  variant: "number" },
  { label: "+",  variant: "operator" },

  { label: "+/−", variant: "function" },
  { label: "0",  variant: "number" },
  { label: ".",  variant: "number" },
  { label: "=",  variant: "equals" },
]

const OPERATOR_MAP = { "÷": "/", "×": "*", "−": "-", "+": "+" }

function calculate(prev, current, operator) {
  const a = parseFloat(prev)
  const b = parseFloat(current)
  switch (operator) {
    case "/": return b === 0 ? "Error" : String(a / b)
    case "*": return String(a * b)
    case "-": return String(a - b)
    case "+": return String(a + b)
    default:  return current
  }
}

function trimResult(value) {
  if (value === "Error") return value
  const num = parseFloat(value)
  if (isNaN(num)) return value
  // Evitar imprecisiones flotantes excesivas
  return parseFloat(num.toPrecision(12)).toString()
}

export default function Calculator() {
  const [darkMode, setDarkMode]           = useState(true)
  const [currentValue, setCurrentValue]   = useState("0")
  const [previousValue, setPreviousValue] = useState(null)
  const [operator, setOperator]           = useState(null)
  const [waitingForOperand, setWaiting]   = useState(false)
  const [expression, setExpression]       = useState("")

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode)
    return () => document.body.classList.remove("light-mode")
  }, [darkMode])

  function handleButton(label) {
    // Números y punto decimal
    if (/^[0-9]$/.test(label)) {
      inputDigit(label)
      return
    }
    if (label === ".") { inputDot(); return }

    // Funciones especiales
    if (label === "AC")  { clearAll();   return }
    if (label === "⌫")   { backspace();  return }
    if (label === "%")   { percent();    return }
    if (label === "+/−") { toggleSign(); return }

    // Operadores y equals
    if (label in OPERATOR_MAP) { handleOperator(OPERATOR_MAP[label]); return }
    if (label === "=")         { handleEquals(); return }
  }

  function inputDigit(digit) {
    if (currentValue === "Error") { setCurrentValue(digit); setExpression(""); return }
    if (waitingForOperand) {
      setCurrentValue(digit)
      setWaiting(false)
    } else {
      setCurrentValue(currentValue === "0" ? digit : currentValue + digit)
    }
  }

  function inputDot() {
    if (currentValue === "Error") { setCurrentValue("0."); return }
    if (waitingForOperand) { setCurrentValue("0."); setWaiting(false); return }
    if (!currentValue.includes(".")) {
      setCurrentValue(currentValue + ".")
    }
  }

  function clearAll() {
    setCurrentValue("0")
    setPreviousValue(null)
    setOperator(null)
    setWaiting(false)
    setExpression("")
  }

  function backspace() {
    if (currentValue === "Error") { setCurrentValue("0"); return }
    if (waitingForOperand) return
    const next = currentValue.length > 1 ? currentValue.slice(0, -1) : "0"
    setCurrentValue(next)
  }

  function percent() {
    const val = parseFloat(currentValue)
    if (!isNaN(val)) {
      setCurrentValue(String(val / 100))
    }
  }

  function toggleSign() {
    const val = parseFloat(currentValue)
    if (!isNaN(val) && val !== 0) {
      setCurrentValue(String(val * -1))
    }
  }

  function handleOperator(op) {
    if (currentValue === "Error") return

    if (operator && !waitingForOperand) {
      const result = trimResult(calculate(previousValue, currentValue, operator))
      setPreviousValue(result)
      setCurrentValue(result)
      const opSymbol = Object.keys(OPERATOR_MAP).find(k => OPERATOR_MAP[k] === op)
      setExpression(`${result} ${opSymbol}`)
    } else {
      setPreviousValue(currentValue)
      const opSymbol = Object.keys(OPERATOR_MAP).find(k => OPERATOR_MAP[k] === op)
      setExpression(`${currentValue} ${opSymbol}`)
    }
    setOperator(op)
    setWaiting(true)
  }

  function handleEquals() {
    if (!operator || currentValue === "Error") return
    const opSymbol = Object.keys(OPERATOR_MAP).find(k => OPERATOR_MAP[k] === operator)
    const expr = `${previousValue} ${opSymbol} ${currentValue} =`
    const result = trimResult(calculate(previousValue, currentValue, operator))
    setCurrentValue(result)
    setPreviousValue(null)
    setOperator(null)
    setWaiting(true)
    setExpression(expr)
  }

  return (
    <div className="calculator">
      <div className="calculator-toolbar">
        <button className="btn-theme" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Modo claro" : "Modo oscuro"}
        </button>
      </div>
      <Display expression={expression} value={currentValue} />
      <div className="keypad">
        {BUTTONS.map((btn) => (
          <Button
            key={btn.label}
            label={btn.label}
            variant={btn.variant}
            onClick={handleButton}
          />
        ))}
      </div>
    </div>
  )
}
