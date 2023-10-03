import { Route, Switch } from "react-router-dom";
import paths from "../../paths";
import SearchBase from "./pages/SearchBase";

const BaseRoutes = () => {
  return (
    <Route
      path={[
        paths.searchBasePaths.searchBase.pattern,
        paths.searchBasePaths.searchBaseUsers.pattern,
        paths.searchBasePaths.usersProfile.pattern,
      ]}
      exact
    >
      <Switch>
        <Route
          path={[
            paths.searchBasePaths.searchBase.pattern,
            paths.searchBasePaths.searchBaseUsers.pattern,
          ]}
          exact
          component={SearchBase}
        ></Route>
      </Switch>
    </Route>
  );
};

export default BaseRoutes;
