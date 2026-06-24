import React from "react"

export default function Button({ label, onClick, variant = "default", wide = false }) {
  return (
    <button
      className={`btn btn--${variant}${wide ? " btn--wide" : ""}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}
