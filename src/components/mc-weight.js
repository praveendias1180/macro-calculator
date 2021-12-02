import React from "react"
import Slider from "@mui/material/Slider"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import McSwitch from "./mc-switch"
import Stack from "@mui/material/Stack"

import { useSelector, useDispatch } from 'react-redux'
import { set_weight } from '../features/calc/calcSlice'

let start_lb = 77 
let end_lb = 330

let start_kg = 35
let end_kg = 150

const marks = [
  {
    value: 70,
    label: "70 lbs",
  },
  {
    value: 150,
    label: "150 lbs",
  },
  {
    value: 230,
    label: "230 lbs",
  },
  {
    value: 330,
    label: "330 lbs",
  },
]

const marks_metric = [
  {
    value: 35,
    label: "35 Kg",
  },
  {
    value: 85,
    label: "85 Kg",
  },
  {
    value: 150,
    label: "150 Kg",
  },
]

const McWeight = () => {

  const count = useSelector((state) => state.calculationData.gender)
  const dispatch = useDispatch()

  const [value, setValue] = React.useState(154)
  const [valueM, setMValue] = React.useState(70)
  const [metric, setMetric] = React.useState(false)

  dispatch(set_weight(valueM + " Kg"))

  function numFormatter(value) {
    if (metric) {
      return Math.floor(value) + " Kg"
    } else {
      return Math.floor(value) + " lbs "
    }
  }

  function kg_to_lb(kg) {
    return Math.floor(kg * 2.2046)
  }

  function lb_to_kg(lb) {
    return Math.floor(lb / 2.2046)
  }

  function handleSwitch(state) {
    setMetric(!metric)
    if (metric) {
      setValue(kg_to_lb(valueM))
    } else {
      setValue(lb_to_kg(value))
    }
  }

  function onSliderChange(event, val) {
    if (metric) {
      setMValue(val)
      setValue(kg_to_lb(val))
      dispatch(set_weight(val + ' Kg'))
    } else {
      setMValue(lb_to_kg(val))
      setValue(val)
      dispatch(set_weight(lb_to_kg(val) + ' Kg'))
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
      <Typography className="macro-heading" sx={{ fontSize: "h6.fontSize", mb: 4 }}>
        Your Weight
      </Typography>
      <Stack
        sx={{ flexDirection: { sx: "column", sm: "row" } }}
        spacing={1}
        alignItems="top"
      >
        <McSwitch
          defaultChecked
          handleSwitch={handleSwitch}
          metric={metric}
          inputProps={{ "aria-label": "ant design" }}
          option1="kg"
          option2="lb"
        />
        <Box sx={{ pt: 1  }}>
        <Slider
          sx={{ minWidth: { xs: 200, sm: 350} }}
          aria-label="Weight"
          defaultValue={70}
          value={metric ? valueM : value}
          valueLabelFormat={value => <div>{numFormatter(value)}</div>}
          onChange={onSliderChange}
          valueLabelDisplay="on"
          marks={metric ? marks_metric : marks}
          min={metric ? start_kg : start_lb}
          max={metric ? end_kg : end_lb}
        />
        </Box>
      </Stack>
    </Box>
  )
}

export default McWeight
