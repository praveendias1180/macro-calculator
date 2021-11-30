import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { alpha } from '@mui/material/styles';

import React from "react"
const McHeader = () => {
  return (
    <Box
      sx={{
        marginTop: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
        py: 1,
        backgroundColor: (theme) => alpha('#000000', 0.5),
        boxShadow: 3,
        borderRadius: 1,
        minWidth: 200,
      }}
    >
      <Typography className="macro-display" sx={{ fontSize: "h6.fontSize", color: '#ffffff', textAlign: 'center' }}>
        Find Out The Perfect Diet & Training Plan for Your Body
      </Typography>
    </Box>
  )
}

export default McHeader
