import React from "react"
import Typography from "@mui/material/Typography"
import MaleFemaleButtons from "./mc-male-female"

import { useSelector, useDispatch } from 'react-redux'
import { set_gender } from '../features/calc/calcSlice'

const McResults = (props) => {

  const gender = useSelector((state) => state.calculationData.gender)
  const age = useSelector((state) => state.calculationData.age)
  const height = useSelector((state) => state.calculationData.height)
  const weight = useSelector((state) => state.calculationData.weight)
  const activity = useSelector((state) => state.calculationData.activity)
  const description = useSelector((state) => state.calculationData.description)

  const dispatch = useDispatch()

  function handleNext(gender){
    dispatch(set_gender(gender))
    props.handleNext();
  }
  
  return (
    <>
      <Typography
        className="macro-heading"
        sx={{ fontSize: "h6.fontSize", mb: 4 }}
      >
       Results 
      </Typography>
       <p>Gender: {gender} Age: {age}</p>
       <p>Height: {height} Weight: {weight}</p>
       <p>Activity: {activity} Description: {description}</p>
    </>
  )
}

export default McResults
