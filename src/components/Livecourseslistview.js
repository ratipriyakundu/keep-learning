import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Livecourseslistview({ courses }) {
  const navigate = useNavigate();
  const navigateToEdit = (items) => {
    navigate("/instructor-profile/edit-live-courses-form", {
      state: {
        items,
      },
    });
  };
  return (
    <>
      {courses &&
        courses.map((items, index) => {
          return (
            <div className="row mt-3">
              <div className="box-78 col-md-5">
                <img
                  alt="img"
                  width="100%"
                  height="auto"
                  src="../img/learnphp.svg"
                />
              </div>
              <div className="col-md-6" id="courcesdt">
                <Link className="text-decoration-none" to="detail.html">
                  <h2> {items.title} </h2>
                </Link>

                <div className="Ratings-a d-flex mt-4">
                  <img
                    alt="img"
                    src="../img/Vector.svg"
                    id="image-Vector"
                    className="rounded float-start"
                  />
                  <h6>00 students</h6>
                  <h6 className="mx-4">{items.liveDate}</h6>
                  <h6>{items.liveTime}:AM</h6>
                </div>

                <div className="progress mt-3" id="ppbar">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    .
                  </div>
                </div>
                <p className="pt-2">40% completed</p>
                <button
                  onClick={() => navigateToEdit(items)}
                  className="btn btn-custom mt-4"
                >
                  EDIT COURSE
                </button>
                <Link to="#" className="btn btn-custom mt-4 mx-4">
                  GO LIVE
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
}
