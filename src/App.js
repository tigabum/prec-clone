import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import theme from "./theme";
import SearchBaseRoutes from "./apps/searchBase/routes";
import Page404 from "./components/Page404";

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <BrowserRouter>
        <Switch>
          <>
            <SearchBaseRoutes />
          </>
          {/* <Route component={Page404} /> */}
          {/* <Route path="*" exact={true} component={Page404} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  </ThemeProvider>
);

export default App;
