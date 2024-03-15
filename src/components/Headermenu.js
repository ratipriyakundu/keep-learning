import React, { useCallback, useEffect, useState, useContext } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useHttp from "../Hooks/useHttp";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import { cartCountContext } from "../contexts/CartCountProvider";
const API = process.env.REACT_APP_API_URL;

export default function Headermenu({ data }) {

  const [isChecked, setIsChecked] = useState(false);
  const { PostRequest } = useHttp();
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState();
  const [UserName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cartCount, setCartCount] = useContext(cartCountContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [GoogleUser, setGoogleUser] = useState("");
  const [GoogleProfile, setGoogleProfile] = useState(null);

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
          setEmail("");
          setPassword("");
          handleGoogleRegister(res.data.email, res.data.name);
          setGoogleProfile(res.data);
        })
        .catch((err) => "error");
    }
  }, [GoogleUser]);
  const logOut = () => {
    googleLogout();
    setGoogleProfile(null);
  };
  const [megamenu, setMegamenu] = useState(false);
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setMegamenu(false);
  }, [location, isChecked]);

  const handleRegister = async () => {
    const formData = {
      email,
      password,
      mobile,
      name: UserName,
      role: isChecked ? "1" : "2",
    };
    const { data } = await PostRequest(API + "userRegister", formData, {});
    setEmail("");
    setMobile("");
    setPassword("");
    if (data?.responseCode === 1) {
      handleClose();
      localStorage.setItem("token", data?.responseData);
      toast.success(data?.responseText);
      if (isChecked) {
        navigate("/");
      } else {
        navigate("/");
      }
    } else {
      toast.error(data?.responseText);
    }
  };
  const handleGoogleRegister = async (userEmail, userName) => {
    const formData = {
      email: userEmail,
      name: userName,
      password: "12345678",
      role: isChecked ? "1" : "2",
    };
    const { data } = await PostRequest(
      API + "userRegisterGoogle",
      formData,
      {}
    );
    if (data?.responseCode === 1) {
      handleClose();
      localStorage.setItem("token", data?.responseData);
      toast.success(data?.responseText);
      if (isChecked) {
        navigate("/");
      } else {
        navigate("/");
      }
    } else {
      toast.error(data?.responseText);
    }
  };
  const handleLogin = async (event) => {
    const formData = {
      email,
      password,
      role: isChecked ? "1" : "2",
    };
    const { data } = await PostRequest(API + "userLogin", formData, {});
    setEmail("");
    setPassword("");
    if (data?.responseCode === 1) {
      handleClose();
      localStorage.setItem("token", data?.responseData);
      toast.success(data?.responseText);
      if (isChecked) {
        navigate("/");
      } else {
        navigate("/");
      }
    } else {
      toast.error(data?.responseText);
    }
  };
  const [name, setName] = useState("");
  const profileDetails = useCallback(async () => {
    const { data } = await PostRequest(
      API + "profileDetails",
      {},
      { authorization: "Bearer " + token }
    );
    if (data?.responseCode === 1) {
      setName(data?.responseData.name);
      setMobile(data?.responseData.mobile);
      setEmail(data?.responseData.email);
      setProfile(data?.responseData.profile !== null ? process.env.REACT_APP_HOME + data?.responseData.profile : null);
    }
  }, [token]);

  const fetchCartCount = async () => {
    const { data } = await PostRequest(
      API + "cartCount",
      {},
      { authorization: "Bearer " + token }
    );
    if (data?.responseCode === 1) {
      setCartCount(data?.responseData);
    }
  }

  useEffect(() => {
    if (!token) {
      //navigate("/");
    } else {
      profileDetails();
    }
    return profileDetails;
  }, [navigate, profileDetails, token]);

  useEffect(() => {
    fetchCartCount();
  });

  const Logout = () => {
    localStorage.clear();
    setMegamenu(false);
    window.location.reload();
    window.scrollTo();
    navigate("/");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light  px-3"
        id="desktopmenu"
      >
        <Link className="navbar-brand Brand-logo" to="/">
          <img alt="Header Brand Icon" src={data.header_logo && process.env.REACT_APP_HOME + data.header_logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {location.pathname !== "/instructor-profile/myprofile" &&
          location.pathname !== "/instructor-profile/instCourses" &&
          location.pathname !== "/instructor-profile/edit-profile" &&
          location.pathname !== "/instructor-profile/instNotification" &&
          location.pathname !== "/instructor-profile/instPerformance" &&
          location.pathname !== "/instructor-profile/instAccountSetting" &&
          location.pathname !== "/instructor-profile/instHelp" &&
          location.pathname !== "/instructor-profile/edit-courses-form" &&
          location.pathname !== "/student-profile/edit-profile" &&
          location.pathname !== "/student-profile/stdCourses" &&
          location.pathname !== "/student-profile/stdCart" &&
          location.pathname !== "/student-profile/stdCheckout" &&
          location.pathname !== "/student-profile/stdWishlist" &&
          location.pathname !== "/student-profile/stdNotification" &&
          location.pathname !== "/student-profile/stdAccountSet" &&
          location.pathname !== "/student-profile/stdHelp" ? (
          <div className="collapse navbar-collapse " id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="topNavBar">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/self-learning-courses">
                  Self-learning Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Liveonlinedtailpage">
                  Live Online Class
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Beinstructor">
                  Be instructor
                </NavLink>
              </li>
            </ul>

            {/* <Link to="#" className="px-4">
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5835 1.58333H3.831C5.226 1.58333 6.32391 2.78458 6.20766 4.16667L5.13558 17.0317C5.09372 17.5301 5.15584 18.0317 5.31801 18.5049C5.48017 18.978 5.73885 19.4123 6.07764 19.7802C6.41644 20.1482 6.82796 20.4417 7.28614 20.6423C7.74432 20.8429 8.23917 20.9461 8.73933 20.9454H22.4956C24.3556 20.9454 25.9831 19.4212 26.1252 17.5742L26.8227 7.88667C26.9777 5.7425 25.3502 3.99875 23.1931 3.99875H6.51766M10.6252 9.33333H26.1252M19.9897 27.4167C20.418 27.4167 20.8286 27.2466 21.1314 26.9438C21.4342 26.641 21.6043 26.2303 21.6043 25.8021C21.6043 25.3739 21.4342 24.9632 21.1314 24.6604C20.8286 24.3576 20.418 24.1875 19.9897 24.1875C19.5615 24.1875 19.1509 24.3576 18.8481 24.6604C18.5453 24.9632 18.3752 25.3739 18.3752 25.8021C18.3752 26.2303 18.5453 26.641 18.8481 26.9438C19.1509 27.2466 19.5615 27.4167 19.9897 27.4167ZM9.65641 27.4167C10.0846 27.4167 10.4953 27.2466 10.7981 26.9438C11.1009 26.641 11.271 26.2303 11.271 25.8021C11.271 25.3739 11.1009 24.9632 10.7981 24.6604C10.4953 24.3576 10.0846 24.1875 9.65641 24.1875C9.2282 24.1875 8.81752 24.3576 8.51473 24.6604C8.21194 24.9632 8.04183 25.3739 8.04183 25.8021C8.04183 26.2303 8.21194 26.641 8.51473 26.9438C8.81752 27.2466 9.2282 27.4167 9.65641 27.4167Z"
                  stroke="#021969"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link> */}
            {!token ? (
              <div className="cart-login-btn">
                <button
                  type="button"
                  className="btn btn-custom"
                  onClick={handleShow}
                >
                  Login / Signup
                </button>
              </div>
            ) : (
              <>
                <div className="cart-login-btn px-4 position-relative">
                  <img
                    onClick={() => navigate('/student-profile/cart')}
                    src="../img/basket.png"
                    alt="profile"
                    id="profile1-1"
                    width={70}
                    height={70}
                  />
                  <span className="cart-badge border badge bg-light text-dark position-absolute">{cartCount}</span>
                </div>
                <div className="cart-login-btn px-2">
                  <img
                    onClick={() => setMegamenu(!megamenu)}
                    src={profile ? profile : "../img/profile.png"}
                    alt="profile"
                    id="profile1-1"
                    width={70}
                    height={70}
                  />
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="cart-switchtostudentbtn">
            <a
              href={
                location.pathname !== "/instructor-profile/myprofile" &&
                  location.pathname !== "/instructor-profile/instCourses" &&
                  location.pathname !== "/instructor-profile/edit-profile" &&
                  location.pathname !== "/instructor-profile/instNotification" &&
                  location.pathname !== "/instructor-profile/instPerformance" &&
                  location.pathname !==
                  "/instructor-profile/instAccountSetting" &&
                  location.pathname !== "/instructor-profile/edit-courses-form" &&
                  location.pathname !== "/instructor-profile/instHelp"
                  ? "/instructor-profile/edit-profile"
                  : "/student-profile/edit-profile"
              }
              className="btn btn-custom2"
            >
              {location.pathname !== "/instructor-profile/myprofile" &&
                location.pathname !== "/instructor-profile/instCourses" &&
                location.pathname !== "/instructor-profile/edit-profile" &&
                location.pathname !== "/instructor-profile/instNotification" &&
                location.pathname !== "/instructor-profile/instPerformance" &&
                location.pathname !== "/instructor-profile/instAccountSetting" &&
                location.pathname !== "/instructor-profile/instHelp" &&
                location.pathname !== "/instructor-profile/edit-courses-form"
                ? "Switch To Instructor"
                : "Switch To Student"}
            </a>
          </div>
        )}
      </nav>

      <div className={megamenu ? "megamenushow" : "megamenuhide"}>
        <div className="inner-row d-flex align-items-center border-bottom-1 ">
          <img
            src={profile !== null ? profile : "../img/profile.png"}
            alt="profile"
            id="profile1-1"
            width={50}
            height={50}
          />
          <div className="d-block px-3">
            <h6 className="m-0">{name.length > 18 ? name.substring(0, 18) + '...' : name}</h6>
            <p>{email.length > 18 ? email.substring(0, 18) + '...' : email}</p>
          </div>
        </div>
        <div className="inner-row d-flex align-items-center border-bottom-1">
          <ul>
            <li>
              <Link to="/instructor-profile/edit-profile">
                Instructor Profile
              </Link>
            </li>
            <li>
              <Link to="/student-profile/edit-profile">Student Profile</Link>
            </li>
          </ul>
        </div>
        {/* <div className="inner-row d-flex align-items-center border-bottom-1">
          <ul>
            <li>
              <Link to="/student-profile/stdCart">My Cart</Link>
            </li>
            <li>
              <Link to="/student-profile/stdWishlist">Wishlist</Link>
            </li>
          </ul>
        </div> */}
        <div className="inner-row d-flex align-items-center border-bottom-1">
          <ul>
            <li>
              <Link to="/student-profile/stdNotification">Notification</Link>
            </li>
            <li>
              <Link to="/student-profile/stdNotification">Messages</Link>
            </li>
          </ul>
        </div>
        <div className="inner-row d-flex align-items-center border-bottom-1">
          <ul>
            <li>
              <Link to="/student-profile/stdAccountSet">Account Settings</Link>
            </li>
            <li>
              <Link to="/student-profile/stdHelp">Help</Link>
            </li>
            <li>
              <Link onClick={Logout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* modal login / Register */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          <Tabs>
            <TabList>
              <Tab>Login</Tab>
              <Tab>Signup</Tab>
            </TabList>
            <TabPanel>
              <form className="loginform">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Name@example.com"
                    autoComplete="off"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    id="exampleInputPassword1"
                    placeholder="**************"
                    autoComplete="off"
                    defaultValue={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <hr className="hr-text my-4" data-content="OR" />

                <div className="googleSignup form-control py-3 d-flex justify-content-center">
                  {/* <Link className="text-decoration-none text-dark" to="#"> */}
                  <img alt="img" className="px-2" src="img/google.svg" />
                  {GoogleProfile ? (
                    <div>
                      {/* <img src={GoogleProfile.picture} alt="user pic" />
                        <h3>User Logged in</h3>
                        <p>Name: {GoogleProfile.name}</p>
                        <p>Email Address: {GoogleProfile.email}</p>
                        <br />
                        <br /> */}
                      <button onClick={logOut}>Log out</button>
                    </div>
                  ) : (
                    <button
                      className="text-decoration-none text-dark border-0 bg-white"
                      type="button"
                      onClick={() => login()}
                    >
                      <span>Sign up with Google</span>
                    </button>
                  )}
                  {/* <span>Sign up with Google</span> */}
                  {/* </Link> */}
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block w-100 mt-4 py-2"
                  onClick={() => handleLogin()}
                >
                  Login
                </button>
                {/* <Link className="btn btn-primary btn-lg btn-block w-100 mt-4 py-2">

                </Link> */}

                <div className="normalText text-center py-3">
                  <p>
                    Already have an account?
                    <span>
                      <Link
                        className="font-weight-bold text-decoration-none"
                        to="/instructor-profile"
                      >
                        Login
                      </Link>
                    </span>
                  </p>
                </div>
              </form>
            </TabPanel>
            <TabPanel>
              <form className="loginform">
                <div className="form-group">
                  <label htmlFor="exampleInputName">Name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    defaultValue={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    autoComplete="new-password"
                    placeholder="Name@example.com"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="exampleInputMobile">Mobile</label>
                  <input
                    type="number"
                    className="form-control mt-1"
                    id="exampleInputMobile"
                    placeholder="Mobile Number"
                    defaultValue={mobile}
                    autoComplete="new-password"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    id="exampleInputPassword1"
                    placeholder="**************"
                    defaultValue={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <hr className="hr-text my-4" data-content="OR" />

                <div className="googleSignup form-control py-3 d-flex justify-content-center">
                  {GoogleProfile ? (
                    <div>
                      <button type="button" onClick={logOut}>
                        Log out
                      </button>
                    </div>
                  ) : (
                    <button
                      className="text-decoration-none text-dark border-0 bg-white"
                      onClick={(e) => login(e)}
                      type="button"
                    >
                      <span>Sign up with Google</span>
                    </button>
                  )}
                  {/* <Link className="text-decoration-none text-dark" to="#">
                    <img alt="img" className="px-2" src="img/google.svg" />
                    <span>Sign up with Google</span>
                  </Link> */}
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block w-100 mt-4 py-2"
                  onClick={handleRegister}
                >
                  Sign Up
                </button>

                <div className="normalText text-center py-3">
                  <p>
                    Already have an account?
                    <span>
                      <Link
                        className="font-weight-bold text-decoration-none"
                        to="#"
                      >
                        Login
                      </Link>
                    </span>
                  </p>
                </div>
              </form>
            </TabPanel>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
}
