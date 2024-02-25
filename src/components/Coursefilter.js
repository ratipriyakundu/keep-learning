import React, { useEffect, useState } from "react";
import { RangeSlider } from "rsuite";
import "rsuite/dist/rsuite.css";
import useHttp from "../Hooks/useHttp";

export default function Coursefilter() {
  const API = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");
  const { PostRequest } = useHttp();
  const [filterList, setFilterList] = useState([]);

  const GetFilterList = async () => {
    const { data } = await PostRequest(
      API + "filterList",
      {},
      {
        authorization: "Bearer " + token,
      }
    );
    setFilterList(data?.responseData);
  }

  useEffect(() => {
    GetFilterList();
  }, []);
  return (
    <>
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
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body p-0 ">
              <div className="accordion accordion-flush" id="faqlist">
                {filterList?.category?.Data.map((items, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
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
                          <li>
                            <a
                              className="text-muted text-decoration-none"
                              href="/"
                            >
                              DevOps
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body p-0 px-1">
              <div className="paddingleft">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
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
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckChecked">
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
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckChecked2"
                />
                <label className="form-check-label" for="flexCheckChecked2">
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
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body p-0 px-1">
              {filterList?.Topics?.Data.map((items, index) => (
                <div key={index} className="paddingleft">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue={items._id}
                    id="English"
                  />
                  <label className="form-check-label" for="English">
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
            className="accordion-collapse collapse"
            aria-labelledby="headingfour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body p-0 px-1">
              {filterList?.language?.Data.map((items, index) => (
                <div key={index} className="paddingleft">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue={items._id}
                    id="English"
                  />
                  <label className="form-check-label" for="English">
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
            className="accordion-collapse collapse"
            aria-labelledby="headingfive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body p-0 px-1">
              <div className="paddingleft">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="first-hour"
                />
                <label className="form-check-label" for="first-hour">
                  <div className="d-flex">
                    <span className="startext px-2">0-0 hours</span>
                  </div>
                </label>
              </div>
              <div className="paddingleft">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="second-hour"
                />
                <label className="form-check-label" for="second-hour">
                  <div className="d-flex">
                    <span className="startext px-2">0-0 hours</span>
                  </div>
                </label>
              </div>
              <div className="paddingleft">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="third-hour"
                />
                <label className="form-check-label" for="third-hour">
                  <div className="d-flex">
                    <span className="startext px-2">0-0 hours</span>
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
            className="accordion-collapse collapse"
            aria-labelledby="headingfive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body p-0 px-1">
              <RangeSlider defaultValue={[0, 50]} min={0} max={100} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
