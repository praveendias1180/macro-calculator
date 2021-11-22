import React from "react"

import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import MCStepper from "./mc-stepper"
import "../mc-style.css"
import McHeader from "./mc-header"

const theme = createTheme()

export default function MacroCalc() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" >
        <CssBaseline />
        <McHeader />
        <Box
          sx={{
            marginTop: 1,
            width: '100%',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MCStepper />
        </Box>
      </Container>
    </ThemeProvider>
  )
}
