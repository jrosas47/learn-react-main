import React from 'react'

export default function BrandStrip({ brands }) {
  const loop = [...brands, ...brands]

  return (
    <section className="brands">
      <p className="brands__label">Official US dealer for the world's best</p>
      <div className="brands__marquee">
        <div className="brands__track">
          {loop.map((brand, i) => (
            <span className="brands__name" key={i}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
