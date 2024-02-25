import React from "react";
import AddSelfLearningCourse from "./AddSelfLearningCourse";
import AddLiveCourse from "./AddLiveCourse";

const AddNewCourse = () => {

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
      <div className="row ">
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
              <AddSelfLearningCourse />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* <!-- Live cources loop --> */}
              <AddLiveCourse />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewCourse;
