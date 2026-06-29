// Lógica pura de la calculadora, separada del componente para poder testearla.

export const OPERATOR_MAP = { '÷': '/', '×': '*', '−': '-', '+': '+' }

export function calculate(prev, current, operator) {
  const a = parseFloat(prev)
  const b = parseFloat(current)
  switch (operator) {
    case '/':
      return b === 0 ? 'Error' : String(a / b)
    case '*':
      return String(a * b)
    case '-':
      return String(a - b)
    case '+':
      return String(a + b)
    default:
      return current
  }
}

export function trimResult(value) {
  if (value === 'Error') return value
  const num = parseFloat(value)
  if (isNaN(num)) return value
  // Evitar imprecisiones flotantes excesivas
  return parseFloat(num.toPrecision(12)).toString()
}
