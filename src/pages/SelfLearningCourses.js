import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Studentalsosearchfor from "../components/Studentalsosearchfor";

import { ToastContainer } from "react-toastify";
import useHttp from "../Hooks/useHttp";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import Testmonial from "../components/Testmonial";
import Pagination from "@mui/material/Pagination";
import Footer from "../components/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RangeSlider } from "rsuite";
import "rsuite/dist/rsuite.css";

export default function SelfLearningCourses() {

  const { PostRequest } = useHttp();
  const [isLoading, setIsLoading] = useState(true);
  const [dataObject, setDataObject] = useState({});
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [topic, setTopic] = useState([]);
  const [language, setLanguage] = useState('');
  const [duration, setDuration] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const API = process.env.REACT_APP_API_URL;
  const prevObjectData = { ...dataObject };

  const myStyle = {
    categoryName: {
      fontWeight: 500,
      border: 0,
      fontSize: "16px",
      color: "#021869",
      cursor: "pointer",
      marginBottom: "20px"
    }
  }

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
      prevObjectData['total_items'] = data?.totalItems;
      prevObjectData['total_pages'] = data?.totalPages;
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
      fetchFilterList();
    }
  }

  //Fetch Filter List
  const fetchFilterList = async () => {
    const { data } = await PostRequest(
      API + "filterList",
      {},
      {
        authorization: "Bearer " + token,
      }
    );
    prevObjectData['filter_list'] = data?.responseData;
    setDataObject(prevObjectData);
    setIsLoading(false);
  }

  //Filter Course By Category
  const filerByCategory = (category) => {
    setSubCategory('');
    setCategory(category);
    filterCourse(1, category, subCategory, topic);
  }

  //Filter Sub Course By Category
  const filerBySubCategory = (subCategory) => {
    setCategory('');
    setSubCategory(subCategory);
    filterCourse(1, category, subCategory, topic);
  }

  //Filter By Topic
  const filterByTopic = async (checked, topicId) => {
    let prevTopic = [...topic];
    if(checked) {
      prevTopic.push(topicId);
    }else {
      prevTopic = prevTopic.filter(item => item !== topicId);
    }
    setTopic(prevTopic);
    filterCourse(1, category, subCategory, topic);
  }

  //Filter Course
  const filterCourse = async (page = 1, category = '', subCategory = '', topic = []) => {
    setIsLoading(true);
    var { data } = await PostRequest(
      API + "getCourses",
      {
        status: "1",
        featured: "",
        popular: "",
        page: page,
        category: category,
        subCategory: subCategory,
        topic: topic
      },
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      prevObjectData['course_list'] = data?.responseData;
      prevObjectData['total_items'] = data?.totalItems;
      prevObjectData['total_pages'] = data?.totalPages;
      prevObjectData['current_page'] = data?.currentPage;
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
          <div className="col-md-2 my-5">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Category
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-0 ">
                    <div className="accordion accordion-flush" id="faqlist">
                      {dataObject.filter_list?.category?.Data.map((items, index) => (
                        items && items.SubCategorys && items.SubCategorys.length ? (
                          <div key={`category-${index}`} className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                onClick={() => { filerByCategory(items._id) }}
                                data-bs-target={`#faq-content-${index}`}
                              >
                                {items.categoryName.toUpperCase()}
                              </button>
                            </h2>
                            <div
                              id={`faq-content-${index}`}
                              className="accordion-collapse collapse"
                              data-bs-parent="#faqlist"
                            >
                              <div className="accordion-body">
                                <ul className="p-0 text-decoration-none list-unstyled">
                                  {items.SubCategorys.map((item, index) => (
                                    <li key={`subCategory-${index}`} className="mb-2">
                                      <a
                                        className="text-muted text-decoration-none"
                                        href="#"
                                        onClick={() => { filerBySubCategory(item._id) }}
                                      >
                                        {item.subcategoryName.toUpperCase()}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <h6 style={myStyle.categoryName} onClick={() => { filerByCategory(items._id) }}>
                            {items.categoryName.toUpperCase()}
                          </h6>
                        )

                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Ratings */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Ratings
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-0 px-1">
                    <div className="paddingleft">
                      <input
                        className="form-check-input shadow-none"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        <div className="d-flex">
                          <img src="img/fullstar.svg" alt="." />
                          <img src="img/fullstar.svg" alt="." />
                          <img src="img/fullstar.svg" alt="." />
                          <img src="img/fullstar.svg" alt="." />
                          <img src="img/blankstar.svg" alt="." />
                          <span className="startext px-2">4.0 & up</span>
                        </div>
                      </label>
                    </div>
                    <div className="paddingleft">
                      <input
                        className="form-check-input shadow-none"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        <div className="d-flex">
                          <img src="img/fullstar.svg" alt="." />
                          <img src="img/fullstar.svg" alt="." />
                          <img src="img/fullstar.svg" alt="." />
                          <img src="img/fullstar.svg" alt="." />
                          <img src="img/blankstar.svg" alt="." />
                          <span className="startext px-2">3.0 & up</span>
                        </div>
                      </label>
                    </div>
                    <div className="paddingleft">
                      <input
                        className="form-check-input shadow-none"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckChecked2"
                      />
                      <label className="form-check-label" htmlFor="flexCheckChecked2">
                        <div className="d-flex">
                          <img src="img/fullstar.svg" alt="." />
                          <img src="img/fullstar.svg" alt="." />
                          <img src="img/fullstar.svg" alt="." />
                          <img src="img/fullstar.svg" alt="." />
                          <img src="img/blankstar.svg" alt="." />
                          <span className="startext px-2">2.0 & up</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* topic */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Topic
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-0 px-1">
                    {dataObject.filter_list?.Topics?.Data.map((items, index) => (
                      <div key={index} className="paddingleft">
                        <input
                          className="form-check-input shadow-none"
                          type="checkbox"
                          defaultValue={items._id}
                          id={`topic-id-${items._id}`}
                          checked={topic.includes(items._id) ? true : false}
                          onChange={(e)=>filterByTopic(e.target.checked,items._id)}
                        />
                        <label className="form-check-label" htmlFor={`topic-id-${items._id}`}>
                          <div className="d-flex">
                            <span className="startext px-2">
                              {items.TopicsName.toUpperCase()}
                            </span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* language */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingfour">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefour"
                    aria-expanded="false"
                    aria-controls="collapsefour"
                  >
                    Language
                  </button>
                </h2>
                <div
                  id="collapsefour"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingfour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-0 px-1">
                    {dataObject.filter_list?.language?.Data.map((items, index) => (
                      <div key={index} className="paddingleft">
                        <input
                          className="form-check-input shadow-none"
                          type="checkbox"
                          defaultValue={items._id}
                          id={`language-id-${items._id}`}
                        />
                        <label className="form-check-label" htmlFor={`language-id-${items._id}`}>
                          <div className="d-flex">
                            <span className="startext px-2">
                              {items.languageName.toUpperCase()}
                            </span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Duration */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingfive">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefive"
                    aria-expanded="false"
                    aria-controls="collapsefive"
                  >
                    Duration
                  </button>
                </h2>
                <div
                  id="collapsefive"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingfive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-0 px-1">
                    <div className="paddingleft">
                      <input
                        className="form-check-input shadow-none"
                        type="checkbox"
                        defaultValue=""
                        id="first-hour"
                      />
                      <label className="form-check-label" htmlFor="first-hour">
                        <div className="d-flex">
                          <span className="startext px-2">4-6 hours</span>
                        </div>
                      </label>
                    </div>
                    <div className="paddingleft">
                      <input
                        className="form-check-input shadow-none"
                        type="checkbox"
                        defaultValue=""
                        id="second-hour"
                      />
                      <label className="form-check-label" htmlFor="second-hour">
                        <div className="d-flex">
                          <span className="startext px-2">2-4 hours</span>
                        </div>
                      </label>
                    </div>
                    <div className="paddingleft">
                      <input
                        className="form-check-input shadow-none"
                        type="checkbox"
                        defaultValue=""
                        id="third-hour"
                      />
                      <label className="form-check-label" htmlFor="third-hour">
                        <div className="d-flex">
                          <span className="startext px-2">0-2 hours</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* price */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingfive">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefive"
                    aria-expanded="false"
                    aria-controls="collapsefive"
                  >
                    Price
                  </button>
                </h2>
                <div
                  id="collapsefive"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingfive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-0 px-1">
                    <RangeSlider defaultValue={[0, 50]} min={0} max={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-10 ps-5">
            <div className="Choose-a-subject my-5">
              <h3>
                What You want to <span>LEARN</span>
              </h3>
            </div>
            <div className="row px-3">
              <div className="col-md-5 border rounded px-2 py-2 d-flex bordercol shadow">
                <img alt="img" className="px-3" src="img/search-icon.svg" />
                <form className="w-100">
                  <input
                    className="border-0 w-100"
                    type="text"
                    placeholder="Search Course"
                  />
                </form>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-3">
                <select
                  className="form-control shadow-none w-100"
                  aria-label="Small select example" defaultValue="1"
                >
                  <option value={1}>Sort By : Most Popular</option>
                  <option value={2}>One</option>
                  <option value={3}>Two</option>
                  <option value={4}>Three</option>
                </select>
              </div>
            </div>
            <div className="row mt-5 d-flex">
              {dataObject && dataObject.course_list && dataObject.course_list.length > 0
                ? dataObject.course_list.map((item, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <div className="box-Corse-Duration course-card">
                        <h3>{item.title}</h3>
                        <p className="mt-2">{item.about.length > 70 ? item.about.substring(0, 70) : item.about}</p>
                        <div className="d-flex mt-2">
                          <img
                            alt="img"
                            src="img/Group 2411.svg"
                            id="img-Duration"
                            className="rounded float-start"
                          />
                          <p>Course Duration : {item.courseDuration} Min </p>
                        </div>
                        <div className="d-flex mt-2">
                          <img
                            alt="img"
                            src="img/Group 3099.svg"
                            id="img-Duration"
                            className="rounded float-start"
                          />
                          <p>Course Fees : ₹ {item.courseFee}</p>
                        </div>
                        <div className="d-flex mt-2">
                          <img
                            alt="img"
                            src="img/instructor.svg"
                            id="img-Duration"
                            className="rounded float-start"
                          />
                          <p>Instructor : {item.userId.name}</p>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                          <div className="Star2">
                            <img alt="img" src="../img/Star 2.svg" />
                            <img alt="img" src="../img/Star 2.svg" />
                            <img alt="img" src="../img/Star 2.svg" />
                            <img alt="img" src="../img/Star 2.svg" />
                            <img alt="img" src="../img/Star 5.svg" />
                          </div>
                          <p className="px-3">Rating</p>
                        </div>
                        <div className="text-center d-block gap-2 mt-2">
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
                                state: { item },
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
                : (
                  <>
                    <img src="../img/no-data.svg" alt="No Data Found" style={{ width: "40%", margin: "auto" }} />
                  </>
                )}
            </div>
            <div className="row mt-3">
              {dataObject && dataObject.course_list && dataObject.course_list.length > 0 ? (
                <Pagination onChange={(_, page) => { filterCourse(page) }} count={dataObject && dataObject.total_pages} page={dataObject && dataObject.current_page} color="primary" shape="rounded" />
              ) : ''}
            </div>
          </div>
        </div>
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
