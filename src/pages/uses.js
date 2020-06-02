import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class UsesPage extends React.Component {
  render() {
    const siteTitle = "🚀 My Projects"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Projects"
          keywords={[
            `/uses`,
            `home`,
            `desk`,
            `desktop`,
            `laptop`,
            `monitor`,
            `screen`,
            `keyboard`,
            `mouse`,
            `windows`,
            `macOS`,
          ]}
        />
        <section className="section">
          <div className="container">
            <p>Here will be the tech I use.</p>
          </div>
        </section>
      </Layout>
    )
  }
}

export default UsesPage
