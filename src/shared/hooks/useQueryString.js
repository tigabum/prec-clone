import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

const useQueryString = () => {
  const { search } = useLocation();
  const [prevSearch, setPrevSearch] = useState("");
  const [urlParams, setUrlParams] = useState(
    queryString.parse(search, { arrayFormat: "comma" })
  );
  useEffect(() => {
    if (search !== prevSearch) {
      setPrevSearch(search);
      setUrlParams(queryString.parse(search, { arrayFormat: "comma" }));
    }
  }, [search]);
  return { urlParams };
};

export default useQueryString;
