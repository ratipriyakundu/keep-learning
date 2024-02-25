import React from "react";
import { Link, useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Studentalsosearchfor from "../components/Studentalsosearchfor";
import { ToastContainer, toast } from "react-toastify";
import useHttp from "../Hooks/useHttp";
export default function Selflearningcoursedetailspage() {
  const API = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");
  const { PostRequest } = useHttp();
  const location = useLocation();

  const CourseDetails = location?.state?.items;
  const addToCart = async (items) => {
    const { data } = await PostRequest(
      API + "addToCart",
      { CourseId: items._id },
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
      {/* <!-- box --> */}
      <ToastContainer autoClose={1000} />
      <div className="container mt-5">
        <nav aria-label="breadcrumb" id="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="text-muted text-decoration-none" to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link
                className="text-muted text-decoration-none"
                to="/Selflearningdtailpage"
              >
                Self-learning Course
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Course Detail
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="box-77">
            <div className="row">
              <div className="col-md-6">
                <a className="text-decoration-none" href="detail.html">
                  <h2>{CourseDetails.title}</h2>
                </a>
                <p style={{ fontSize: "20px", color: "#5E5E5E" }}>
                  {CourseDetails.about}
                </p>
                <div className="d-flex">
                  <div className="Ratings-a d-flex flex-column  ">
                    <div className="d-flex align-items-center">
                      <img
                        src="../../img/Vector.svg"
                        id="image-Vector"
                        className="rounded float-start"
                        alt="..."
                      />
                      <h6 className="">00</h6>
                    </div>
                    <div className="block d-flex align-items-center">
                      <img
                        src="../../img/Vector22.svg"
                        id="image-Vector"
                        className="rounded float-start"
                        alt="..."
                      />
                      <h6 className="">{CourseDetails.userId.name}</h6>
                    </div>
                  </div>
                  <div className="Ratings-a d-flex flex-column ">
                    <div className="d-flex">
                      <div className="Star">
                        <img src="../../img/Star 2.svg" alt=".." />
                        <img src="../../img/Star 2.svg" alt=".." />
                        <img src="../../img/Star 2.svg" alt=".." />
                        <img src="../../img/Star 2.svg" alt=".." />
                        <img src="../../img/Star 5.svg" alt=".." />
                      </div>
                      <h6>Ratings</h6>
                    </div>
                    <div className="block">
                      <h6 className="text-22 ">Language: English</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-78 col-md-6">
                <div>
                  <h6>Corse Fees : $ {CourseDetails.courseFee}</h6>
                  <p>Discount : $ {CourseDetails.discount}</p>
                  <button
                    type="button"
                    id="button-Add-to-cart"
                    className="btn btn-primary w-100"
                    onClick={() => addToCart(CourseDetails)}
                  >
                    Add to cart
                  </button>
                  <br />
                  <button
                    type="button"
                    id="button-Buy-now"
                    className="btn btn-outline-primary w-100"
                    onClick={() => addToCart(CourseDetails)}
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- box end--> */}
      {/* <!-- About this course --> */}
      <div className="container mt-5">
        <div className="row">
          <div className="fixed_message">
            <img src="../img/fixed_message.png" alt="" />
          </div>
          <div className="About-this-course">
            <h2 style={{ color: "#021969" }}>About this course</h2>
            <p>{CourseDetails.about}</p>
          </div>
          <hr className="mt-5" />
        </div>
      </div>
      {/* <!-- About this course end --> */}

      {/* <!-- Course content --> */}
      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-7 total-detail-box">
            <h2 className="bc">Course content</h2>
            <ul className="accordion" id="accordion">
              {CourseDetails?.CourseContent?.map((item, index) => (
                <li key={index}>
                  <input type="radio" name="accordion" id="first" />
                  <label htmlFor="first" className="d-flex align-items-center">
                    {item.fileName}
                    <span className="px-5 mx-5 time"> 00 min</span>
                  </label>
                  <div className="main-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 ">
            <div className="detail-box d-flex flex-column justify-content-center align-items-center">
              <h2 className="bb">What you'll learn</h2>
              <div className="learning-points">
                {CourseDetails?.studentsLearn?.map((item, index) => (
                  <div key={index} className="row w-100 ">
                    <div className="rr col-2">
                      <div className="logo-1">
                        <i className="fa-solid fa-check"></i>
                      </div>
                    </div>
                    <div className="text-2 col">
                      <h6>{item?.fileName}</h6>
                    </div>
                    <div className="text-center">
                      <hr className="hh" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
      </div>
      {/* <!-- Course content end--> */}

      {/* <!-- Review --> */}
      <div className="container mt-5">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <h2 className="review-heading">Review</h2>
          <div className="total-review-box">
            <div className="first-child-total-review-box">
              <div className="d-flex">
                <div className="col px-3">
                  <h5 className="h-4-0 ">4.0</h5>
                </div>
                <div className="col pe-3">
                  <img
                    src="../../img/Star 6.svg"
                    id="img-star-6"
                    className="rounded float-start align-middle"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-md-8 ms-5 star-section">
                <div className="mb-2 d-flex justify-content-center align-items-center row">
                  <div
                    className=""
                    style={{ width: "5%", fontWeight: "600", fontSize: "25px" }}
                  >
                    5
                  </div>
                  <div className="mt-1 progress-box">
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="col" style={{ width: "5%" }}>
                    00%
                  </div>
                </div>
                <div className="mb-2 d-flex justify-content-center align-items-center row">
                  <div
                    className=""
                    style={{ width: "5%", fontWeight: "600", fontSize: "25px" }}
                  >
                    4
                  </div>
                  <div className="mt-1 progress-box">
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="col" style={{ width: "5%" }}>
                    100%
                  </div>
                </div>
                <div className="mb-2 d-flex justify-content-center align-items-center row">
                  <div
                    className=""
                    style={{ width: "5%", fontWeight: "600", fontSize: "25px" }}
                  >
                    3
                  </div>
                  <div className="mt-1 progress-box">
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="col" style={{ width: "5%" }}>
                    00%
                  </div>
                </div>
                <div className="mb-2 d-flex justify-content-center align-items-center row">
                  <div
                    className=""
                    style={{ width: "5%", fontWeight: "600", fontSize: "25px" }}
                  >
                    2
                  </div>
                  <div className="mt-1 progress-box">
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="col" style={{ width: "5%" }}>
                    00%
                  </div>
                </div>
                <div className="mb-2 d-flex justify-content-center align-items-center row">
                  <div
                    className=""
                    style={{ width: "5%", fontWeight: "600", fontSize: "25px" }}
                  >
                    1
                  </div>
                  <div className="mt-1 progress-box">
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="col" style={{ width: "5%" }}>
                    00%
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 w-100">
              <hr className="my-5" />
              <div className="px-5 mb-5 review-section">
                <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
                  <h6 className="add-review"> Review (00)</h6>
                  <h6 className="add-review-plus">+ Add Review</h6>
                </div>
                <div className="d-flex justify-content-center align-items-baseline">
                  <div className="pe-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle cx="15" cy="15" r="15" fill="#A9B7B8" />
                      <path
                        d="M21 12C21 15.3137 18.3137 19 15 19C11.6863 19 9 15.3137 9 12C9 8.68629 11.6863 6 15 6C18.3137 6 21 8.68629 21 12Z"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M6 23.5C6 23.5 8 19 15 19C22 19 24 23.5 24 23.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="d-flex flex-column   w-100 mx-2">
                    <div className="mb-2 d-flex align-items-center mt-1 text-left">
                      <h6 className="review-username">RedHibisCus</h6>
                      <div className="text-right">
                        <img src="../../img/Star 2.svg" alt=".." />
                        <img src="../../img/Star 2.svg" alt=".." />
                        <img src="../../img/Star 2.svg" alt=".." />
                        <img src="../../img/Star 2.svg" alt=".." />
                        <img src="../../img/Star 5.svg" alt=".." />
                      </div>
                    </div>
                    <div>
                      <p className="review-para">
                        Review in the United States on September 24, 2020
                      </p>
                      <p className="review-details-para">
                        Lorem Ipsum is a dummy Text
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
      </div>
      {/* <!-- Review end --> */}

      {/* <!-- instructor --> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row m-0">
              <h2 className="bc">Instructor</h2>
              <div className="instructor-section">
                <div className="instructor-Name col-7">
                  <h2 className="b-text">Instructor Name</h2>
                </div>
                <div className="d-flex col-5">
                  <div className="me-4 d-flex align-items-center col">
                    <img
                      src="../../img/Vector.svg"
                      className="rounded float-start"
                      alt="..."
                      style={{ width: "15px", height: "15px" }}
                    />
                    <p className="text-img-1 ">00 students</p>
                  </div>
                  <div className="d-flex align-items-center col">
                    <img
                      src="../../img/Star 2.svg"
                      className="rounded float-start"
                      alt="..."
                    />
                    <img
                      src="../../img/Star 2.svg"
                      className="rounded float-start"
                      alt="..."
                    />
                    <img
                      src="../../img/Star 2.svg"
                      className="rounded float-start"
                      alt="..."
                    />
                    <img
                      src="../../img/Star 2.svg"
                      className="rounded float-start"
                      alt="..."
                    />
                    <img
                      src="../../img/Star 5.svg"
                      className="rounded float-start"
                      alt="..."
                    />
                    <p className="text-img-1">Ratings</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="instructor-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- instructor end --> */}

      <div className="container mt-5">
        <div className="row">
          <div className="box-77">
            <div className="row">
              <div className="col-md-6">
                <a className="text-decoration-none" href="detail.html">
                  <h2>Learn PHP Programming From Scratch</h2>
                </a>
                <p style={{ fontSize: "20px", color: "#5E5E5E" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <div className="d-flex">
                  <div className="Ratings-a d-flex flex-column  ">
                    <div className="d-flex align-items-center">
                      <img
                        src="../../img/Vector.svg"
                        id="image-Vector"
                        className="rounded float-start"
                        alt="..."
                      />
                      <h6 className="">00</h6>
                    </div>
                    <div className="block d-flex align-items-center">
                      <img
                        src="../../img/Vector22.svg"
                        id="image-Vector"
                        className="rounded float-start"
                        alt="..."
                      />
                      <h6 className="">Instructors Name</h6>
                    </div>
                  </div>
                  <div className="Ratings-a d-flex flex-column ">
                    <div className="d-flex">
                      <div className="Star">
                        <img src="../../img/Star 2.svg" alt=".." />
                        <img src="../../img/Star 2.svg" alt=".." />
                        <img src="../../img/Star 2.svg" alt=".." />
                        <img src="../../img/Star 2.svg" alt=".." />
                        <img src="../../img/Star 5.svg" alt=".." />
                      </div>
                      <h6>Ratings</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-78 col-md-6">
                <div>
                  <h6>$00.00 Price</h6>
                  <p>$00.00 % Discount</p>
                  <button
                    type="button"
                    id="button-Add-to-cart"
                    className="btn btn-primary w-100"
                  >
                    Add to cart
                  </button>
                  <br />
                  <button
                    type="button"
                    id="button-Buy-now"
                    className="btn btn-outline-primary w-100"
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- $00.00 Price end --> */}

      {/* <!-- students also searching for --> */}
      <Studentalsosearchfor
        h4span="STUDENTS"
        h4="also searching for"
        bgcolor="#021869"
        h4color="#fff"
        cardTitleColor="#fff"
        cardTitleDetailsColor="#D7D7D7"
        durationColor="#fff"
        btncolor="#fff"
        btnborder="1px solid #fff"
        cardBorder="1px solid #e0dede"
        imgcolor="#E5C100"
      />
      {/* <!-- students also searching for end --> */}

      {/* Trending-Courses */}
      <Studentalsosearchfor
        cName="light-bg"
        h4span="TRENDING"
        h4="Courses"
        bgcolor="#fff"
        h4color="#000"
        cardTitleColor="#021869"
        cardTitleDetailsColor="#5E5E5E"
        durationColor="#5E5E5E"
        btncolor="#021869"
        btnborder="1px solid #021869"
        cardBorder="1px solid #021869"
        imgcolor="#021869"
      />
    </>
  );
}
