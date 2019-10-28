import React from "react"
import IndexTemplate from "../../templates/index"

const IndexPagePreview = ({ entry }) => {
  console.log(entry.toJS())

  return (
    <IndexTemplate
      notifications={entry.getIn(["data", "notifications"]).toJS()}
    />
  )
}

export default IndexPagePreview
