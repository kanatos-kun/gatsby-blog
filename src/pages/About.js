import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const About = props => {
  return (
    <Layout page="4">
      <SEO title="about" />
      <Bio />
    </Layout>
  )
}

export default About
