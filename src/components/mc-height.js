import React from "react"
import Slider from "@mui/material/Slider"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

let start_ft = 5;
let start_in = start_ft * 12;

let end_ft = 7;
let end_in = end_ft * 12;

function valuetext(value) {
  return `${value}°C`
}

function numFormatter(value){
  return Math.floor(value/12) + ' ft ' + value%12 + ' in'
}

const McHeight = () => {

  return (
    <Box
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "h6.fontSize", mb: 6 }}>
        Your Height
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={70}
        valueLabelFormat={value => <div>{numFormatter(value)}</div>}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        marks
        min={start_in}
        max={end_in}
      />
    </Box>
  )
}

export default McHeight
