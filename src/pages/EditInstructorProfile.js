import React from "react";
import { Link } from "react-router-dom";
// import profile from "../../src/"

export default function EditInstructorProfile() {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="d-flex align-items-start">
            <div
              className="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                My profile
              </button>
              <button
                className="nav-link"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Courses
              </button>
              <button
                className="nav-link"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Notification
              </button>
              <button
                className="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Performance
              </button>
              <button
                className="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Account Setting
              </button>
              <button
                className="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Help
              </button>
              <button
                className="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Logout
              </button>
            </div>
            <div className="p-3 w-100">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    <div className="col-md-3">
                      <div className="profile1-2">
                        <div className="text-center">
                          <input type="file" className="d-none" id="" />
                          <img
                            src="#"
                            id="profile1-1"
                            className=" border p-5"
                            width="100px"
                            height="100px"
                            alt="img"
                          />
                          <Link className="text-decoration-none" to="#">
                            <p className="edit-profile">Upload Profile</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <form className="mainform2">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              type="text"
                              id="name-1"
                              name="name"
                              placeholder="Name*"
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              id="name-2"
                              name="name"
                              placeholder="Last Name*"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              type="email"
                              id="email-1"
                              name="email"
                              placeholder="E-mail *"
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="number"
                              id="number-1"
                              name="number"
                              placeholder="Contact Number"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="d-flex">
                            <div className="" id="file-3">
                              <label className="aa">Upload resume</label>
                              <input type="file" name="" placeholder="" />
                            </div>
                            <div className="or">or</div>
                            <div className="" id="file-4">
                              <label className="aa">About Yourself</label>
                              <input type="text" name="" placeholder="" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              type="number"
                              id="Qualification"
                              name=""
                              placeholder="Qualification*"
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="number"
                              id="experience"
                              name=""
                              placeholder="Teaching Experience"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <input
                              type="text"
                              id="what-you"
                              name=""
                              placeholder="What you are going to teach ? "
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6" id="file-1">
                            <label className="aa">
                              Upload demo video of 30 min
                            </label>
                            <input type="file" name="" placeholder="" />
                          </div>
                          <div className="col-md-6" id="file-2">
                            <label className="aa">
                              Upload demo course content as pdf/word file format
                            </label>
                            <input type="file" name="" placeholder="" />
                          </div>
                        </div>
                        <br />
                        <div className="text-end">
                          <button
                            type="submit"
                            id="button-p"
                            className="btn btn-primary rounded px-5"
                          >
                            UPDATE
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <form action="add-self-learning-course.html">
                    <div className="row px-5" id="search">
                      <div className="col-6 border rounded px-3 p-1 d-flex bordercol">
                        <img
                          alt="img"
                          className="px-3"
                          src="/img/search-icon.svg"
                        />
                        <input
                          className="border-0 w-100"
                          type="text"
                          placeholder="Search Your Course"
                        />
                      </div>
                      <div className="col-6">
                        <input
                          type="submit"
                          name="searchcourses"
                          className="p-1 px-4 addtocources"
                          defaultValue="ADD NEW COURCES"
                        />
                      </div>
                    </div>
                  </form>
                  <div className="row mt-5 w-100 px-5">
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link2 active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Self-learning Courses
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link2"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Live Online Class
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        {/* <!-- cources loop --> */}
                        <div className="row mt-3">
                          <div className="box-78 col-md-5">
                            <img
                              alt="img"
                              width="100%"
                              height="auto"
                              src="./img/learnphp.svg"
                            />
                          </div>
                          <div className="col-md-6" id="courcesdt">
                            <Link
                              className="text-decoration-none"
                              to="detail.html"
                            >
                              <h2>Learn PHP Programming From Scratch</h2>
                            </Link>

                            <div className="Ratings-a d-flex mt-4">
                              <img
                                alt="img"
                                src="img/Vector.svg"
                                id="image-Vector"
                                className="rounded float-start"
                              />
                              <h6 className="">00 students</h6>
                              <div className="Star">
                                <img src="img/Star 2.svg" alt="img" />
                                <img src="img/Star 2.svg" alt="img" />
                                <img src="img/Star 2.svg" alt="img" />
                                <img src="img/Star 2.svg" alt="img" />
                                <img src="img/Star 5.svg" alt="img" />
                              </div>
                              <h6>Ratings</h6>
                            </div>

                            <div className="progress mt-3" id="ppbar">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "40%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <p className="pt-2">40% completed</p>
                            <Link to="" className="btn btn-custom mt-4">
                              EDIT COURSE
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        {/* <!-- cources loop --> */}
                        <div className="row mt-3">
                          <div className="box-78 col-md-5">
                            <img
                              alt="img"
                              width="100%"
                              height="auto"
                              src="./img/learnphp.svg"
                            />
                          </div>
                          <div className="col-md-6" id="courcesdt">
                            <Link
                              className="text-decoration-none"
                              to="detail.html"
                            >
                              <h2>Learn PHP Programming From Scratch</h2>
                            </Link>

                            <div className="Ratings-a d-flex mt-4">
                              <img
                                alt="img"
                                src="img/Vector.svg"
                                id="image-Vector"
                                className="rounded float-start"
                              />
                              <h6>00 students</h6>
                              <h6 className="mx-4">DD/MM/YY</h6>
                              <h6>00:00 am/pm</h6>
                            </div>

                            <div className="progress mt-3" id="ppbar">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "40%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <p className="pt-2">40% completed</p>
                            <Link to="#" className="btn btn-custom mt-4">
                              EDIT COURSE
                            </Link>
                            <Link to="#" className="btn btn-custom mt-4 mx-4">
                              GO LIVE
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  hi
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
