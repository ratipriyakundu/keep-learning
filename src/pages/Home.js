import React, { useEffect, useState, useContext } from "react";
import Testmonial from "../components/Testmonial";
import Courses from "../components/Courses";
import useHttp from "../Hooks/useHttp";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";
import {DataContext} from "../App"; 
const HOME = process.env.REACT_APP_HOME;
const API = process.env.REACT_APP_API_URL;
export default function Home() {
  const token = localStorage.getItem("token");

  const { PostRequest } = useHttp();
  const [courseLoading, setCourseLoading] = useState(false);
  const [coursesData, setCoursesData] = useState({});
  const [CallAPI, setCallAPI] = useState(false);
  const [filter, setFilter] = useState({
    status: "1",
    featured: "",
    popular: "",
    page: 1,
  });
  const dataObject = useContext(DataContext);
  const getCourses = async () => {
    setCourseLoading(true);
    if (token) {
      const { data } = await PostRequest(API + "getCourses", filter, {
        authorization: "Bearer " + token,
      });
      if (data?.responseCode === 1) {
        setTimeout(function (){
          setCoursesData(data?.responseData);
          setCourseLoading(false);
        }, 1000);
      }
    } else {
      const { data } = await PostRequest(API + "getCourses", filter, {});
      if (data?.responseCode === 1) {
        setTimeout(function (){
          setCoursesData(data?.responseData);
          setCourseLoading(false);
        }, 1000);
      }
    }
  };
  useEffect(() => {
    getCourses();
  }, [filter, CallAPI]);
  console.log(dataObject)
  return (
    <>
      {/* <!-- main content --> */}
      <div className="main-content ">
        {/* <!-- slider --> */}
        <div
          className="banner-slider"
          style={{
            backgroundImage: `url(${dataObject.home_banner && process.env.REACT_APP_HOME+dataObject.home_banner['image']})`,
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-4 Frame">
                <img src={dataObject.home_banner && process.env.REACT_APP_HOME+dataObject.home_banner['logo']} alt="img" />
              </div>
              <div className="col-5 Frame-content">
                <div className="content">
                  <h2>{dataObject.home_banner && dataObject.home_banner['title']}</h2>
                  <p>{dataObject.home_banner && dataObject.home_banner['description']}</p>
                  {/* <!-- get start button --> */}
                  <a href="/" className="btn mt-5 getstartbtn">
                    GET STARTED
                  </a>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
        {/* <!-- learning platform strength --> */}
        <section className="platform-strength">
          <div className="container">
            <div className="main-content2">
              <h2>
                The learning platform with
                <span className="ps-1" style={{ color: "#021869" }}>
                  smarts,
                  <br /> strength
                </span>
                , and
                <span style={{ color: "#021869" }}> style</span>
              </h2>
              <p>
                We are unlike any learning platform. Our intuitive interface and
                innovative technology helps millions of L&D professionals,
                educators, trainers, teachers, HR leaders, and course creators -
                bring out the best in themselves and their learners, everyday.
              </p>
            </div>
            <div className="image-box">
              <div className="row mt-5 " id="inner-img-box">
                <div className="col-md-3 d-flex ">
                  <img src="img/dimond.svg" alt="dimond" />
                  <div className="box-content px-3">
                    <h3>00000</h3>
                    <p>Online Courses</p>
                  </div>
                </div>
                <div className="col-md-3 d-flex ">
                  <img src="img/dimond.svg" alt="dimond" />
                  <div className="box-content px-3">
                    <h3>00000</h3>
                    <p>Expert Instructors</p>
                  </div>
                </div>
                <div className="col-md-3 d-flex ">
                  <img src="img/dimond.svg" alt="dimond" />
                  <div className="box-content px-3">
                    <h3>Unlimited</h3>
                    <p>Course Access</p>
                  </div>
                </div>
                <div className="col-md-3 d-flex ">
                  <img src="img/dimond.svg" alt="dimond" />
                  <div className="box-content px-3">
                    <h3>Learn</h3>
                    <p>From Anywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- klit  --> */}
        <section className="klit mt-0">
          <div className="container">
            <p className="text-center">Hey, let’s show you around</p>
            <div className="main-content2">
              <h2 className="py-3">
                <span style={{ color: "#021869" }}>Tour </span> the KLIT
                <span style={{ color: "#021869" }}> modern</span> learning
                platform
              </h2>
            </div>
            {/* <!-- Klit image box --> */}
            <div className="row mt-5 pt-5">
              <div className="col-md-4 mt-5 mb-3 ">
                <div className="card customcard text-center border-0 pt-5 m-3">
                  <div className="text-center img">
                    <img
                      className="pt-3"
                      src="img/Self-paced Courses.svg"
                      width="80%"
                      alt="img"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Self-paced Courses</h4>
                    <p>
                      The modern learning platform for L&D pros like HR,
                      trainers, instructional designers, and managers in
                      businesses that need training, up-skilling, employee
                      performance, on-boarding, trainer productivity,compliance,
                      and more.
                    </p>
                  </div>
                  <a href="/" className="text-center readmorebtn">
                    Know more
                    <img className="px-3" src="img/Arrow 1.png" alt="img" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 mt-5 mb-4  ">
                <div className="card customcard text-center border-0 pt-5 m-3">
                  <div className="text-center img">
                    <img
                      className="pt-3"
                      src="img/image 3.svg"
                      alt="img"
                      width="80%"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Be instructor</h4>
                    <p>
                      The modern learning platform for L&D pros like HR,
                      trainers, instructional designers, and managers in
                      businesses that need training, up-skilling, employee
                      performance, on-boarding, trainer productivity,
                      compliance, and more.
                    </p>
                  </div>
                  <a href="/" className="text-center readmorebtn">
                    Know more
                    <img className="px-3" src="img/Arrow 1.png" alt="img" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 mt-5  ">
                <div className="card customcard text-center border-0 pt-5 m-3">
                  <div className="text-center img">
                    <img
                      className="pt-3"
                      src="img/image 4.svg"
                      width="80%"
                      alt="img"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Live Online Class</h4>
                    <p>
                      The modern learning platform for L&D pros like HR,
                      trainers, instructional designers, and managers in
                      businesses that need training, up-skilling, employee
                      performance, on-boarding, trainer productivity,
                      compliance, and more.
                    </p>
                  </div>
                  <a href="/" className="text-center readmorebtn">
                    Know more
                    <img className="px-3" src="img/Arrow 1.png" alt="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- The modern learning platform --> */}
        <section
          className="becomeinstructor mb-5 pt-3 pb-5"
          style={{ backgroundColor: "#021969" }}
        >
          <div className="container">
            <div className="row cnt2">
              <div className="col-md-8 cntcontent">
                <h2>
                  The modern <span>learning</span> platform
                </h2>
                <p>
                  keep learning is leading the necessary disruption of learning
                  platforms to unleash human potential with modern learning.
                  Learn more about the history of our platform that makes it
                  easy for schools, businesses, and individuals to create and
                  deliver the best learning experiences.
                </p>
                {/* <!-- get start button --> */}
                <a href="/" className="btn mt-4 getstartbtn">
                  GET STARTED
                </a>
              </div>
              <div className="col-md-4" id="thumbs-up">
                <img src="img/platform.svg" alt="img" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- We're here to help you building your career --> */}
        <section className="building-your-career">
          <div className="container">
            <div className="row">
              <h3>
                We're here to help you building your <span> CAREER </span>
              </h3>
              <p>Just enroll our courses and boost your career in no time</p>
            </div>
            <div className="row">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item2" role="presentation">
                  <button
                    onClick={() =>
                      setFilter({
                        status: "1",
                        featured: "",
                        popular: "",
                        page: 1,
                      })
                    }
                    className="nav-link2 active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    New Course
                  </button>
                </li>
                <li className="nav-item2" role="presentation">
                  <button
                    onClick={() =>
                      setFilter({
                        status: "1",
                        featured: "1",
                        popular: "",
                        page: 1,
                      })
                    }
                    className="nav-link2"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Featured Courses
                  </button>
                </li>
                <li className="nav-item2" role="presentation">
                  <button
                    onClick={() =>
                      setFilter({
                        status: "1",
                        featured: "",
                        popular: "1",
                        page: 1,
                      })
                    }
                    className="nav-link2"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    Popular Courses
                  </button>
                </li>
              </ul>
              {courseLoading ? (
                <Loader />
              ) : (
                <>
                  <div className="tab-content" id="myTabContent">
                    {/* new Cources data */}
                    <div
                      className="tab-pane fade show active mt-0"
                      id="home-tab-pane"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                      tabIndex="0"
                    >
                      <Courses
                        CallAPI={CallAPI}
                        setCallAPI={setCallAPI}
                        coursesData={coursesData}
                      />
                    </div>

                    {/* featured Cources data */}
                    <div
                      className="tab-pane fade"
                      id="profile-tab-pane"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                      tabIndex="0"
                    >
                      <Courses
                        CallAPI={CallAPI}
                        setCallAPI={setCallAPI}
                        coursesData={coursesData}
                      />
                    </div>
                    {/* Popular Cources data */}
                    <div
                      className="tab-pane fade"
                      id="contact-tab-pane"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                      tabIndex="0"
                    >
                      <Courses
                        CallAPI={CallAPI}
                        setCallAPI={setCallAPI}
                        coursesData={coursesData}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-5 text-center">
            <Link
              to="/Selflearningdtailpage"
              type="button"
              className="btn btn-custom"
            >
              See All Courses
            </Link>
          </div>
        </section>
        {/* <!-- We're here to help you building your career end -->
        <!-- Expand Your Knowledge --> */}
        <section className="Expand-Your-Knowledge">
          <div className="container">
            <div className="row">
              <h3>
                Expand Your <span>KNOWLEDGE </span>& Achieve Your
                <span> GOAL</span>
              </h3>
              <p>Just enroll our courses and boost your career in no time</p>
              <div className="expand-section">
                <div className=" mt-5">
                  <div className="text-center">
                    <img
                      src="img/engineering-svgrepo-com 1.svg"
                      className="rounded"
                      alt="img"
                      style={{ width: "20%" }}
                    />
                    <h5 className="mt-3">Web Development</h5>
                    <h6>Over 100 Courses</h6>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="text-center">
                    <img
                      src="img/engineering-svgrepo-com 1.svg"
                      className="rounded"
                      alt="img"
                      style={{ width: "20%" }}
                    />
                    <h5 className="mt-3">Web Development</h5>
                    <h6>Over 100 Courses</h6>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="text-center">
                    <img
                      src="img/engineering-svgrepo-com 1.svg"
                      className="rounded"
                      alt="img"
                      style={{ width: "20%" }}
                    />
                    <h5 className="mt-3">Web Development</h5>
                    <h6>Over 100 Courses</h6>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="text-center">
                    <img
                      src="img/engineering-svgrepo-com 1.svg"
                      className="rounded"
                      alt="..."
                      style={{ width: "20%" }}
                    />
                    <h5 className="mt-3">Web Development</h5>
                    <h6>Over 100 Courses</h6>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="text-center">
                    <img
                      src="img/engineering-svgrepo-com 1.svg"
                      className="rounded"
                      alt="..."
                      style={{ width: "20%" }}
                    />
                    <h5 className="mt-3">Web Development</h5>
                    <h6>Over 100 Courses</h6>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="text-center">
                    <img
                      src="img/engineering-svgrepo-com 1.svg"
                      className="rounded"
                      alt="..."
                      style={{ width: "20%" }}
                    />
                    <h5 className="mt-3">Web Development</h5>
                    <h6>Over 100 Courses</h6>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="text-center">
                    <img
                      src="img/engineering-svgrepo-com 1.svg"
                      className="rounded"
                      alt="..."
                      style={{ width: "20%" }}
                    />
                    <h5 className="mt-3">Web Development</h5>
                    <h6>Over 100 Courses</h6>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="text-center">
                    <img
                      src="img/engineering-svgrepo-com 1.svg"
                      className="rounded"
                      alt="..."
                      style={{ width: "20%" }}
                    />
                    <h5 className="mt-3">Web Development</h5>
                    <h6>Over 100 Courses</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Expand Your Knowledge end -->
        <!-- Our vision --> */}
        <div className="container ">
          <div className="row" id="about-3">
            <div className="col-md-6 mt-5 mb-5">
              <div className="text-center">
                <img
                  src="img/mission 2.svg"
                  className="rounded"
                  alt="..."
                  style={{ width: "20%" }}
                />
              </div>
              <p>
                Our mission is to power learning experiences that connect people
                to their purpose and potential
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <div className="text-center">
                <img
                  src="img/vision 3.png"
                  className="rounded"
                  alt="..."
                  style={{ width: "20%" }}
                />
              </div>
              <p>
                Our vision is to ignite lifelong passions through personalized,
                engaging, and limitless learning experiences for all.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Our vision end -->
        <!-- Why-klit --> */}
        <div className="Why-klit">
          <div className="container">
            <div className="row mb-5" id="about-4">
              <h2 className="mb-4">
                Why <span>KLIT</span> ?
              </h2>
              <p className="mb-5">
                We believe in fostering a holistic and dynamic workplace
                <br /> where you can create, innovate and thrive!
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-md-1"></div>
              <div className="col-md-5 main-klit">
                <div className="row">
                  <div className="col-md-3 klit-section">
                    <div className="text-center">
                      <img
                        src="img/Frame 40.png"
                        className="rounded"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="text-b col-md-9 center-content">
                    <h5>Employee-friendly policies</h5>
                    <p>
                      Lorem ipsum dolor sit amet,consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 ">
                <div className="row">
                  <div className="col-md-3 klit-section">
                    <div className="text-center">
                      <img
                        src="img/Group 86.svg"
                        className="rounded"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="text-b col-md-9 center-content">
                    <h5>Employee-friendly policies</h5>
                    <p>
                      Lorem ipsum dolor sit amet,consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>

            <div className="row mt-5">
              <div className="col-md-1"></div>
              <div className="col-md-5">
                <div className="row">
                  <div className="col-md-3 klit-section">
                    <div className="text-center">
                      <img
                        src="img/Frame 42.png"
                        className="rounded"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="text-b col-md-9 center-content">
                    <h5>Employee-friendly policies</h5>
                    <p>
                      Lorem ipsum dolor sit amet,consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="row">
                  <div className="col-md-3 klit-section">
                    <div className="text-center">
                      <img
                        src="img/Frame 43.png"
                        className="rounded"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="text-b col-md-9 center-content">
                    <h5>Employee-friendly policies</h5>
                    <p>
                      Lorem ipsum dolor sit amet,consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
        {/* <!-- Why-klit end -->  */}
        <Testmonial type="LEARNERS" />
        {/* <!-- Become an instructor at klit --> */}
        <section className="becomeinstructor becomeinstructor-main">
          <div className="container">
            <div className="row cnt">
              <div className="col-md-8 cntcontent">
                <h2>Become an instructor at kLIT</h2>
                <p>
                  Join one of the world’s largest online learning marketplaces.
                  <br />
                  Get started
                </p>
                {/* <!-- get start button --> */}
                <a href="/" className="btn mt-4 getstartbtn">
                  Apply Now
                </a>
              </div>
              <div className="col-md-4" id="center-img">
                <img src="img/bfrem-logo.svg" alt="img" width="60%" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
