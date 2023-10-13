import React from "react";
import Box from "@mui/material/Box";
import SearchBaseLayoutStyles from "./styles";
import SearchBaseHeader from "../../shared/components/SearchBaseHeader";

function SearchBaseLayout({ children }) {
  const classes = SearchBaseLayoutStyles();
  return (
    <Box className={classes.root}>
      <SearchBaseHeader />
      {children}
    </Box>
  );
}

export default SearchBaseLayout;
