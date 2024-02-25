import React from "react";

const EditLiveCourse = () => {
  const myStyle = {
    input: {
      height: "auto",
      width: "30%",
      margin: "5px",
    },
    button: {
      height: "20px",
      width: "30px",
      fontSize: "60%",
      padding: "2px",
      margin: "2px",
      borderRadius: "3px",
    },
  };
  return (
    <>
      <div className="row w-100">
        <form>
          <div className="d-flex flex-column align-items-start">
            <h5 className="Course-Title">Course Title</h5>
            <div className="w-100">
              <div className="col-md-12">
                <label className="Add-response-text">
                  You must enter at least 4 responses
                </label>
                <br />
                <input
                  type="text"
                  id="Add-response"
                  name=""
                  placeholder="Add response"
                />
                <p className="Add-more-responses">+Add more responses</p>
              </div>
            </div>

            <h5 className="About-Course">About Course</h5>
            <div className="w-100">
              <div className="col-md-12">
                <label className="Add-response-text">
                  You must enter at least 4 responces
                </label>
                <br />
                <input
                  type="text"
                  id="Add-response"
                  name=""
                  placeholder="Add response"
                />
                <p className="Add-more-responses">+Add more responses</p>
              </div>
            </div>

            <h5 className="About-Course">Course Content</h5>
            <div className="w-100">
              <div className="col-md-12">
                <label className="Add-response-text">
                  You must enter at least 4 responces
                </label>
                <br />
                <input
                  className="mt-2"
                  type="text"
                  id="Add-response"
                  name=""
                  placeholder="Add response"
                />
                <input
                  className="mt-2"
                  type="text"
                  id="Add-response"
                  name=""
                  placeholder="Add response"
                />
                <input
                  className="mt-2"
                  type="text"
                  id="Add-response"
                  name=""
                  placeholder="Add response"
                />
                <input
                  className="mt-2"
                  type="text"
                  id="Add-response"
                  name=""
                  placeholder="Add response"
                />
                <p className="Add-more-responses">+Add more responses</p>
              </div>
            </div>
            <h5 className="About-Course">
              What will students learn in your course?
            </h5>
            <div className="w-100">
              <div className="col-md-12">
                <label className="Add-response-text">
                  You must enter at least 4 responces
                </label>
                <br />
                <input
                  className="mt-2"
                  type="text"
                  id="Add-response"
                  name=""
                  placeholder="Add response"
                />
                <input
                  className="mt-2"
                  type="text"
                  id="Add-response"
                  name=""
                  placeholder="Add response"
                />
                <input
                  className="mt-2"
                  type="text"
                  id="Add-response"
                  name=""
                  placeholder="Add response"
                />
                <input
                  className="mt-2"
                  type="text"
                  id="Add-response"
                  name=""
                  placeholder="Add response"
                />
                <p className="Add-more-responses">+Add more responses</p>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4">
              <div>
                <h5 className="About-Course">Course Image</h5>
                <input
                  type="file"
                  id="Add-response"
                  name=""
                  placeholder="Add response"
                />
              </div>
              <h5 className="About-Course">Upload url</h5>
              <div className="w-100">
                <div className="col-md-12">
                  <label className="Add-response-text">
                    You must enter at least 4 responces
                  </label>
                  <br />
                  <input
                    type="file"
                    id="Add-response"
                    name=""
                    placeholder="Add response"
                  />
                  <p className="Add-more-responses">+Add more video</p>
                </div>
              </div>

              <h5 className="About-Course">Language</h5>
              <div className="w-100">
                <div className="col-md-12">
                  <label className="Add-response-text">
                    You must enter at least 4 responces
                  </label>
                  <br />
                  <input
                    type="text"
                    id="Add-response"
                    name=""
                    placeholder="Add Language"
                  />
                  <p className="Add-more-responses">+Add more </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-14">
                <div className="col-md-12">
                  <label className="Add-response-text">
                    You must enter at least 4 responces
                  </label>
                  <br />
                  <input
                    type="text"
                    id="Add-response"
                    name=""
                    placeholder="Add Comment"
                  />
                  <p className="Add-more-responses">+Add more video</p>
                </div>
              </div>
              <h5 className="About-Course">Date & Time</h5>
              <div className="w-100">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-5">
                      <label>Enter Date</label>
                      <br />
                      <input
                        type="text"
                        id="Add-response"
                        name=""
                        placeholder="dd/mm/yy"
                      />
                    </div>
                    <div className="col-md-7">
                      <label htmlFor="">Enter Time</label>
                      <div className="row d-flex">
                        <div className="col-md-8  ">
                          <input
                            style={myStyle.input}
                            className="text-center "
                            type="text"
                            id="Add-response"
                            name=""
                            placeholder="00"
                          />
                          <span>:</span>
                          <input
                            style={myStyle.input}
                            className="text-center "
                            type="text"
                            id="Add-response"
                            name=""
                            placeholder="00"
                          />
                        </div>
                        <div className="col-md-4 d-flex flex-column">
                          <button style={myStyle.button}>AM</button>
                          <button style={myStyle.button}>PM</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="About-Course">Category</h5>
              <div className="d-flex ">
                <select
                  className="form-select mt-3 mb-3"
                  style={{ width: "50%" }}
                  aria-label="Default select example"
                >
                  <option selected>Add Category</option>
                  <option defaultValue="1">One</option>
                  <option defaultValue="2">Two</option>
                  <option defaultValue="3">Three</option>
                </select>
                <select
                  className="form-select mt-3 mb-3"
                  style={{ width: "50%" }}
                  aria-label="Default select example"
                >
                  <option selected>Add Subcategory</option>
                  <option defaultValue="1">One</option>
                  <option defaultValue="2">Two</option>
                  <option defaultValue="3">Three</option>
                </select>
              </div>
              <select
                className="form-select mt-3 mb-3"
                style={{ width: "50%" }}
                aria-label="Default select example"
              >
                <option selected>Add Topic</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
            </div>

            <div className="publish-courses1">
              <button type="submit" id="publish-courses" className="btn mb-3">
                PUBLISH COURSES
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditLiveCourse;
