import React, { useState } from "react";

export default function useToken() {
  const getToken = () => {
    return sessionStorage.getItem("token");
  };
  const saveToken = (userToken) => {
    sessionStorage.setItem("token", userToken);
    setToken(userToken);
  };
  const [token, setToken] = useState(getToken());

  return {
    setToken: saveToken,
    token,
  };
}
