import React from "react";

export default function InstructorProfileConfirmed() {
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
                    <div className="col-md-5">
                      <div className="profile1-5">
                        <div className="text-center">
                          <img
                            alt="img"
                            src="img/profile1 1.svg"
                            id="profile1-1"
                          />
                          <p className="mt-4">
                            {" "}
                            Name Last name
                            <br />
                            <span>(Qualification)</span>
                          </p>
                          <hr />
                          <p>abct@gmail.com</p>
                          <hr />
                          <p style={{ fontSize: "14px" }}>
                            Lorem Ipsum is simply dummy text of the prin ting
                            and typesetting ind ustry
                          </p>

                          <p
                            style={{ color: "#E5C100" }}
                            className="edit-profile"
                          >
                            Edit Profile
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card p-4">
                        <form className="mainform2">
                          <h4>Add Payout Details</h4>
                          <p>Choose your payout method below.</p>
                          <div className="row mt-5 ">
                            <div className="form-group row">
                              <label
                                for="bankname"
                                className="col-sm-3 col-form-label d-flex align-items-center"
                              >
                                Bank Name
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control-plaintext border rounded p-2"
                                  id="bankname"
                                />
                              </div>
                            </div>
                            <div className="form-group row mt-4">
                              <label
                                for="bankname"
                                className="col-sm-3 col-form-label d-flex align-items-center"
                              >
                                A/C Holder Name
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control-plaintext border rounded p-2"
                                  id="bankname"
                                />
                              </div>
                            </div>
                            <div className="form-group row mt-4">
                              <label
                                for="bankname"
                                className="col-sm-3 col-form-label d-flex align-items-center"
                              >
                                A/C Number
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="number"
                                  className="form-control-plaintext border rounded p-2"
                                  id="bankname"
                                />
                              </div>
                            </div>
                            <div className="form-group row mt-4">
                              <label
                                for="bankname"
                                className="col-sm-3 col-form-label d-flex align-items-center"
                              >
                                Branch
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control-plaintext border rounded p-2"
                                  id="bankname"
                                />
                              </div>
                            </div>
                            <div className="form-group row mt-4">
                              <label
                                for="bankname"
                                className="col-sm-3 col-form-label d-flex align-items-center"
                              >
                                IFSC
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control-plaintext border rounded p-2"
                                  id="bankname"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="text-end mt-5">
                            <button
                              type="submit"
                              id="button-p"
                              className="btn btn-primary rounded px-5"
                            >
                              Save
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
                    ...
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
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
      </div>
    </>
  );
}
