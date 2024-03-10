import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useOutletContext } from "react-router-dom";
import useHttp from "../Hooks/useHttp";
import { ToastContainer, toast } from "react-toastify";

const StdEditProfile = () => {

  const { PostRequest } = useHttp();
  const dataObject = useOutletContext();
  const [profile, setProfile] = useState(dataObject.profile);
  const [name, setName] = useState(dataObject.name);
  const [mobile, setMobile] = useState(dataObject.mobile);
  const [email, setEmail] = useState(dataObject.email);
  const [Headline, setHeadline] = useState(dataObject.headline);
  const [Id, setId] = useState(dataObject._id);
  const navigate = useNavigate();
  const myRef = useRef(null);

  const token = localStorage.getItem("token");
  const API = process.env.REACT_APP_API_URL;
  const HOME = process.env.REACT_APP_HOME;

  const clickElement = (ref) => {
    ref.current.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const profileDetails = useCallback(async () => {
    const { data } = await PostRequest(
      API + "profileDetails",
      {},
      { authorization: "Bearer " + token }
    );
    if (data?.responseCode === 1) {
      setId(data?.responseData._id);
      setName(data?.responseData.name);
      setProfile(HOME + data?.responseData.profile);
      setMobile(data?.responseData.mobile);
      setEmail(data?.responseData.email);
      setHeadline(data?.responseData.Headline);
    }
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async () => {
    const FormData = {
      id: Id,
      name,
      mobile,
      email,
      Headline,
    };
    const { data } = await PostRequest(API + "updateUser", FormData, {
      authorization: "Bearer " + token,
    });
    if (data?.responseCode === 1) {
      toast.success(data?.responseText);
      profileDetails();
    } else {
      toast.error(data?.responseText);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result.split(",")[1];
        const extensionMatch = file.name.match(/\.([^.]+)$/);
        const extension = extensionMatch[1].toLowerCase();
        const FormData = {
          file: base64,
          fileType: extension,
        };
        const { data } = await PostRequest(API + "updateProfile", FormData, {
          authorization: "Bearer " + token,
        });
        if (data?.responseCode === 1) {
          toast.success(data?.responseText);
          profileDetails();
        } else {
          toast.error(data?.responseText);
        }
        profileDetails();
      };
      reader.readAsDataURL(file);
    }
  };

  const myStyle = {
    label: {
      fontSize: "16px",
      color: "#5E5E5E",
    },
    input: {
      height: "50px",
      border: "2px solid #5E5E5E",
    },
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="row w-100 pe-5 ">
        <div className="col-md-3">
          <div className="profile1-2">
            <div className="text-center">
              <img
                src={profile !== null ? profile : "../img/profile.png"}
                className="rounded-profile-image"
              />
              <input
                onChange={handleFileChange}
                accept="image/*"
                type="file"
                ref={myRef}
                className="d-none"
              />
              <Link
                onClick={() => clickElement(myRef)}
                className="edit-profile d-block"
              >
                Upload profile
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-9 ">
          <form action="" className="mainform2">
            <div className="row ">
              <div className="col-md-6">
                <label style={myStyle.label} className="aa" htmlFor="">
                  Name
                </label>
                <input
                  style={myStyle.input}
                  className="w-100 rounded-3"
                  type="text"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label style={myStyle.label} className="aa" htmlFor="">
                  Last Name
                </label>
                <input
                  style={myStyle.input}
                  className="w-100 rounded-3"
                  type="text"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-6 d-block">
                <label style={myStyle.label} className="aa" htmlFor="">
                  Email
                </label>
                <input
                  style={myStyle.input}
                  className="w-100 rounded-3"
                  type="email"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label style={myStyle.label} className="aa" htmlFor="">
                  Contact
                </label>
                <input
                  style={myStyle.input}
                  className="w-100 rounded-3"
                  type="text"
                  defaultValue={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-6 ">
                <label style={myStyle.label} className="aa" htmlFor="">
                  Headline
                </label>
                <input
                  style={myStyle.input}
                  className="w-100 rounded-3"
                  type="text"
                  defaultValue={Headline}
                  onChange={(e) => setHeadline(e.target.value)}
                />
              </div>
              <div className="col-6 ">
                <label style={myStyle.label} className="aa" htmlFor="">
                  Headline
                </label>
                <input
                  style={myStyle.input}
                  className="w-100 rounded-3"
                  type="text"
                  defaultValue={Headline}
                  onChange={(e) => setHeadline(e.target.value)}
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-6 ">
                <label style={myStyle.label} className="aa" htmlFor="">
                  Headline
                </label>
                <input
                  style={{ height: "70px", border: "2px solid #5E5E5E" }}
                  className="w-100 rounded-3"
                  type="text"
                  defaultValue={Headline}
                  onChange={(e) => setHeadline(e.target.value)}
                />
              </div>
              <div className="col-6 ">
                <label style={myStyle.label} className="aa" htmlFor="">
                  Headline
                </label>
                <input
                  style={myStyle.input}
                  className="w-100 rounded-3"
                  type="text"
                  defaultValue={Headline}
                  onChange={(e) => setHeadline(e.target.value)}
                />
              </div>
            </div>
            <div className=" d-flex justify-content-end">
              <button
                style={{
                  border: "1px solid #021969",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#021969",
                  padding: "10px"
                }}
                className="btn mt-5"
                id="button-p2"
                type="button"
                onClick={() => handleSubmit()}
              >
                SAVE & CONTINUE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StdEditProfile;
