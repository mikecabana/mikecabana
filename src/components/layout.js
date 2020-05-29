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
        <div>
          <section className="section">
            <Header>
              <h3>{title}</h3>
            </Header>
            <main>{children}</main>
          </section>
        </div>
        <Footer>
          © {new Date().getFullYear()}
          {` `}
          <a href="mailto:mikecabana@outlook.com">Michael Cabana</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 20px 15%;
`

const Header = styled.div`
  height: 40px;
  margin: 5px 15px;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
