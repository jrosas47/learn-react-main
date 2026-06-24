import React, { useState } from 'react'

export default function NavBar({ brand, region, links }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        <span className="nav__mark" aria-hidden="true">
          <span className="nav__mark-spoke" />
          <span className="nav__mark-spoke" />
          <span className="nav__mark-spoke" />
        </span>
        <span className="nav__brand-text">
          {brand}
          <span className="nav__brand-region">{region}</span>
        </span>
      </a>

      <nav className={`nav__links ${open ? 'is-open' : ''}`}>
        {links.map((link) => (
          <a className="nav__link" href="#categories" key={link} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </nav>

      <div className="nav__actions">
        <a className="nav__action" href="#footer" aria-label="Search">⌕</a>
        <a className="nav__action" href="#footer" aria-label="Account">◔</a>
        <a className="nav__action nav__action--cart" href="#footer" aria-label="Cart">
          ⬡<span className="nav__cart-count">0</span>
        </a>
        <button
          className="nav__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
