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

        <main>{children}</main>

        <Footer>
          <a style={{ color: 'var(--color)' }} href="mailto:mikecabana@outlook.com">Michael Cabana</a> ©{" "}
          {new Date().getFullYear()}
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
