import React from 'react'

export default function ShopSplit({ sections }) {
  return (
    <section className="shop-split">
      {sections.map((sec) => (
        <article className="shop-split__panel" key={sec.title}>
          <div className="shop-split__content">
            <h2 className="shop-split__title">{sec.title}</h2>
            <p className="shop-split__blurb">{sec.blurb}</p>
            <a className="btn btn--outline" href="#categories">
              {sec.cta}{' '}
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </article>
      ))}
    </section>
  )
}
