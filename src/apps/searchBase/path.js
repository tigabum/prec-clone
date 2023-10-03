import RoutePath from "../../shared/utils/namedUrls";
const basePath = "/";
export default {
  searchBase: new RoutePath(basePath),
  searchBaseUsers: new RoutePath(`${basePath}p/:uuid`),
  usersProfile: new RoutePath(`${basePath}user-profile/:uuid`),
};
