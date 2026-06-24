import React from 'react'

export default function CollectionBanners({ banners }) {
  return (
    <section className="collections">
      <header className="section-head">
        <span className="section-head__index">02</span>
        <h2 className="section-head__title">Built To Send It</h2>
        <span className="section-head__rule" />
      </header>

      <div className="collections__grid">
        {banners.map((banner, i) => (
          <a className="collection" href="#categories" key={banner.title} style={{ '--i': i }}>
            <span className="collection__kicker">{banner.kicker}</span>
            <h3 className="collection__title">{banner.title}</h3>
            <span className="collection__cta">
              {banner.cta} <span aria-hidden="true">→</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
