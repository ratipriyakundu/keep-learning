import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Coursefilter from "../components/Coursefilter";
import Studentalsosearchfor from "../components/Studentalsosearchfor";

import { ToastContainer } from "react-toastify";
import useHttp from "../Hooks/useHttp";
import { useNavigate } from "react-router-dom";
import Testmonial from "../components/Testmonial";
import Pagination from "../components/Pagination/Pagination";
const API = process.env.REACT_APP_API_URL;
export default function SelfLearningCourses() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { PostRequest } = useHttp();
  const [Course, setCourse] = useState([]);
  const [filter] = useState({
    status: "1",
    featured: "",
    popular: "",
    courseType: "1",
    page: 1,
  });
  const GetCourses = async () => {
    const { data } = await PostRequest(API + "getCourses", filter, {
      authorization: "Bearer " + token,
    });
    setCourse(data?.responseData);
  };

  useEffect(() => {
    GetCourses();
  }, []);
  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="container">
        <div className="row">
          <div className="col-md-3 my-5">
            <Coursefilter />
          </div>

          <div className="col-md-9">
            <div className="Choose-a-subject my-5">
              <h3>
                What You want to <span>LEARN</span>
              </h3>
            </div>
            <div className="row">
              <div
                className="d-flex justify-content-between"
                id="selflearning-details"
              >
                <div className="col-6 border rounded px-3 p-1 d-flex bordercol">
                  <img alt="img" className="px-3" src="img/search-icon.svg" />
                  <form className="w-100">
                    <input
                      className="border-0 w-100"
                      type="text"
                      placeholder="Search Course"
                    />
                  </form>
                </div>
                <select
                  className="form-select form-select-sm w-100"
                  aria-label="Small select example"
                >
                  <option selected>Sort By : Most Popular</option>
                  <option defaultValue="1">One</option>
                  <option defaultValue="2">Two</option>
                  <option defaultValue="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row mt-5 ">
              {Course && Course.length > 0
                ? Course.map((items, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <div className="box-Corse-Duration">
                        <h3>{items.title}</h3>
                        <p>{items.about}</p>
                        <div className="d-flex mt-3">
                          <img
                            alt="img"
                            src="img/Group 2411.svg"
                            id="img-Duration"
                            className="rounded float-start"
                          />
                          <p>Corse Duration : {items.courseDuration} Min </p>
                        </div>
                        <div className="d-flex mt-2 mb-2">
                          <img
                            alt="img"
                            src="img/Group 3099.svg"
                            id="img-Duration"
                            className="rounded float-start"
                          />
                          <p>Corse Fees : ${items.courseFee}</p>
                        </div>
                        <div className="d-flex mt-2 mb-0">
                          <img
                            alt="img"
                            src="img/Group 3099.svg"
                            id="img-Duration"
                            className="rounded float-start"
                          />
                          <p>Instructors : {items.userId.name}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div class="Star2">
                            <img alt="img" src="../img/Star 2.svg" />
                            <img alt="img" src="../img/Star 2.svg" />
                            <img alt="img" src="../img/Star 2.svg" />
                            <img alt="img" src="../img/Star 2.svg" />
                            <img alt="img" src="../img/Star 5.svg" />
                          </div>
                          <p className="px-3">Rating</p>
                        </div>
                        <div className="text-center d-block gap-2">
                          {/* <button
                              type="button"
                              id="button-Cors"
                              className="btn btn-outline-primary text-white bg-primary"
                              onClick={() => addToCart(items)}
                            >
                              Add To Cart
                            </button> */}
                          <button
                            type="button"
                            id="button-Cors"
                            className="btn btn-outline-primary mt-3"
                            onClick={() =>
                              navigate("/self-learning-course-details", {
                                state: { items },
                              })
                            }
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
                : null}
            </div>
          </div>
        </div>
        <Pagination />
      </div>
      <Studentalsosearchfor
        h4span="TRENDING"
        h4="Courses"
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
      <Testmonial type="STUDENTS" />
    </>
  );
}
