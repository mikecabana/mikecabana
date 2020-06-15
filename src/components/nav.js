import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ThemeToggle from "./theme-toggle"
import Liink from "./liink.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Nav extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
        style={{
          paddingTop: "40px",
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Liink className="navbar-item" to={"/"}>
              <img src="/logo.svg" alt="logo" />
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                M I K E
              </span>
            </Liink>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <Liink to={"/projects"}>PROJECTS</Liink>
              </div>
              <div className="navbar-item">
                <Liink to={"/blog"}>BLOG</Liink>
              </div>
              <div className="navbar-item">
                <Liink to={"/uses"}>/uses</Liink>
              </div>
              <div className="navbar-item">
                <StaticQuery
                  query={socialQuery}
                  render={data => {
                    const { author, social } = data.site.siteMetadata
                    return (
                      <>
                        <a
                          href={`https://github.com/${social.twitter}`}
                          style={{
                            color: "var(--color)",
                            marginLeft: "10px",
                          }}
                        >
                          <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                      </>
                    )
                  }}
                />
              </div>
              <div className="navbar-item">
                <StaticQuery
                  query={socialQuery}
                  render={data => {
                    const { author, social } = data.site.siteMetadata
                    return (
                      <>
                        <a
                          href={`https://twitter.com/${social.twitter}`}
                          style={{ color: "var(--color)" }}
                        >
                          <FontAwesomeIcon icon={["fab", "twitter"]} />
                        </a>
                      </>
                    )
                  }}
                />
              </div>
              <div className="navbar-item">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav

export const socialQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
        }
      }
    }
  }
`
