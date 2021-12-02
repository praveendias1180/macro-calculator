import * as React from "react"
import { styled } from "@mui/material/styles"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"

const MaterialUISwitch = styled(Switch)(({ theme, option1, option2 }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        /**
         * Handcrafted svg icons.
         *
         * https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
         */
        backgroundImage: `url('data:image/svg+xml,<svg version="1.1" width="32" height="32" xmlns="http://www.w3.org/2000/svg">\
        <circle cx="16" cy="16" r="14" fill="transparent" stroke-width="4" style="stroke: %23523637;" id="MyReact" />\
        <text x="16" y="22" font-size="18" text-anchor="middle" style="fill: %23523637;">` +  option2 + `</text>\
        </svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#ffffff",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
        /**
         * Handcrafted svg icons.
         *
         * https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
         */
      backgroundImage: `url('data:image/svg+xml,<svg version="1.1" width="32" height="32" xmlns="http://www.w3.org/2000/svg">\
        <circle cx="16" cy="16" r="16" style="fill: %23523637;;"/>\
        <text x="16" y="20" font-size="16" text-anchor="middle" fill="white">` +  option1 + `</text>\
        </svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}))

export default function McSwitch(props) {

  const handleChange = event => {
    props.handleSwitch(! event.target.checked);
  }


  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            checked={! props.metric}
            onChange={handleChange}
            sx={{ mb: 2}}
            option1={ props.option1 }
            option2={ props.option2 }
          />
        }
        label=""
        labelPlacement="bottom"
        sx={{ mb: 5, pb: 1}}
      />
    </FormGroup>
  )
}
