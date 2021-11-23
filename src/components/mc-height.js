import React from "react"
import Slider from "@mui/material/Slider"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import McSwitch from "./mc-switch"
import Stack from "@mui/material/Stack"

let start_ft = 4
let start_in = start_ft * 12

let end_ft = 7
let end_in = end_ft * 12

let start_cm = 121
let end_cm = 213

const marks = [
  {
    value: 48,
    label: "4 ft",
  },
  {
    value: 60,
    label: "5 ft",
  },
  {
    value: 72,
    label: "6 ft",
  },
  {
    value: 84,
    label: "7 ft",
  },
]

const marks_metric = [
  {
    value: 130,
    label: "130 cm",
  },
  {
    value: 150,
    label: "150 cm",
  },
  {
    value: 170,
    label: "170 cm",
  },
  {
    value: 190,
    label: "190 cm",
  },
  {
    value: 210,
    label: "210 cm",
  },
]

const McHeight = () => {
  const [value, setValue] = React.useState(70)
  const [valueM, setMValue] = React.useState(178)
  const [metric, setMetric] = React.useState(false)

  function numFormatter(value) {
    if (metric) {
      return Math.floor(value) + " cm"
    } else {
      return Math.floor(value / 12) + " ft " + (value % 12) + " in"
    }
  }

  function cm_to_in(cm){
    return Math.floor(cm / 2.54);
  }

  function in_to_cm(inch){
    return Math.floor(inch * 2.54);
  }

  function handleSwitch(state) {
    setMetric(! metric)
    if(metric){
      setValue(cm_to_in(valueM))
    } else {
      setValue(in_to_cm(value))
    }

  }

  function onSliderChange(event, val){
    if(metric){
      setMValue(val)
      setValue(cm_to_in(val))
    } else {
      setMValue(in_to_cm(val))
      setValue(val)
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "h6.fontSize", mb: 4 }}>
        Your Height
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <McSwitch
          defaultChecked
          handleSwitch={handleSwitch}
          metric={metric}
          inputProps={{ "aria-label": "ant design" }}
        />
        <Slider
          sx={{ minWidth: 300 }}
          aria-label="Height"
          defaultValue={70}
          value={metric ? valueM : value}
          valueLabelFormat={value => (
            <div>{numFormatter(value)}</div>
          )}
          onChange={onSliderChange}
          valueLabelDisplay="on"
          marks={metric ? marks_metric : marks}
          min={metric ? start_cm : start_in}
          max={metric ? end_cm : end_in}
        />
      </Stack>
    </Box>
  )
}

export default McHeight
