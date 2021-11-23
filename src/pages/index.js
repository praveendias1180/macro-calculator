import React from "react"
import Seo from "../components/seo"
import MacroCalc from "../components/macro-calc"

const BlogIndex = ({ data, location }) => {
  return (
    <React.Fragment>
      <Seo title="Macro Calculator" />
      <MacroCalc />
    </React.Fragment>
  )
}
export default BlogIndex
