import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Courseslistviewloop({ courses }) {
  const navigate = useNavigate();
  const navigateToEdit = (items) => {
    navigate("/instructor-profile/edit-courses-form", {
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
            <div key={index} className="row mb-5 mt-2">
              <div className="box-78 col-md-5">
                <img
                  alt="img"
                  width="100%"
                  height="auto"
                  src="../img/learnphp.svg"
                />
              </div>
              <div className="col-md-6" id="courcesdt">
                <Link className="text-decoration-none" to="#">
                  <h2> {items.title} </h2>
                </Link>

                <div className="Ratings-a d-flex mt-4">
                  <img
                    alt="img"
                    src="../img/Vector.svg"
                    id="image-Vector"
                    className="rounded float-start"
                  />
                  <h6 className="">00 students</h6>
                  <div className="Star">
                    <img alt="img" src="../img/Star 2.svg" />
                    <img alt="img" src="../img/Star 2.svg" />
                    <img alt="img" src="../img/Star 2.svg" />
                    <img alt="img" src="../img/Star 2.svg" />
                    <img alt="img" src="../img/Star 5.svg" />
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
                <button
                  onClick={() => navigateToEdit(items)}
                  className="btn btn-custom mt-4"
                >
                  EDIT COURSE
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}
