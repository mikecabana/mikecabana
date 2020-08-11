import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LabelMaker from "../components/label-maker"
import Button from "../components/button"
import styled from "styled-components"

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
                <h1 className="title">
                  HEY<LabelMaker>!</LabelMaker> I'M MIKE
                </h1>
                <h2 className="subtitle">
                  A software developer and web tinkerer
                </h2>
              </div>
              <div className="column is-3 has-text-centered">
                <img
                  src="/profile-pic-hero.jpg"
                  alt="profile pic"
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
            alt=""
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
            alt=""
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
            {/* start of container */}

            <div className="columns">
              <div className="column is-6 is-offset-3">
                <h3 className="title is-2">
                  <LabelMaker>A little about me</LabelMaker>
                </h3>
                <History>
                  <LabelMaker>I’m a full stack developer</LabelMaker> from
                  Montreal, Canada
                  <span role="img" aria-label="maple leaf emoji">
                    🍁
                  </span>
                  . Not knowing what I wanted to pursue in college (as one does)
                  I <LabelMaker>haphazardly took an HTML a course</LabelMaker>{" "}
                  and discovered that the web was in my future. Years later and
                  I've started my career{" "}
                  <LabelMaker>
                    leading a team developing Angular apps!
                  </LabelMaker>
                </History>
                <History>
                  Although I've started my career on the front-end, I've
                  recently become interested in back-end frameworks like{" "}
                  <LabelMaker>NestJS(Node + Express + Typescript)</LabelMaker>  
                   and <LabelMaker>DotNet</LabelMaker>. Web technologies are
                  vast, only second to the web itself and I've been lucky to
                  dabble in some of those on my{" "}
                  <LabelMaker>
                    journey to becoming a full stack developer.
                  </LabelMaker>
                </History>
                <History
                  style={{
                    textAlign: "right",
                  }}
                >
                  <LabelMaker secret={true}>
                    <span role="img" aria-label="snake-emoji">
                      🐍
                    </span>{" "}
                    Python's pretty dope too!
                  </LabelMaker>
                </History>
                <History style={{ textAlign: "center" }}>
                  <span
                    role="img"
                    aria-label="snake-emoji"
                    style={{ fontSize: "4rem" }}
                  >
                    ✌
                  </span>
                </History>
              </div>
            </div>

            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h3 className="title is-3">
                  <LabelMaker>Read some of my stuff</LabelMaker>
                </h3>
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
                      style={{ color: `var(--color)`, textDecoration: "none" }}
                      to={`/blog${node.fields.slug}`}
                    >
                      <h2>{title}</h2>
                      <p style={{fontWeight: 600}}
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                      <div style={{ textAlign: "right", fontWeight: 700 }}>
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
                <Link to="/blog/">
                  <Button>See the rest of my blog</Button>
                </Link>
              </div>
            </div>

            {/* end of container */}
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage

const History = styled.p`
  line-height: 2rem;
  margin: 2rem 0;
  font-size: 18px;
  font-weight: 600;
`

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
