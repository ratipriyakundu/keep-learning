import React from "react";

export default function StdChatDetails() {
  return (
    <>
      <div className="tab-pane show active mx-5">
        <div className="row">
          <div className="col-lg-6" id="notification">
            <h3 style={{ color: "#021969" }}>MESSAGE</h3>
          </div>
        </div>
        <div className="row">
          <div className="k-box row mt-3 mx-0 px-3 border-0 rounded unreaddata">
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
            <div className="col-md-8">
              <h6>
                Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy
                textLorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                text Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                textLorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                text
              </h6>
            </div>
            <div className="col-md-3">
              <h6>
                Date : dd/mm/yy
                <br />
                Time : 00:00 am/pm
              </h6>
            </div>
          </div>
          {/* Msg 2 */}
          <div className="k-box row mt-3 mx-0 px-3 border-0 rounded ">
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
            <div className="col-md-8">
              <h6>
                Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy
                textLorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                text Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                textLorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                text
              </h6>
            </div>
            <div className="col-md-3">
              <h6>
                Date : dd/mm/yy
                <br />
                Time : 00:00 am/pm
              </h6>
            </div>
          </div>
          {/* Msg 3 */}
          <div className="k-box row mt-3 mx-0 px-3 border-0 rounded ">
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
            <div className="col-md-8">
              <h6>
                Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy
                textLorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                text Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                textLorem Ipsum is simply dummy textLorem Ipsum is simply dummy
                text
              </h6>
            </div>
            <div className="col-md-3">
              <h6>
                Date : dd/mm/yy
                <br />
                Time : 00:00 am/pm
              </h6>
            </div>
          </div>
        </div>
        <div className="input-group flex-nowrap mt-3 px-3">
          <input
            type="text"
            className="form-control ps-4"
            placeholder="Type"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            style={{ height: "50px" }}
          />
          <span className="input-group-text" id="addon-wrapping pe-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
            >
              <path
                d="M2.35853 9.01594L1.14654 13.046C0.380553 15.593 2.86709 17.8673 5.112 16.6729L14.431 11.715C16.5212 10.6029 16.5235 7.4241 14.4348 6.30862L5.11093 1.32915C2.86721 0.13088 0.377132 2.40233 1.14065 4.95083L2.35853 9.01594ZM2.35853 9.01594H5.32953"
                stroke="#5E5E5E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
