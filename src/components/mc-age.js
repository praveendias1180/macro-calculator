import React from "react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import ButtonGroup from "@mui/material/ButtonGroup"
const buttons = [
  <Button key="teen">TEEN</Button>,
  <Button key="20">20's</Button>,
  <Button key="30">30's</Button>,
]

const buttons2 = [
  <Button key="40">40's</Button>,
  <Button key="50">50's</Button>,
  <Button key="60">60's</Button>,
]
const McAge = () => {
  return (
    <>
      <Typography
        className="macro-heading"
        sx={{ fontSize: "h6.fontSize", mb: 4 }}
      >
        Your Age
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
          ".MuiButtonGroup-grouped:hover": {
            boxShadow: 2,
            fontWeight: 'bold'
          },
        }}
      >
        <ButtonGroup size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>

        <ButtonGroup size="large" aria-label="large button group">
          {buttons2}
        </ButtonGroup>
      </Box>
    </>
  )
}

export default McAge
