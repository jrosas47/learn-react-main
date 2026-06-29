import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Calculator from './Calculator'

// Lee el texto que se muestra en el visor de la calculadora.
function displayValue(container) {
  return container.querySelector('.display-value').textContent
}

describe('<Calculator /> (integración)', () => {
  it('suma 7 + 8 y muestra 15 al pulsar =', async () => {
    const user = userEvent.setup()
    const { container, getByRole } = render(<Calculator />)

    await user.click(getByRole('button', { name: '7' }))
    await user.click(getByRole('button', { name: '+' }))
    await user.click(getByRole('button', { name: '8' }))
    await user.click(getByRole('button', { name: '=' }))

    expect(displayValue(container)).toBe('15')
  })

  it('encadena operaciones: 6 × 2 − 4 = 8', async () => {
    const user = userEvent.setup()
    const { container, getByRole } = render(<Calculator />)

    await user.click(getByRole('button', { name: '6' }))
    await user.click(getByRole('button', { name: '×' }))
    await user.click(getByRole('button', { name: '2' }))
    await user.click(getByRole('button', { name: '−' }))
    await user.click(getByRole('button', { name: '4' }))
    await user.click(getByRole('button', { name: '=' }))

    expect(displayValue(container)).toBe('8')
  })

  it('AC reinicia el visor a 0', async () => {
    const user = userEvent.setup()
    const { container, getByRole } = render(<Calculator />)

    await user.click(getByRole('button', { name: '5' }))
    await user.click(getByRole('button', { name: '9' }))
    await user.click(getByRole('button', { name: 'AC' }))

    expect(displayValue(container)).toBe('0')
  })

  it('muestra "Error" al dividir entre cero', async () => {
    const user = userEvent.setup()
    const { container, getByRole } = render(<Calculator />)

    await user.click(getByRole('button', { name: '6' }))
    await user.click(getByRole('button', { name: '÷' }))
    await user.click(getByRole('button', { name: '0' }))
    await user.click(getByRole('button', { name: '=' }))

    expect(displayValue(container)).toBe('Error')
  })
})
