import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function GoogleLogin() {
  const [GoogleUser, setGoogleUser] = useState([]);
  const [GoogleProfile, setGoogleProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => "error",
  });

  useEffect(() => {
    if (GoogleUser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${GoogleUser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${GoogleUser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setGoogleProfile(res.data);
        })
        .catch((err) => "error");
    }
  }, [GoogleUser]);
  const logOut = () => {
    googleLogout();
    setGoogleProfile(null);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {GoogleProfile ? (
        <div>
          <img src={GoogleProfile.picture} alt="user pic" />
          <h3>User Logged in</h3>
          <p>Name: {GoogleProfile.name}</p>
          <p>Email Address: {GoogleProfile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
}
export default GoogleLogin;
