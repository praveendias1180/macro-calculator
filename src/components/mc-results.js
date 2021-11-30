import React from "react"
import Typography from "@mui/material/Typography"
import MaleFemaleButtons from "./mc-male-female"

import { useSelector, useDispatch } from 'react-redux'
import { set_gender } from '../features/calc/calcSlice'

const McResults = (props) => {

  const gender = useSelector((state) => state.calc.gender)
  const age = useSelector((state) => state.calc.age)
  const height = useSelector((state) => state.calc.height)

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
       <p>Gender: {gender}</p>
       <p>Age: {age}</p>
       <p>Height: {height}</p>
    </>
  )
}

export default McResults
