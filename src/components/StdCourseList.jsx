import React from "react";

const StdCourseList = ({ CartData }) => {
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
    },
    p: {
      color: "#5E5E5E",
      fontSize: "16px",
      overflow: "hidden",
      whiteSpace: "nowrap",
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
      height: "110px",
      objectFit: "cover",
    },
  };
  console.log(CartData)
  return (
    <>
      <div className="row mt-5">
        {CartData.length > 0
          ? CartData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-3  me-5 ps-3 pt-3 pb-2 pe-0 rounded-3"
                >
                  <div>
                    <img style={myStyle.img} src="../img/image23.png" alt="" />
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
                  <h3 style={myStyle.h3}>{item.CourseData.title}</h3>
                  <div className="pt-2">
                    <i>
                      <img src="../img/instructorfill.png" alt="" />
                    </i>
                    <span className="ms-2" style={{ color: "#5E5E5E" }}>
                      {item.CourseData.userName}
                    </span>
                  </div>
                  <p style={myStyle.p} className="pt-3 ">
                    {item.CourseData.about}
                  </p>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default StdCourseList;
