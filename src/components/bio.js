import React from "react"
import { List, Avatar } from "antd"
import { Link } from "gatsby"

const Bio = props => {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src="https://imgur.com/VnHQ6go.png" size="large" />}
        title={<Link to="/About">Jojoffrey</Link>}
        description="Developpeur web, specialisé en react, javascript, gatsby. Travaille
          aussi dans le developpement de jeux avec phaser 3."
      />
    </List.Item>
  )
}

export default Bio
