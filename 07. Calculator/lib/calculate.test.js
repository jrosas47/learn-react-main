import { describe, it, expect } from 'vitest'
import { OPERATOR_MAP, calculate, trimResult } from './calculate'

describe('calculate', () => {
  it('suma dos números', () => {
    expect(calculate('2', '3', '+')).toBe('5')
  })

  it('resta dos números', () => {
    expect(calculate('5', '3', '-')).toBe('2')
  })

  it('multiplica dos números', () => {
    expect(calculate('4', '3', '*')).toBe('12')
  })

  it('divide dos números', () => {
    expect(calculate('6', '3', '/')).toBe('2')
  })

  it('devuelve "Error" al dividir entre cero', () => {
    expect(calculate('6', '0', '/')).toBe('Error')
  })

  it('sin un operador conocido devuelve el valor actual', () => {
    expect(calculate('6', '3', '?')).toBe('3')
  })
})

describe('trimResult', () => {
  it('propaga el valor "Error"', () => {
    expect(trimResult('Error')).toBe('Error')
  })

  it('recorta las imprecisiones de punto flotante', () => {
    // 0.1 + 0.2 = 0.30000000000000004
    expect(trimResult(calculate('0.1', '0.2', '+'))).toBe('0.3')
  })
})

describe('OPERATOR_MAP', () => {
  it('mapea cada símbolo a su operador aritmético', () => {
    expect(OPERATOR_MAP).toEqual({ '÷': '/', '×': '*', '−': '-', '+': '+' })
  })
})
