import StdCourseList from "./StdCourseList";
import StdCourseLiveList from "./StdCourseLiveList";
import React, { useEffect, useState } from "react";
import useHttp from "../Hooks/useHttp";
const API = process.env.REACT_APP_API_URL;
const StdCourses = () => {
  const token = localStorage.getItem("token");
  const { PostRequest } = useHttp();
  const [CartData, setCartData] = useState([]);
  const getmyCourses = async () => {
    const { data } = await PostRequest(
      API + "myCourses",
      {},
      {
        authorization: "Bearer " + token,
      }
    );

    if (data?.responseCode === 1) {
      setCartData(data?.responseData);
    }
  };
  useEffect(() => {
    getmyCourses();
  }, []);
  const myStyle = {
    button: {
      backgroundColor: "#021969",
      color: "#fff",
      fontSize: "20px",
      fontWeight: 600,
      height: "40px",
      width: "250px",
      borderRadius: "10px",
    },
    button2: {
      fontSize: "20px",
      border: "none",
      backgroundColor: "transparent",
      color: "#021969",
      marginRight: "100px",
    },
  };

  return (
    <>
      <div className="row w-100">
        <div
          className="row w-100 px-5 d-flex  justify-content-between"
          id="search"
        >
          <div className="col-8 w-50 border rounded px-3 p-1 d-flex bordercol">
            <img alt="img" className="px-3" src="../img/search-icon.svg" />
            <input
              className="border-0 w-100"
              type="text"
              placeholder="Search  Course"
            />
          </div>
          <div className="col-4">
            <button style={myStyle.button} type="submit" name="searchcourses">
              BUY MORE COURSES
            </button>
          </div>
        </div>
        <div className="row mt-5 w-100 px-5" id="switchcourses">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                style={myStyle.button2}
                className=" active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Self-learning Courses
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                style={myStyle.button2}
                className=""
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                tabIndex="-1"
              >
                Live Online Class
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {/* <!-- cources loop --> */}
              <StdCourseList CartData={CartData && CartData} />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* <!-- Live cources loop --> */}
              <StdCourseLiveList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StdCourses;
