import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavBar from './NavBar'

const links = ['Electric', 'Mountain', 'Road']

describe('<NavBar />', () => {
  it('renderiza un enlace por cada elemento de navegación', () => {
    render(<NavBar brand="BikesOnline" region="US" links={links} />)
    for (const link of links) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('alterna el menú al pulsar el botón hamburguesa', async () => {
    const user = userEvent.setup()
    render(<NavBar brand="BikesOnline" region="US" links={links} />)

    const burger = screen.getByRole('button', { name: /toggle menu/i })
    expect(burger).toHaveAttribute('aria-expanded', 'false')

    await user.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'true')
  })
})
