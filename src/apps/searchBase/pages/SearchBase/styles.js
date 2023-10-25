import { createStyles, makeStyles } from "@mui/styles";

export default makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      display: "flex",
      maxWidth: "100%",
    },
    userServices: {
      width: "825px",
      boxShadow: "0px 7px 24px rgba(26, 38, 38, 0.1)",
    },
  })
);
