import { compile } from "path-to-regex";

class RoutePath {
  reverse(params) {
    const reversed = compile(this.pattern);
    return reversed(params);
  }

  constructor(pattern) {
    if (!pattern) throw new Error("`pattern` is required");
    this.pattern = pattern;
  }
}

export default RoutePath;
