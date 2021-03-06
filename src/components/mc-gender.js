import React from "react"
import Typography from "@mui/material/Typography"
import MaleFemaleButtons from "./mc-male-female"

import { useSelector, useDispatch } from 'react-redux'
import { set_gender } from '../features/calc/calcSlice'

const McGender = (props) => {

  const count = useSelector((state) => state.calculationData.gender)
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
        Male or Female
      </Typography>
      <MaleFemaleButtons handleNext={handleNext}></MaleFemaleButtons>
    </>
  )
}

export default McGender
