import React, { useCallback, useEffect, useState } from "react";
import useHttp from "../Hooks/useHttp";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
const AccountSetting = () => {
  const navigate = useNavigate();
  const { PostRequest } = useHttp();
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const token = localStorage.getItem("token");
  const handleSubmit = async () => {
    if (password !== ConfirmPassword) {
      toast.error("Password and Confirm Password not match");
      return false;
    }
    const token = localStorage.getItem("token");
    const FormData = { password };

    const { data } = await PostRequest(API + "changePassword", FormData, {
      authorization: "Bearer " + token,
    });
    if (data?.responseCode === 1) {
      localStorage.clear();
      navigate("/");
    } else {
      toast.error(data?.responseText);
    }
  };

  const profileDetails = useCallback(async () => {
    const { data } = await PostRequest(
      API + "profileDetails",
      {},
      { authorization: "Bearer " + token }
    );
    if (data?.responseCode === 1) {
      setEmail(data?.responseData.email);
    }
  }, []);
  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      profileDetails();
    }
  }, [navigate, profileDetails]);
  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="row">
        <div className="d-flex align-items-start">
          <form>
            <div className="row mx-5 mt-5 accsettingform">
              <div className="col-md-12 mb-2">
                <label className="l-pass">E-mail</label>
                <br />
                <input
                  type="email"
                  readOnly
                  id="email-29"
                  defaultValue={email}
                  name="email"
                />
              </div>
              <div className="col-md-6">
                <label className="l-pass">Enter New Password</label>
                <br />
                <input
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="email-29"
                  name="password"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="l-pass">Confirm New Password</label>
                <br />
                <input
                  defaultValue={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  id="email-29"
                  name=""
                  required
                />
              </div>
              <button
                onClick={() => handleSubmit()}
                type="button"
                id="change-password"
                className="btn mb-3 font-weight-bold"
              >
                Change Password
              </button>
              <h5 className="Delete-Account">Delete Account</h5>
              <h5 className="Warning">
                <b> Warning:</b> If you close your account, you will be
                unsubscribed from all your 2 courses, and will lose access
                forever.Close account
              </h5>
              <button
                onClick={() => alert("work in progress")}
                type="submit"
                id="close-account"
                className="btn mb-3"
              >
                Close Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
