// import { createStyles, makeStyles } from "@mui/styles";
import { createStyles, makeStyles } from "@mui/styles";
import palette from "../../../theme/palette";

export default makeStyles((theme) =>
  createStyles({
    appBar: {
      background: palette.gradients.brandingMain,
      flexGrow: 1,
      minHeight: 75,
    },
    toolbar: {
      justifyContent: "space-between",
    },
    logo: {
      borderRadius: "50%",
      overflow: "hidden",
      width: "50px",
      height: "50px",
      objectFit: "cover",
      padding: "10px 0 10px 0",
      // margin: "16px 0 16px 0",
    },
    buttonLogin: {
      background: palette.colors.loginButton,
      color: "red",
      fontSize: "0.938rem",
      fontWeight: 500,
      letterSpacing: "0.029em",
      padding: "12px 22px",
      borderRadius: "8px",
      "&:hover": {
        background: palette.secondary.light,
        color: "white",
      },
      "&: active": {
        background: palette.secondary.main,
      },
    },
    buttonSignup: {},
  })
);
