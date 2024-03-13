import React from "react";
import { useNavigate } from "react-router-dom";

const StdCourseList = ({ CartData }) => {
  const navigate = useNavigate();

  const myStyle = {
    button: {
      width: "200px",
      height: "40px",
      border: "2px solid #021969",
      backgroundColor: "#fff",
      color: "#021969",
      fontSize: "18px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "20px",
      color: "#021969",
      lineHeight: "25px",
      height: "50px"
    },
    instructorName: {
      color: "#021969"
    },
    p: {
      color: "#5E5E5E",
      fontSize: "16px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
    },
    p2: {
      fontSize: "16px",
      color: "#5E5E5E",

    },
    progress: {
      height: "5px",
    },

    img: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
  };
  return (
    <>
      <div className="row mt-5">
        {CartData.length > 0
          ? CartData.map((item, index) => {
            return (
              <div key={index} style={{textDecoration: 'none', cursor: 'pointer'}}
                className="col-md-3 ps-3 pt-3 pb-2 pe-0 rounded-3"
                onClick={() =>
                  navigate("/student-profile/self-learning-course-details", {
                    state: { item },
                  })
                }
              >
                <div>
                  <img style={myStyle.img} src={item && item.CourseData.image !== null ? process.env.REACT_APP_HOME + item.CourseData.image : "../img/profile.png"} alt={item.CourseData.title} />
                  <div
                    style={myStyle.progress}
                    className="progress mt-2"
                    role="progressbar"
                    aria-label="Warning example"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "40%", height: "5px" }}
                    ></div>
                  </div>
                  <p className="py-2 " style={myStyle.p2}>
                    40% Completed
                  </p>
                </div>
                <h3 style={myStyle.h3} className="mx-0 mb-3">{item.CourseData.title}</h3>
                <div className="d-flex">
                  <span className="icon-instructors ms-0 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#021969"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                  </span>
                  <span style={myStyle.instructorName} className="dl"> {item.CourseData.userName} </span>
                </div>
                <p style={myStyle.p} className="pt-3 ">
                  {item.CourseData.about.length > 120 ? item.CourseData.about.substring(0, 120) : item.CourseData.about}
                </p>
              </div>
            );
          })
          : (
            <>
              <img src="../img/no-data.svg" alt="No Data Found" style={{ width: "40%", margin: "auto" }} />
            </>
          )}
      </div>
    </>
  );
};

export default StdCourseList;
