import * as React from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepButton from "@mui/material/StepButton"
import StepLabel from "@mui/material/StepLabel"

import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import McAge from "./mc-age"
import McHeight from "./mc-height"
import { alpha } from "@mui/material/styles"
import McGender from "./mc-gender"

const steps = ["Gender", "Age", "Height"]

export default function MCStepper() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())

  const isStepOptional = step => {
    return step === 1
  }

  const isStepSkipped = step => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const handleStep = step => () => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        sx={{
          backgroundColor: theme => alpha("#ffffff", 0.95),
          py: 2,
          boxShadow: 3,
          borderRadius: 1,
        }}
        nonLinear
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label, index) => {
          const stepProps = {}
          const labelProps = {}
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            )
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                <StepLabel sx={{ color: "primary.main" }}>{label}</StepLabel>
              </StepButton>
            </Step>
          )
        })}
      </Stepper>
      <Box
        sx={{
          mt: 1,
          mb: 1,
          px: 4,
          py: 3,
          backgroundColor: theme => alpha("#ffffff", 0.95),
          boxShadow: 3,
          borderRadius: 1,
          minWidth: 300,
          minHeight: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {activeStep === 0 ? <McGender /> : null}
        {activeStep === 1 ? <McAge /> : null}
        {activeStep === 2 ? <McHeight /> : null}
      </Box>
      <Box
        sx={{
          mt: 1,
          mb: 1,
          px: 1,
          py: 1,
          backgroundColor: theme => alpha("#ffffff", 0.95),
          boxShadow: 3,
          borderRadius: 1,
          minWidth: 300,
        }}
      >
        {activeStep === steps.length ? (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  )
}
