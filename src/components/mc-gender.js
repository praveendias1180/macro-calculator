import React from "react"
import Typography from "@mui/material/Typography"
import MaleFemaleButtons from "./mc-male-female"
const McGender = (props) => {
  return (
    <>
      <Typography
        className="macro-heading"
        sx={{ fontSize: "h6.fontSize", mb: 4 }}
      >
        Male or Female
      </Typography>
      <MaleFemaleButtons handleNext={props.handleNext}></MaleFemaleButtons>
    </>
  )
}

export default McGender
