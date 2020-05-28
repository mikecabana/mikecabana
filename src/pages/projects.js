import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ProjectsPage extends React.Component {
  render() {
    const siteTitle = "🚀 My Projects"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Projects"
          keywords={[
            `javascript`,
            `react`,
            `angular`,
            `typescript`,
            `node`,
            `html`,
            `css`
          ]}
        />
        <p>Here will be some of my projects.</p>
      </Layout>
    )
  }
}

export default ProjectsPage
