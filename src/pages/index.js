import React from "react"
import { Link } from "gatsby"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
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
        {/* <div style={{ height: "300px" }}>
          <Parallax
            pages={3}
            scrolling={false}
            ref={ref => (this.parallax = ref)}
          >
            <ParallaxLayer offset={0} speed={0.25} factor={0.25}>asadas</ParallaxLayer>
            <ParallaxLayer offset={0.1} speed={0.25} factor={-0.3}>asdasdasd</ParallaxLayer>
          </Parallax>
        </div> */}

        <section className="section">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-3 is-offset-3">
                <h1 className="title">HI! I'M MIKE CABANA.</h1>
                <h2 className="subtitle">I LIKE TO TINKER WITH THE WEB</h2>
              </div>
              <div className="column is-3 has-text-centered">
                <img
                  src="/profile-pic-b.jpg"
                  style={{
                    width: "80%",
                    maxWidth: "300px",
                    margin: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <div
          style={{
            position: "relative",
            height: "730px",
            margin: "-150px 0 -100px 0",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 5,
              backgroundImage: 'url("/rect-over.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 4,
              backgroundImage: 'url("/rect-under.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h3 className="subtitle is-5">A Little About Me</h3>
                <p>🍁 I’m a full stack developer from Montreal, Canada.</p>
                <p>💻 I started mt career as a front end developer creating sites in HTML/CSS/JS then web apps using Angular.</p>
                <p>🧙‍♂️ My goal is to become a full stack wizard! <span style={{ fontSize: '0.6rem' }}>with a little sprinkling of python</span></p>
              </div>
            </div>

            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h3 className="subtitle is-5">Recent Posts</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-2">
                post A
              </div>
              <div className="column is-4">
                post B
              </div>
            </div>

            <Link to="/blog/" style={{ textDecoration: "none" }}>
              <Button marginTop="35px">Go to Blog</Button>
            </Link>
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
