import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

const cta = { label: 'Shop Now', href: '/collections/road-bikes' }

describe('<Hero />', () => {
  it('muestra el título y el subtítulo recibidos por props', () => {
    render(
      <Hero
        brand="POLYGON"
        title="STRATTOS"
        subtitle="Premium Spec. Smarter Price."
        cta={cta}
        tagline="Ride More, For Less"
      />
    )
    expect(screen.getByRole('heading', { name: 'STRATTOS' })).toBeInTheDocument()
    expect(screen.getByText('Premium Spec. Smarter Price.')).toBeInTheDocument()
  })

  it('renderiza el botón CTA con su etiqueta y su enlace', () => {
    render(<Hero brand="POLYGON" title="STRATTOS" subtitle="x" cta={cta} tagline="y" />)
    const link = screen.getByRole('link', { name: /Shop Now/i })
    expect(link).toHaveAttribute('href', '/collections/road-bikes')
  })
})
