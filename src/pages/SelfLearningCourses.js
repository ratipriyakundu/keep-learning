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
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import Testmonial from "../components/Testmonial";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function SelfLearningCourses() {

  const { PostRequest } = useHttp();
  const [isLoading, setIsLoading] = useState(true);
  const [dataObject, setDataObject] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const API = process.env.REACT_APP_API_URL;
  const prevObjectData = { ...dataObject };

  //Fetch All Settings
  const fetchSettings = async () => {
    var { data } = await PostRequest(
      API + "allSettings",
      {},
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      data?.responseData.filter((item) => {
        prevObjectData['' + item.name + ''] = item.value;
      })
      setDataObject(prevObjectData);
      fetchCourse();
    }
  }
  //Fetch Courses
  const fetchCourse = async () => {
    var { data } = await PostRequest(
      API + "getCourses",
      {
        status: "1",
        featured: "",
        popular: "",
        page: 1,
      },
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      prevObjectData['course_list'] = data?.responseData;
      setDataObject(prevObjectData);
      fetchTestimonial();
    }
  }
  //Fetch Testimonials
  const fetchTestimonial = async () => {
    var { data } = await PostRequest(
      API + "getTestimonials",
      {
        status: "1"
      },
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      prevObjectData['testimonials'] = data?.responseData;
      setDataObject(prevObjectData);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  return isLoading === true ? <Loader /> : (
    <>
      <GoogleOAuthProvider clientId="752198572885-4g2el7a6670gkj9ed1qtdhltt56hnn3t.apps.googleusercontent.com">
        <Header data={dataObject} />
      </GoogleOAuthProvider>
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
              {dataObject && dataObject.course_list && dataObject.course_list.length > 0
                ? dataObject.course_list.map((items, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <div className="box-Corse-Duration">
                        <h3>{items.title}</h3>
                        <p>{items.about.length > 70 ? items.about.substring(0,70) : items.about}</p>
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
                          <p>Corse Fees : ₹ {items.courseFee}</p>
                        </div>
                        <div className="d-flex mt-2 mb-0">
                          <img
                            alt="img"
                            src="img/instructor.svg"
                            id="img-Duration"
                            className="rounded float-start"
                          />
                          <p>Instructors : {items.userId.name}</p>
                        </div>
                        <div className="d-flex align-items-center mt-2">
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
        courses={dataObject.course_list}
      />
      <Testmonial type="STUDENTS" testimonials={dataObject.testimonials} />
      <Footer data={dataObject} />
    </>
  );
}
