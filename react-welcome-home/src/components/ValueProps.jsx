import React from 'react'

const ICONS = {
  tag: (
    <path d="M3 11l8-8 10 10-8 8L3 11zm5-2.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  ),
  return: (
    <path d="M4 8h11a5 5 0 010 10H8M4 8l4-4M4 8l4 4" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  ship: (
    <path d="M2 7h11v8H2V7zm11 3h5l3 3v2h-8v-5zM6 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm12 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="none" strokeWidth="2" strokeLinejoin="round" />
  ),
  tree: (
    <path d="M12 2l5 8h-3l4 6H7l4-6H8l4-8zM11 16h2v6h-2v-6z" />
  ),
}

export default function ValueProps({ tagline, props }) {
  return (
    <section className="values">
      <header className="values__head">
        <h2 className="values__title">{tagline}</h2>
        <p className="values__sub">Why thousands of riders buy direct.</p>
      </header>

      <div className="values__grid">
        {props.map((prop) => (
          <div className="value" key={prop.title}>
            <svg className="value__icon" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" aria-hidden="true">
              {ICONS[prop.icon]}
            </svg>
            <p className="value__title">{prop.title}</p>
            <p className="value__detail">{prop.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
