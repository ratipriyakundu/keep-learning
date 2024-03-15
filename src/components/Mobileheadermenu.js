import React, { useEffect, useState } from "react";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useHttp from "../Hooks/useHttp";
import { toast } from "react-toastify";

export default function Mobileheadermenu() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [megamenu, setMegamenu] = useState(false);
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { PostRequest } = useHttp();
  const [email, setEmail] = useState("");
  const [UserName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  useEffect(() => {
    setMegamenu(false);
  }, [location, isChecked]);

  const handleRegister = async (event) => {
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
      // navigate("/instructor-profile/myprofile");
    } else {
      toast.error(data?.responseText);
    }
  };

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
        className="navbar navbar-expand-lg navbar-light d-none px-3"
        id="mobmenu"
      >
        <div className="mob-menu d-flex">
          {/* <div>
            <Link className="navbar-brand Brand-logo" to="/">
              <img alt="img" src="../img/logo.png" />
            </Link>
          </div> */}
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
            <div className="d-flex justify-content-between">
              {!token ? (
                <div className="cart-login-btn">
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
                  <button
                    type="button"
                    className="btn btn-custom"
                    onClick={handleShow}
                  >
                    Login / Signup
                  </button>
                </div>
              ) : (
                <div className="cart-login-btn px-4">
                  <Link to="#" className="px-4">
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
                  </Link>
                  <img
                    onClick={() => setMegamenu(!megamenu)}
                    src="../img/profile.png"
                    alt="profile"
                  />
                </div>
              )}
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

              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Selflearningdtailpage">
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
              </div>
            </div>
          ) : (
            <div className="cart-switchtostudentbtn d-flex justify-content-center align-items-center">
              <a
                href={
                  location.pathname !== "/instructor-profile/myprofile" &&
                  location.pathname !== "/instructor-profile/instCourses" &&
                  location.pathname !== "/instructor-profile/edit-profile" &&
                  location.pathname !==
                    "/instructor-profile/instNotification" &&
                  location.pathname !== "/instructor-profile/instPerformance" &&
                  location.pathname !==
                    "/instructor-profile/instAccountSetting" &&
                  location.pathname !==
                    "/instructor-profile/edit-courses-form" &&
                  location.pathname !== "/instructor-profile/instHelp"
                    ? "/instructor-profile/myprofile"
                    : "/student-profile/edit-profile"
                }
                className="btn btn-custom2  "
              >
                {location.pathname !== "/instructor-profile/myprofile" &&
                location.pathname !== "/instructor-profile/instCourses" &&
                location.pathname !== "/instructor-profile/edit-profile" &&
                location.pathname !== "/instructor-profile/instNotification" &&
                location.pathname !== "/instructor-profile/instPerformance" &&
                location.pathname !==
                  "/instructor-profile/instAccountSetting" &&
                location.pathname !== "/instructor-profile/instHelp" &&
                location.pathname !== "/instructor-profile/edit-courses-form"
                  ? "Switch To Instructor"
                  : "Switch To Student"}
              </a>
            </div>
          )}
        </div>
      </nav>
      <div className={megamenu ? "megamenushow" : "megamenuhide"}>
        <div className="inner-row d-flex align-items-center border-bottom-1">
          <img src="../img/profile.png" alt="profile" width={30} height={30} />
          <div className="d-block px-3">
            <h6 className="m-0">Name Surname</h6>
            <p>email@gmail.com</p>
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
              <Link>My Cart</Link>
            </li>
            <li>
              <Link>Wishlist</Link>
            </li>
          </ul>
        </div> */}
        <div className="inner-row d-flex align-items-center border-bottom-1">
          <ul>
            <li>
              <Link>Notification</Link>
            </li>
            <li>
              <Link>Messages</Link>
            </li>
          </ul>
        </div>
        <div className="inner-row d-flex align-items-center border-bottom-1">
          <ul>
            <li>
              <Link>Account Settings</Link>
            </li>
            <li>
              <Link>Help</Link>
            </li>
            <li>
              <Link onClick={Logout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="border-0 mt-0"></Modal.Header>
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
                    defaultValue={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <hr
                  className="hr-text my-4"
                  data-content="OR"
                  style={{ border: "0px !important" }}
                />

                <div className="googleSignup form-control py-3 d-flex justify-content-center">
                  <Link className="text-decoration-none text-dark" to="#">
                    <img alt="img" className="px-2" src="img/google.svg" />
                    <span>Sign up with Google</span>
                  </Link>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block w-100 mt-4 py-2"
                  onClick={handleLogin}
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
                  <Link className="text-decoration-none text-dark" to="#">
                    <img alt="img" className="px-2" src="img/google.svg" />
                    <span>Sign up with Google</span>
                  </Link>
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
