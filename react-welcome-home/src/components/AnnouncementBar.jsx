import React from 'react'

export default function AnnouncementBar({ topBar, items }) {
  // Duplicate the items so the marquee can loop seamlessly.
  const ticker = [...items, ...items, ...items]

  return (
    <div className="announce">
      <div className="announce__top">{topBar}</div>
      <div className="announce__ticker" aria-hidden="true">
        <div className="announce__track">
          {ticker.map((item, i) => (
            <span className="announce__item" key={i}>
              <span className="announce__spark" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
