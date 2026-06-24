import React from 'react'

export default function Display({ expression, value }) {
  const formatValue = (val) => {
    if (val === 'Error') return 'Error'
    const num = parseFloat(val)
    if (isNaN(num)) return val
    // Limitar decimales para que no desborde el display
    if (Math.abs(num) >= 1e12) return num.toExponential(4)
    return val.toString()
  }

  return (
    <div className="display">
      <div className="display-expression">{expression || '\u00A0'}</div>
      <div className="display-value">{formatValue(value)}</div>
    </div>
  )
}
