import React from "react"

const Header = props => (
  <section className="hero">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{props.title}</h1>
        <h2 className="subtitle">{props.subtitle}</h2>
      </div>
    </div>
  </section>
)

export default Header
