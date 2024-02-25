import React from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../Hooks/useHttp";
import { ToastContainer, toast } from "react-toastify";
const StdWishlistContent = ({ TotalWishlist }) => {
  const API = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");
  const { PostRequest } = useHttp();
  const navigate = useNavigate();
  const myStyle = {
    button: {
      width: "200px",
      height: "40px",
      border: "1px solid #021969",
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
    },
  };
  const addToCart = async (items) => {
    const { data } = await PostRequest(
      API + "addToCart",
      { CourseId: items?.CourseData?._id },
      { authorization: "Bearer " + token }
    );
    if (data?.responseCode === 1) {
      toast.success(data?.responseText);
    } else {
      toast.error(data?.responseText);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="row mt-5">
        {TotalWishlist &&
          TotalWishlist.map((item, index) => (
            <div className="col-4 border me-5  rounded-3">
              <div className="row ps-3 pt-3 pb-2 pe-0">
                <h3 style={myStyle.h3}>{item?.CourseData?.title}</h3>
                <p style={myStyle.p} className="pt-0 ">
                  {item?.CourseData?.about}
                </p>
                <div className="pt-3 ">
                  <i>
                    <img
                      className="align-middle"
                      src="../img/duration.png"
                      alt=""
                    />
                  </i>
                  <span className="ms-2 align-middle">
                    Course Duration : {item?.CourseData?.courseDuration} Min
                  </span>
                </div>
                <div className="pt-3">
                  <i>
                    <img
                      className="align-middle"
                      src="../img/fees.png"
                      alt=""
                    />
                  </i>
                  <span className="ms-2 align-middle">
                    Course Fees {item?.CourseData?.courseFee}
                  </span>
                </div>
                <div className="pt-3">
                  <i>
                    <img
                      className="align-middle"
                      src="../img/instructor.png"
                      alt=""
                    />
                  </i>
                  <span className="ms-2 align-middle ">
                    Instructor Name : {item?.CourseData?.userName}
                  </span>
                </div>
                <div className="pt-2">
                  <div className=" d-inline ">
                    <img alt="img" src="../img/Star 2.svg" />
                    <img alt="img" src="../img/Star 2.svg" />
                    <img alt="img" src="../img/Star 2.svg" />
                    <img alt="img" src="../img/Star 2.svg" />
                    <img alt="img" src="../img/Star 5.svg" />
                  </div>
                  <span className="ms-2">Ratings</span>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-center ">
                <button
                  onClick={() => addToCart(item)}
                  id="addtocartbtn"
                  style={myStyle.button}
                  className=" rounded-3 mb-3 mt-3"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default StdWishlistContent;
