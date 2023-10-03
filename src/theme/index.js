import React from "react";
import palette from "./palette";
import typography from "./typography";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
