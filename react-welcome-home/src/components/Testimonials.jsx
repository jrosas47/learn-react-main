import React from 'react'

export default function Testimonials({ testimonials }) {
  return (
    <section className="reviews">
      <header className="section-head">
        <span className="section-head__index">03</span>
        <h2 className="section-head__title">Press Loves It</h2>
        <span className="section-head__rule" />
      </header>

      <div className="reviews__grid">
        {testimonials.map((t) => (
          <figure className="review" key={t.source}>
            <span className="review__quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote className="review__text">{t.quote}</blockquote>
            <figcaption className="review__source">{t.source}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
