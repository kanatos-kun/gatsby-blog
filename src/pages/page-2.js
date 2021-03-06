import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const SecondPage = () => (
  <Layout page="3">
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Header siteTitle="Page 2"></Header>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
