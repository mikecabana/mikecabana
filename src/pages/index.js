import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props   
    const posts = data.allMdx.edges
    return (
      <Layout location={this.props.location} title={""}>
        <SEO
          title="Software Developer"
          keywords={[
            `mike`,
            `cabana`,
            `javascript`,
            `hello`,
            `greetings`,
            `software`,
            `developer`,
          ]}
        />

        <section className="section">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-3 is-offset-3">
                <h1 className="title">HEY! I'M MIKE</h1>
                <h2 className="subtitle">
                  A software developer and web tinkerer
                </h2>
              </div>
              <div className="column is-3 has-text-centered">
                <img
                  src="/profile-pic-hero.jpg"
                  style={{
                    width: "90%",
                    maxWidth: "300px",
                    margin: "0 0 -50px 0",
                    position: "relative",
                    zIndex: 6,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <div
          style={{
            position: "relative",
            height: "450px",
            margin: "-175px 0 -100px 0",
          }}
        >
          <img
            src="/rect-over.svg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 5,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            src="/rect-under.svg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 4,
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h3 className="subtitle is-5 styled-header">
                  A Little About Me
                </h3>

                <div className="columns">
                  <div className="column is-4">
                    <h2>
                      <span role="img" aria-label="maple leaf emoji">
                        🍁
                      </span>
                    </h2>
                    <h3 className="subtitle">
                      I’m a full stack developer from Montreal, Canada
                    </h3>
                  </div>
                  <div className="column is-4 ">
                    <h2>
                      <span role="img" aria-label="laptop emoji">
                        💻
                      </span>
                    </h2>
                    <h3 className="subtitle">
                      Started my career developing web apps using Angular
                    </h3>
                  </div>
                  <div className="column is-4">
                    <h2>
                      <span role="img" aria-label="wizard emoji">
                        🧙‍♂️
                      </span>
                    </h2>
                    <h3 className="subtitle">
                      My goal is to become a full stack wizard!
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h3 className="subtitle is-5 styled-header">Recent Posts</h3>
              </div>
            </div>
            <div className="columns">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div
                    key={node.fields.slug}
                    className="column is-4 is-offset-2"
                  >
                    <Link
                      style={{ color: `var(--color)`, textDecoration: 'none' }}
                      to={`/blog${node.fields.slug}`}
                    >
                      <h3>{title}</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                      <div style={{ textAlign: "right" }}>
                        <small>{node.frontmatter.date}</small>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
            <div className="columns">
              <div
                className="column is-8 is-offset-2"
                style={{ textAlign: "right" }}
              >
                <Link to="/blog/" className="styled-header">
                  See the rest of my blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    site {
        siteMetadata {
            social {
                twitter
            }
        }
    }
  }
`
