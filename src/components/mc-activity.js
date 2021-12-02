import React from "react"
import Typography from "@mui/material/Typography"

import { useSelector, useDispatch } from 'react-redux'
import { set_activity } from '../features/calc/calcSlice'
import ThreeAct from "./mc-three-act"

const McActivity = (props) => {

  const count = useSelector((state) => state.calculationData.gender)
  const dispatch = useDispatch()

  function handleNext(activity){
    dispatch(set_activity(activity))
    props.handleNext();
  }
  
  return (
    <>
      <Typography
        className="macro-heading"
        sx={{ fontSize: "h6.fontSize", mb: 4 }}
      >
        How many times a week do you workout? 
      </Typography>
      <ThreeAct handleNext={handleNext}></ThreeAct>
    </>
  )
}

export default McActivity
