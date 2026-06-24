import React, { useState } from 'react'

export default function Footer({ brand, region, columns, newsletter }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer__newsletter">
        <div>
          <h2 className="footer__news-title">{newsletter.heading}</h2>
          <p className="footer__news-blurb">{newsletter.blurb}</p>
        </div>
        <form className="footer__form" onSubmit={handleSubmit}>
          <input
            className="footer__input"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setDone(false) }}
            aria-label="Email address"
            required
          />
          <button className="btn btn--primary" type="submit">
            {done ? 'Subscribed ✓' : newsletter.cta}
          </button>
        </form>
      </div>

      <div className="footer__cols">
        {columns.map((col) => (
          <div className="footer__col" key={col.heading}>
            <h3 className="footer__col-title">{col.heading}</h3>
            <ul className="footer__list">
              {col.links.map((link) => (
                <li key={link}>
                  <a className="footer__link" href="#top">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <span className="footer__copy">
          © {new Date().getFullYear()} {brand} {region}. Ride More, For Less.
        </span>
        <span className="footer__note">
          Recreated from bikesonline.com for a React learning demo.
        </span>
      </div>
    </footer>
  )
}
