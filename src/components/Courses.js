import React from "react";
import useHttp from "../Hooks/useHttp";
import { ToastContainer, toast } from "react-toastify";
const API = process.env.REACT_APP_API_URL;

export default function Courses({ coursesData, setCallAPI, CallAPI }) {
  const { PostRequest } = useHttp();
  const token = localStorage.getItem("token");
  const addTowishList = async (item) => {
    const { data } = await PostRequest(
      API + "addRemoveWishlist",
      { CourseId: item._id },
      {
        authorization: "Bearer " + token,
      }
    );
    setCallAPI(!CallAPI);
    if (data?.responseCode === 1) {
      toast.success(data?.responseText);
    } else {
      toast.error(data?.responseText);
    }
  };
  return (
    <>
      <div className="row">
        <ToastContainer autoClose={300} />
        {coursesData && coursesData.length > 0 ? (
          coursesData.map((item, index) => {
            return (
              <div className="instructors-name  col-md-3" key={index}>
                {/* <a className="text-decoration-none" href="detail.html"> */}
                <div className="text-center">
                  <img
                    src="img\image23.png"
                    className=""
                    id="image23"
                    alt="img"
                  />
                </div>
                <div className="text-price">
                  <div className="price">
                    <p>${item.courseFee}</p>
                  </div>
                </div>
                <h3 className="mx-0">{item.title}</h3>
                <div className="d-flex">
                  <span className="icon-instructors ms-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                  </span>
                  <span className="dl"> {item.userId.name} </span>
                </div>
                <p className="text-1 mx-0">{item.about}</p>
                <div className="box-7 d-flex justify-content-between">
                  <img
                    src="img/Vector.svg"
                    className="rounded float-start"
                    alt="img"
                  />
                  <p className="text-0">00</p>
                  <div className="text-center">
                    <img src="img/Star 2.svg" alt="img" />
                    <img src="img/Star 2.svg" alt="img" />
                    <img src="img/Star 2.svg" alt="img" />
                    <img src="img/Star 2.svg" alt="img" />
                    <img src="img/Star 5.svg" alt="img" />
                  </div>
                  <div>
                    <button
                      className="border-0 bg-transparent"
                      onClick={() => addTowishList(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill={item.isWishlist === 1 ? "red" : "currentColor"}
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* </a> */}
              </div>
            );
          })
        ) : (
          <h3>Data Not found</h3>
        )}
      </div>
    </>
  );
}
