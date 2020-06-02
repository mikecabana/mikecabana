import React from "react"
import { Link } from "gatsby"

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
        <section className="section">
          <div className="container">
            <h1>
              Hey people{" "}
              <span role="img" aria-label="wave emoji">
                👋
              </span>
            </h1>
            <p>
              Welcome to my website!
            </p>
            <p>
              This is a starter and will be continually updated as a pet project for my personal website.
            </p>
            <p>Feel free to read some of my posts</p>
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
