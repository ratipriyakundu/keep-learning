import React from "react";

const InstNotificationContent = ({ totalNotification }) => {
  return (
    <>
      <div className="tab-pane  show active mx-5">
        <div className="row">
          <div className="col-lg-6" id="notification">
            <h3 style={{ color: "#021969" }}>Notification</h3>
          </div>
        </div>
        <div className="row">
          {totalNotification &&
            totalNotification.map((item, index) => (
              <div key={index} className="k-box row mt-3 mx-0">
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
                <div className="col-md-9">
                  <h6>{item.NotificationName}</h6>
                </div>
                <div className="col-md-2 d-flex justify-content-end align-items-center">
                  <img
                    src="../img/mute.svg"
                    className="rounded float-start"
                    id="img-star-8"
                    alt="..."
                    style={{ width: "16px" }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default InstNotificationContent;
