import React from "react";
import { Link } from "react-router-dom";

const StdMessageContent = () => {
  const myStyle = {
    singleMsg: {
      cursor: "pointer",
    },
  };
  return (
    <>
      <div className="tab-pane show active mx-5">
        <div className="row">
          <div className="col-lg-6" id="notification">
            <h3 style={{ color: "#021969" }}>Message</h3>
          </div>
        </div>
        <div className="row">
          <Link className="" to="/instructor-profile/chatmessage">
            <div
              style={myStyle.singleMsg}
              className="k-box row mt-3 mx-0 px-0 unread"
            >
              <div className="col-md-1 px-0">
                <div className="text-start">
                  <img
                    src="../img/Ellipse 353.svg"
                    className="rounded"
                    alt="..."
                    style={{ width: "45%" }}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <h6>
                  Name of instructor
                  <br /> Course Name
                </h6>
              </div>
              <div className="col-md-4">
                <h6>Lorem Ipsum is simply dummy text.....</h6>
              </div>
              <div className="col-md-3">
                <h6>
                  Date : dd/mm/yy
                  <br />
                  Time : 00:00 am/pm
                </h6>
              </div>
              <div className="col-md-1">
                <span className="badge badge-light">1</span>
              </div>
            </div>
          </Link>
          {/* Msg 2 */}
          <Link className="" to="/instructor-profile/chatmessage">
            <div style={myStyle.singleMsg} className="k-box row mt-3 mx-0 px-0">
              <div className="col-md-1 px-0">
                <div className="text-start">
                  <img
                    src="../img/Ellipse 353.svg"
                    className="rounded"
                    alt="..."
                    style={{ width: "45%" }}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <h6>
                  Name of instructor
                  <br /> Course Name
                </h6>
              </div>
              <div className="col-md-4">
                <h6>Lorem Ipsum is simply dummy text.....</h6>
              </div>
              <div className="col-md-3">
                <h6>
                  Date : dd/mm/yy
                  <br />
                  Time : 00:00 am/pm
                </h6>
              </div>
              <div className="col-md-1">
                {/* <span className="badge badge-light">1</span> */}
              </div>
            </div>
          </Link>
          {/* Msg 3 */}
          <Link className="" to="/instructor-profile/chatmessage">
            <div style={myStyle.singleMsg} className="k-box row mt-3 mx-0 px-0">
              <div className="col-md-1 px-0">
                <div className="text-start">
                  <img
                    src="../img/Ellipse 353.svg"
                    className="rounded"
                    alt="..."
                    style={{ width: "45%" }}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <h6>
                  Name of instructor
                  <br /> Course Name
                </h6>
              </div>
              <div className="col-md-4">
                <h6>Lorem Ipsum is simply dummy text.....</h6>
              </div>
              <div className="col-md-3">
                <h6>
                  Date : dd/mm/yy
                  <br />
                  Time : 00:00 am/pm
                </h6>
              </div>
              <div className="col-md-1">
                {/* <span className="badge badge-light">1</span> */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StdMessageContent;
