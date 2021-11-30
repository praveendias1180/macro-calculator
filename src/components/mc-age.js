import React from "react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import ButtonGroup from "@mui/material/ButtonGroup"

import { useDispatch } from 'react-redux'
import { set_age } from '../features/calc/calcSlice'

const McAge = (props) => {

  const dispatch = useDispatch()

  function handleClick(age){
    dispatch(set_age(age))
    props.handleNext()
  }

  const buttons = [
  <Button onClick={() => handleClick(10)} key="teen">TEEN</Button>,
  <Button onClick={() => handleClick(20)} key="20">20's</Button>,
  <Button onClick={() => handleClick(30)} key="30">30's</Button>,
]

const buttons2 = [
  <Button onClick={() => handleClick(40)} key="40">40's</Button>,
  <Button onClick={() => handleClick(50)} key="50">50's</Button>,
  <Button onClick={() => handleClick(60)} key="60">60's</Button>,
]
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
