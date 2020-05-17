import React from "react"
import { List, Avatar, Divider } from "antd"
import { Link, StaticQuery, graphql } from "gatsby"

const Bio = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              author
              bio
              authorImage
            }
          }
        }
      `}
      render={data => (
        <>
          <Divider orientation="left">Author</Divider>
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={data.site.siteMetadata.authorImage} size="large" />
              }
              title={<Link to="/About">{data.site.siteMetadata.author}</Link>}
              description={data.site.siteMetadata.bio}
            />
          </List.Item>
        </>
      )}
    />
  )
}

export default Bio
