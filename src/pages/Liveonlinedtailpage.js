import React, { useEffect, useState } from "react";

import Coursefilter from "../components/Coursefilter";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination/Pagination";
import useHttp from "../Hooks/useHttp";
const API = process.env.REACT_APP_API_URL;
export default function Liveonlinedtailpage() {
  const token = localStorage.getItem("token");
  const { PostRequest } = useHttp();
  const navigate = useNavigate();
  const [Course, setCourse] = useState([]);
  const [filter] = useState({
    status: "1",
    featured: "",
    popular: "",
    courseType: "2",
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
      <div className="container">
        <div className="row">
          <div className="Choose-a-subject text-center my-5">
            <h3>
              Choose a <span className="span">SUBJECT</span> to find your live
              class
            </h3>
          </div>
          <div id="alignment">
            <div className="box-All-Courses">All Courses</div>
            <div className="box-All-Courses">Cloud Computing</div>
            <div className="box-All-Courses">Ai</div>
            <div className="box-All-Courses">Data Science</div>
            <div className="box-All-Courses">Cyber Security</div>

            <div className="box-All-Courses">Programing</div>
            <div className="box-All-Courses">Cloud Computing</div>
            <div className="box-All-Courses">Ai</div>
            <div className="box-All-Courses">Data Science</div>
            <div className="box-All-Courses">Cyber Security</div>

            <div className="box-All-Courses">Other</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="Courses col-md-6 my-5">
              <h2>100 Courses</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
          </div>
          <div className="col-md-3 my-5" id="select-one">
            <div className="d-flex justify-content-end">
              <select
                className="form-select form-select-sm w-75"
                aria-label="Small select example"
              >
                <option selected>Sort By : Most Popular</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Coursefilter />
          </div>
          <div className="col-md-9">
            <div className="row mt-5 self-learning-courses">
              {Course &&
                Course.map((items, index) => (
                  <div key={index} className="mb-3">
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
                      <div className="d-flex mt-2 mb-3">
                        <img
                          alt="img"
                          src="img/Group 3099.svg"
                          id="img-Duration"
                          className="rounded float-start"
                        />
                        <p>Corse Fees : ${items.courseFee}</p>
                      </div>
                      <div className="text-center">
                        <button
                          type="button"
                          id="button-Cors"
                          className="btn btn-outline-primary"
                          onClick={() =>
                            navigate("/live-online-course-details", {
                              state: { items },
                            })
                          }
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}
