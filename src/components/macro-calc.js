import React from "react"

import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import MCStepper from "./mc-stepper"
import "../mc-style.css"
import McHeader from "./mc-header"
import store from "../app/store"
import { Provider } from "react-redux"

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#523637",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: [
      "Slabo 27px",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})

export default function MacroCalc() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="md"
          sx={{ padding: { xs: "2px", sm: 2 } }}
        >
          <CssBaseline />
          <McHeader />
          <Box
            sx={{
              marginTop: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: 200,
            }}
          >
            <MCStepper />
          </Box>
        </Container>
      </ThemeProvider>
    </Provider>
  )
}
