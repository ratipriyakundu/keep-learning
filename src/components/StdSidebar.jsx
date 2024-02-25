import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const StdSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    window.location.reload();
    window.scrollTo();
    navigate("/");
  };
  return (
    <>
      <div
        className="col-md-4 nav flex-column nav-pills p-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <Link
          to="/student-profile/edit-profile"
          className={
            location.pathname === "/student-profile/myprofile" ||
            location.pathname === "/student-profile/edit-profile"
              ? "nav-link active"
              : "nav-link"
          }
        >
          My profile
        </Link>
        <Link
          to="/student-profile/stdCourses"
          className={
            location.pathname === "/student-profile/stdCourses"
              ? "nav-link active"
              : "nav-link"
          }
        >
          My Courses
        </Link>
        <Link
          to="/student-profile/stdCart"
          className={
            location.pathname === "/student-profile/stdCart" ||
            location.pathname === "/student-profile/stdCheckout"
              ? "nav-link active"
              : "nav-link"
          }
        >
          My Cart
        </Link>
        <Link
          to="/student-profile/stdWishlist"
          className={
            location.pathname === "/student-profile/stdWishlist"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Wishlist
        </Link>
        <Link
          to="/student-profile/stdNotification"
          className={
            location.pathname === "/student-profile/stdNotification"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Notification
        </Link>
        <Link
          to="/student-profile/stdAccountSet"
          className={
            location.pathname === "/student-profile/stdAccountSet"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Account Setting
        </Link>
        <Link
          to="/student-profile/stdHelp"
          className={
            location.pathname === "/student-profile/stdHelp"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Help
        </Link>
        <Link onClick={Logout} className="nav-link">
          Logout
        </Link>
      </div>
    </>
  );
};

export default StdSidebar;
