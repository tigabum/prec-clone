import { Box, Divider } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import SearchBaseFilterBlock from "../../components/SearchBaseFilterBlock";
import useQueryString from "../../../../shared/hooks/useQueryString";
import searchBaseStyle from "./styles";

function SearchBase() {
  const classes = searchBaseStyle();
  const { urlParams } = useQueryString();
  let speciality = urlParams.speciality || [];
  let defaultSpecialty = Array.isArray(speciality) ? speciality : [speciality];
  let credientials = urlParams.credientials || [];
  let defaultCredientials = Array.isArray(credientials)
    ? credientials
    : [credientials];

  const { control, reset, watch } = useForm({
    reValidateMode: "onBlur",
    defaultValues: {
      dateRange: [urlParams.dateFrom || null, urlParams.dateTo || null],
      hours: urlParams.hours || "",
      speciality: defaultSpecialty,
      credientials: defaultCredientials,
    },
  });

  return (
    <Box className={classes.root}>
      <Box className={classes.userServices}>
        <Divider />
        <SearchBaseFilterBlock />
        <Divider />
        <h2>Some text here</h2>
      </Box>
    </Box>
  );
}

export default SearchBase;
