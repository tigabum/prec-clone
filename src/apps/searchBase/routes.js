import { Route, Switch } from "react-router-dom";
import paths from "../../paths";
import SearchBase from "./pages/SearchBase";
import UserProfile from "./pages/UserProfile";
import SearchBaseLayout from "../../layouts/SearchBaseLayout";

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
      <SearchBaseLayout>
        <Switch>
          <Route
            path={[
              paths.searchBasePaths.searchBase.pattern,
              paths.searchBasePaths.searchBaseUsers.pattern,
            ]}
            exact
            component={SearchBase}
          />
          <Route
            path={paths.searchBasePaths.usersProfile.pattern}
            exact
            component={UserProfile}
          />
        </Switch>
      </SearchBaseLayout>
    </Route>
  );
};

export default BaseRoutes;
