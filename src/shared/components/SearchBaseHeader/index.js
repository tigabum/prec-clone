import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../../assets/images/download.jpeg";

import searchBaseHeaderLayout from "./styles";
import { Link } from "@mui/material";

function SearchBaseHeader({ maxWidth }) {
  const classes = searchBaseHeaderLayout();
  const handleLoginButton = () => {
    console.log("handleLoginIsClicked");
  };
  const handleSignupButton = () => {
    console.log("handleSignupButton");
  };
  const isUserAuthenticated = false;
  return (
    <AppBar position="fixed" id="menu" elevation={0} className={classes.appBar}>
      <Container maxWidth={maxWidth}>
        <Toolbar disableGutters className={classes.toolbar}>
          <Box className={classes.logoContainer}>
            <Typography color="#00779C" pr={1}>
              Possible Cs
            </Typography>
            <Link href="/">
              <img src={logo} alt="image" className={classes.logo} />
            </Link>
          </Box>
          <Box display="flex">
            {isUserAuthenticated ? (
              <Box>
                <Typography>User is authenticated</Typography>
              </Box>
            ) : (
              <>
                <Box className={classes.buttonLogin} mr={1}>
                  <Button onClick={handleLoginButton}>Login</Button>
                </Box>
                <Box className={classes.buttonSignup}>
                  <Button onClick={handleSignupButton}> SignUp</Button>
                </Box>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default SearchBaseHeader;
