import React, { useEffect, useState } from "react";
import Courseslistviewloop from "./Courseslistviewloop";
import Livecourseslistview from "./Livecourseslistview";
import { useNavigate } from "react-router-dom";
import useHttp from "../Hooks/useHttp";
const API = process.env.REACT_APP_API_URL;
const InstCourses = () => {
  const token = localStorage.getItem("token");
  const [courses, setCourses] = useState([]);
  const [LiveCourses, setLiveCourses] = useState([]);
  const { PostRequest } = useHttp();
  const handleSubmit = async () => {
    const { data } = await PostRequest(
      API + "getInsCourses",
      { courseType: 1 },
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      setCourses(data?.responseData);
      // navigate("/instructor-profile/instCourses");
      // toast.success(data?.responseText);
    } else {
      // toast.error(data?.responseText);
    }
  };
  const getLiveCourse = async () => {
    const { data } = await PostRequest(
      API + "getInsCourses",
      { courseType: 2 },
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      setLiveCourses(data?.responseData);
      // navigate("/instructor-profile/instCourses");
      // toast.success(data?.responseText);
    } else {
      // toast.error(data?.responseText);
    }
  };
  useEffect(() => {
    getLiveCourse();
    handleSubmit();
  }, []);
  const navigate = useNavigate();
  const myStyle = {
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
      <div className="row col-lg-8 m-5 mb-0 course-field">
        <div
          className="tab-pane fade active show"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
          <form action="add-self-learning-course.html">
            <div className="row px-5" id="search">
              <div className="col-6 border rounded px-3 p-1 d-flex bordercol search-course">
                <img alt="img" className="px-3" src="../img/search-icon.svg" />
                <input
                  className="border-0 w-100"
                  type="text"
                  placeholder="Search Your Course"
                />
              </div>
              <div className="col-6 search-course">
                <button
                  onClick={() => navigate("/instructor-profile/add-new-course")}
                  type="button"
                  name="searchcourses"
                  className="p-1 px-4 addtocources"
                  defaultValue="ADD NEW COURSES"
                >
                  Add Course
                </button>
              </div>
            </div>
          </form>
          <div className="row mt-5 w-100 px-5" id="switchcourses">
            <ul
              className="nav nav-pills mb-3"
              id="pills-tab switchselftolive"
              role="tablist"
            >
              <li className="nav-item nav-li" role="presentation">
                <button
                  style={myStyle.button2}
                  className="nav-link2 active"
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
              <li className="nav-item nav-li" role="presentation">
                <button
                  style={myStyle.button2}
                  className="nav-link2"
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
                <Courseslistviewloop courses={courses && courses} />
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                {/* <!-- Live cources loop --> */}
                <Livecourseslistview courses={LiveCourses && LiveCourses} />
              </div>
            </div>
          </div>

          {/* edit course */}
        </div>
      </div>
    </>
  );
};

export default InstCourses;
