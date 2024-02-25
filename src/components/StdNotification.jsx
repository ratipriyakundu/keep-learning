import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Link, useNavigate } from "react-router-dom";
import StdMessageContent from "./StdMessageContent";
import InstNotificationContent from "./InstNotificationContent";
import useHttp from "../Hooks/useHttp";
const API = process.env.REACT_APP_API_URL;
const StdNotification = () => {
  const token = localStorage.getItem("token");
  const [totalNotification, setTotalNotification] = useState([]);
  const { PostRequest } = useHttp();
  const navigate = useNavigate();
  const fetchNotificationList = async () => {
    if (!token) {
      navigate("/login");
      localStorage.clear();
    }
    const { data } = await PostRequest(
      `${API}NotificationList`,
      {},
      { authorization: "Bearer " + token }
    );
    if (data?.responseCode === 1) {
      setTotalNotification(data?.responseData);
    }
  };

  useEffect(() => {
    fetchNotificationList();
  }, []);
  return (
    <>
      <div className="row">
        <Tabs className="d-flex flex-column align-items-center ">
          <div className="row w-100 ">
            <TabList className="d-flex justify-content-end">
              <div>
                <Tab>
                  <Link to="#" className="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="18"
                      fill="black"
                      className="bi bi-bell"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                  </Link>
                </Tab>
                <Tab>
                  <Link to="#" className="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="18"
                      fill="black"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </Link>
                </Tab>
              </div>
            </TabList>
          </div>
          <div>
            <TabPanel>
              {/* Notification Start */}
              <InstNotificationContent totalNotification={totalNotification} />
              {/* Notification End */}
              {/* Message Start */}
              {/* Message Start */}
            </TabPanel>
            <TabPanel>
              <StdMessageContent />
              {/* <StdChatDetails/> */}
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </>
  );
};
export default StdNotification;
