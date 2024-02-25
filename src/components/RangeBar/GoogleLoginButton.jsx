// GoogleLoginButton.js
import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const clientId =
    "752198572885-4g2el7a6670gkj9ed1qtdhltt56hnn3t.apps.googleusercontent.com";

  const responseGoogle = (response) => {
    if (response.accessToken) {
      onSuccess(response);
    } else {
      onFailure(response);
    }
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
