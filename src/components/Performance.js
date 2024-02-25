import React from "react";
import { Link } from "react-router-dom";

const Performance = () => {
  return (
    <>
      <div className="row mt-5 me-5 w-100">
        <div className="d-flex flex-column align-items-start ms-5 me-5 performance">
          <div className="row w-100">
            <div className=" col-12 d-flex justify-content-between ">
              <h3 style={{ color: "#021869" }}>Performance</h3>
              <div className="btn-group">
                <button
                  className="btn  btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Current month
                </button>
                <ul className="dropdown-menu  ">
                  <li>
                    <Link>Last Month</Link>
                  </li>
                  <li>
                    <Link>Last 2 Months</Link>
                  </li>
                  <li>
                    <Link>Last 3 Months</Link>
                  </li>
                  <li>
                    <Link>Last 4 Months</Link>
                  </li>
                  <li>
                    <Link>Last 5 Months</Link>
                  </li>
                  <li>
                    <Link>Last 6 Months</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row w-100">
            <table className="table mt-5">
              <thead>
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col" className="text-center">
                    Students Enrolled
                  </th>
                  <th scope="col" className="text-center">
                    Ratings and reviews
                  </th>
                  <th scope="col" className="text-center">
                    Payout
                  </th>
                </tr>
              </thead>
              <tbody id="performance">
                <tr>
                  <td scope="row">
                    <h6 style={{ color: "#021969" }}>
                      Learn PHP Programming From Scratch
                    </h6>
                  </td>
                  <td>
                    <h6 style={{ color: "#021969" }} className="text-center">
                      0000
                    </h6>
                  </td>
                  <td className=" ">
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className="instructor-Name col-md-4"
                        style={{ height: "100%" }}
                      >
                        <img
                          src="../img/Star 2.svg"
                          className="rounded float-start"
                          alt="..."
                        />
                        <img
                          src="../img/Star 2.svg"
                          className="rounded float-start"
                          alt="..."
                        />
                        <img
                          src="../img/Star 2.svg"
                          className="rounded float-start"
                          alt="..."
                        />
                        <img
                          src="../img/Star 2.svg"
                          className="rounded float-start"
                          alt="..."
                        />
                        <img
                          src="../img/Star 2.svg"
                          className="rounded float-start"
                          alt="..."
                        />
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <h6 style={{ color: "#021969" }}>000.00 </h6>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <h6 style={{ color: "#021969" }}>
                      Learn PHP Programming From Scratch
                    </h6>
                  </td>
                  <td>
                    <h6 style={{ color: "#021969" }} className="text-center">
                      0000
                    </h6>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center ">
                      <div className="instructor-Name col-md-4">
                        <img
                          src="../img/Star 2.svg"
                          className="rounded float-start"
                          alt="..."
                        />
                        <img
                          src="../img/Star 2.svg"
                          className="rounded float-start"
                          alt="..."
                        />
                        <img
                          src="../img/Star 2.svg"
                          className="rounded float-start"
                          alt="..."
                        />
                        <img
                          src="../img/Star 2.svg"
                          className="rounded float-start"
                          alt="..."
                        />
                        <img
                          src="../img/Star 2.svg"
                          className="rounded float-start"
                          alt="..."
                        />
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <h6 style={{ color: "#021969" }}>000.00 </h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
