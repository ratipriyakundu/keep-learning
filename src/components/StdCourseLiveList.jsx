import React from "react";

const StdCourseLiveList = () => {
  const myStyle = {
    button: {
      width: "200px",
      height: "40px",
      border: "1px solid #021969",
      backgroundColor: "#fff",
      color: "#021969",
      fontSize: "16px",
      fontWeight: 600,
    },
    img: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    h3: {
      fontSize: "22px",
      color: "#021969",
    },
    p: {
      color: "#5E5E5E",
      fontSize: "15px",
    },
    p2: {
      fontSize: "16px",
      color: "#5E5E5E",
    },
    progress: {
      height: "5px",
    },
  };
  return (
    <>
      <div className="row mt-5 ">
        <div className="col-md-5">
          <div>
            <img style={myStyle.img} src="../img/image23.png" alt="" />
            <div
              style={myStyle.progress}
              className="progress mt-3"
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
            <p className="pb-3 pt-2" style={myStyle.p2}>
              40% Completed
            </p>
          </div>
        </div>
        <div className="col-md-5 ms-3">
          <h3 style={myStyle.h3}>Learn PHP Programming From Scratch</h3>
          <div className="pt-4">
            <i>
              <img src="../img/instructorfill.png" alt="" />
            </i>
            <span className="ms-2" style={{ color: "#5E5E5E" }}>
              Instructor Name
            </span>
          </div>
          <p style={myStyle.p} className="pt-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            ducimus!
          </p>
          <div className="d-flex justify-content-start  mt-3">
            <button id="liveclassbtn" style={myStyle.button} className="m-0 rounded-3">
              VIEW LIVE CLASS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StdCourseLiveList;
