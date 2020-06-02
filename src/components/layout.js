import React from "react"
import styled from "styled-components"
import Nav from "./nav"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // const blogPath = `${__PATH_PREFIX__}/blog/`

    return (
      <Wrapper>
        <Nav />
        <Header title={title} />

        <main>{children}</main>

        <Footer>
          <a href="mailto:mikecabana@outlook.com">Michael Cabana</a> ©{" "}
          {new Date().getFullYear()}
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

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

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
