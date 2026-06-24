import React from 'react'

export default function Hero({ brand, title, subtitle, cta, tagline }) {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <p className="hero__brand">{brand}</p>
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={cta.href}>
            {cta.label}
            <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
          <a className="btn btn--ghost" href="#categories">
            Browse Bikes
          </a>
        </div>
      </div>

      <p className="hero__tagline" aria-hidden="true">{tagline}</p>
    </section>
  )
}
