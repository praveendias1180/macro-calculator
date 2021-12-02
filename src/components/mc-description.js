import React from "react"
import Typography from "@mui/material/Typography"

import { useSelector, useDispatch } from 'react-redux'
import { set_description } from '../features/calc/calcSlice'
import FourDesc from "./mc-four-desc"

const McDescription = (props) => {

  const count = useSelector((state) => state.calculationData.gender)
  const dispatch = useDispatch()

  function handleNext(description){
    dispatch(set_description(description))
    props.handleNext();
  }
  
  return (
    <>
      <Typography
        className="macro-heading"
        sx={{ fontSize: "h6.fontSize", mb: 4 }}
      >
        Which option is most like you?
      </Typography>
      <FourDesc handleNext={handleNext}></FourDesc>
    </>
  )
}

export default McDescription
