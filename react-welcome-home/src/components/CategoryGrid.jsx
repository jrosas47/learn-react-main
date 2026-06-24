import React from 'react'

export default function CategoryGrid({ categories }) {
  return (
    <section className="categories" id="categories">
      <header className="section-head">
        <span className="section-head__index">01</span>
        <h2 className="section-head__title">Shop By Ride</h2>
        <span className="section-head__rule" />
      </header>

      <div className="categories__grid">
        {categories.map((cat, i) => (
          <a className="cat-card" href="#categories" key={cat.name} style={{ '--i': i }}>
            <div className="cat-card__media">
              <img src={cat.image} alt={cat.name} loading="lazy" />
            </div>
            <div className="cat-card__body">
              <span className="cat-card__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="cat-card__name">{cat.name}</h3>
              <p className="cat-card__blurb">{cat.blurb}</p>
              <span className="cat-card__cta">Shop {cat.name} <span aria-hidden="true">→</span></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
