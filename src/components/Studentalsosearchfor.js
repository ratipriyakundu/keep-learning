import React from "react";

// import Swiper core and required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Studentalsosearchfor(props) {
  return (
    <>
      {/* <!-- students also searching for --> */}
      <div
        className="students-also-searching-for mt-5"
        style={{ backgroundColor: props.bgcolor }}
      >
        <div className="container">
          <div className="row student-also-searching">
            <h4 className="mb-3" style={{ color: props.h4color }}>
              <span style={{ color: "#e5c100" }}>{props.h4span} </span>
              {props.h4}
            </h4>
            <p style={{ color: props.h4color }}>
              Lorem Ipsum is simply dummy text of the printing and typesettings
            </p>
          </div>
          {/* <!-- Slider main container --> */}
          <div className="row mt-5">
            <Swiper
              className={props.cName}
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={3}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              navigation
            >
              <SwiperSlide>
                <div className="member-slider-wrap ">
                  <div
                    className="box-Duration rounded-3 "
                    style={{ border: props.cardBorder }}
                  >
                    <h2 style={{ color: props.cardTitleColor }}>
                      Learn PHP Programming From Scratch
                    </h2>
                    <p style={{ color: props.cardTitleDetailsColor }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p>
                    <div className="row">
                      <div className="Corse d-flex justify-content-center align-items-center">
                        {/* <img
													style={{ color: props.imgcolor }}
													src="../img/Group 241.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/> */}
                        <svg
                          id="img-slider"
                          className="rounded float-start"
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.44444 1V3.7M12.5556 1V3.7M1.44444 7.381H16.5556M17 6.85V14.5C17 17.2 15.6667 19 12.5556 19H5.44444C2.33333 19 1 17.2 1 14.5V6.85C1 4.15 2.33333 2.35 5.44444 2.35H12.5556C15.6667 2.35 17 4.15 17 6.85Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.2837 11.5298H12.2917M12.2837 14.2298H12.2917M8.99486 11.5298H9.00374M8.99486 14.2298H9.00374M5.70508 11.5298H5.71397M5.70508 14.2298H5.71397"
                            stroke={props.imgcolor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p style={{ color: props.durationColor }}>
                          Corse Duration
                        </p>
                        {/* <img
													// style={{ color: props.imgcolor }}
													src="../img/Group 309.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/> */}
                        <svg
                          id="img-slider"
                          className="rounded float-start"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4619 10.2239C13.1251 10.5527 12.9326 11.0258 12.9807 11.531C13.0529 12.3971 13.8468 13.0306 14.7129 13.0306H16.2365V13.9849C16.2365 15.6449 14.8813 17.0002 13.2213 17.0002H4.01523C2.35525 17.0002 1 15.6449 1 13.9849V8.58799C1 6.928 2.35525 5.57275 4.01523 5.57275H13.2213C14.8813 5.57275 16.2365 6.928 16.2365 8.58799V9.74276H14.6167C14.1676 9.74276 13.7586 9.91918 13.4619 10.2239Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 9.30957V5.64478C1 4.69049 1.5854 3.84046 2.47554 3.50365L8.84281 1.09788C9.07352 1.01094 9.32187 0.981282 9.56656 1.01145C9.81125 1.04162 10.045 1.13072 10.2476 1.27109C10.4503 1.41147 10.6159 1.59893 10.7302 1.81738C10.8445 2.03584 10.904 2.27876 10.9038 2.5253V5.57261M4.60866 8.98079H10.2221M17.0858 10.5606V12.2125C17.0858 12.6536 16.7329 13.0145 16.2839 13.0305H14.7121C13.846 13.0305 13.0521 12.397 12.9799 11.5309C12.9318 11.0257 13.1243 10.5526 13.4611 10.2238C13.7578 9.91904 14.1668 9.74261 14.6159 9.74261H16.2839C16.7329 9.75865 17.0858 10.1195 17.0858 10.5606Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p style={{ color: props.durationColor }}>Corse Fees</p>
                      </div>
                      <div className="text-center">
                        <button
                          style={{
                            color: props.h4color,
                            border: props.btnborder,
                          }}
                          type="button"
                          id="button-Corse"
                          className="btn btn-outline-primary"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="member-slider-wrap ">
                  <div
                    className="box-Duration rounded-3 "
                    style={{ border: props.cardBorder }}
                  >
                    <h2 style={{ color: props.cardTitleColor }}>
                      Learn PHP Programming From Scratch
                    </h2>
                    <p style={{ color: props.cardTitleDetailsColor }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p>
                    <div className="row">
                      <div className="Corse d-flex justify-content-center align-items-center">
                        {/* <img
													style={{ color: props.imgcolor }}
													src="../img/Group 241.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/> */}
                        <svg
                          id="img-slider"
                          className="rounded float-start"
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.44444 1V3.7M12.5556 1V3.7M1.44444 7.381H16.5556M17 6.85V14.5C17 17.2 15.6667 19 12.5556 19H5.44444C2.33333 19 1 17.2 1 14.5V6.85C1 4.15 2.33333 2.35 5.44444 2.35H12.5556C15.6667 2.35 17 4.15 17 6.85Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.2837 11.5298H12.2917M12.2837 14.2298H12.2917M8.99486 11.5298H9.00374M8.99486 14.2298H9.00374M5.70508 11.5298H5.71397M5.70508 14.2298H5.71397"
                            stroke={props.imgcolor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p style={{ color: props.durationColor }}>
                          Corse Duration
                        </p>
                        {/* <img
													// style={{ color: props.imgcolor }}
													src="../img/Group 309.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/> */}
                        <svg
                          id="img-slider"
                          className="rounded float-start"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4619 10.2239C13.1251 10.5527 12.9326 11.0258 12.9807 11.531C13.0529 12.3971 13.8468 13.0306 14.7129 13.0306H16.2365V13.9849C16.2365 15.6449 14.8813 17.0002 13.2213 17.0002H4.01523C2.35525 17.0002 1 15.6449 1 13.9849V8.58799C1 6.928 2.35525 5.57275 4.01523 5.57275H13.2213C14.8813 5.57275 16.2365 6.928 16.2365 8.58799V9.74276H14.6167C14.1676 9.74276 13.7586 9.91918 13.4619 10.2239Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 9.30957V5.64478C1 4.69049 1.5854 3.84046 2.47554 3.50365L8.84281 1.09788C9.07352 1.01094 9.32187 0.981282 9.56656 1.01145C9.81125 1.04162 10.045 1.13072 10.2476 1.27109C10.4503 1.41147 10.6159 1.59893 10.7302 1.81738C10.8445 2.03584 10.904 2.27876 10.9038 2.5253V5.57261M4.60866 8.98079H10.2221M17.0858 10.5606V12.2125C17.0858 12.6536 16.7329 13.0145 16.2839 13.0305H14.7121C13.846 13.0305 13.0521 12.397 12.9799 11.5309C12.9318 11.0257 13.1243 10.5526 13.4611 10.2238C13.7578 9.91904 14.1668 9.74261 14.6159 9.74261H16.2839C16.7329 9.75865 17.0858 10.1195 17.0858 10.5606Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p style={{ color: props.durationColor }}>Corse Fees</p>
                      </div>
                      <div className="text-center">
                        <button
                          style={{
                            color: props.h4color,
                            border: props.btnborder,
                          }}
                          type="button"
                          id="button-Corse"
                          className="btn btn-outline-primary"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="member-slider-wrap ">
                  <div
                    className="box-Duration rounded-3 "
                    style={{ border: props.cardBorder }}
                  >
                    <h2 style={{ color: props.cardTitleColor }}>
                      Learn PHP Programming From Scratch
                    </h2>
                    <p style={{ color: props.cardTitleDetailsColor }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p>
                    <div className="row">
                      <div className="Corse d-flex justify-content-center align-items-center">
                        {/* <img
													style={{ color: props.imgcolor }}
													src="../img/Group 241.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/> */}
                        <svg
                          id="img-slider"
                          className="rounded float-start"
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.44444 1V3.7M12.5556 1V3.7M1.44444 7.381H16.5556M17 6.85V14.5C17 17.2 15.6667 19 12.5556 19H5.44444C2.33333 19 1 17.2 1 14.5V6.85C1 4.15 2.33333 2.35 5.44444 2.35H12.5556C15.6667 2.35 17 4.15 17 6.85Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.2837 11.5298H12.2917M12.2837 14.2298H12.2917M8.99486 11.5298H9.00374M8.99486 14.2298H9.00374M5.70508 11.5298H5.71397M5.70508 14.2298H5.71397"
                            stroke={props.imgcolor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p style={{ color: props.durationColor }}>
                          Corse Duration
                        </p>
                        {/* <img
													// style={{ color: props.imgcolor }}
													src="../img/Group 309.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/> */}
                        <svg
                          id="img-slider"
                          className="rounded float-start"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4619 10.2239C13.1251 10.5527 12.9326 11.0258 12.9807 11.531C13.0529 12.3971 13.8468 13.0306 14.7129 13.0306H16.2365V13.9849C16.2365 15.6449 14.8813 17.0002 13.2213 17.0002H4.01523C2.35525 17.0002 1 15.6449 1 13.9849V8.58799C1 6.928 2.35525 5.57275 4.01523 5.57275H13.2213C14.8813 5.57275 16.2365 6.928 16.2365 8.58799V9.74276H14.6167C14.1676 9.74276 13.7586 9.91918 13.4619 10.2239Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 9.30957V5.64478C1 4.69049 1.5854 3.84046 2.47554 3.50365L8.84281 1.09788C9.07352 1.01094 9.32187 0.981282 9.56656 1.01145C9.81125 1.04162 10.045 1.13072 10.2476 1.27109C10.4503 1.41147 10.6159 1.59893 10.7302 1.81738C10.8445 2.03584 10.904 2.27876 10.9038 2.5253V5.57261M4.60866 8.98079H10.2221M17.0858 10.5606V12.2125C17.0858 12.6536 16.7329 13.0145 16.2839 13.0305H14.7121C13.846 13.0305 13.0521 12.397 12.9799 11.5309C12.9318 11.0257 13.1243 10.5526 13.4611 10.2238C13.7578 9.91904 14.1668 9.74261 14.6159 9.74261H16.2839C16.7329 9.75865 17.0858 10.1195 17.0858 10.5606Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p style={{ color: props.durationColor }}>Corse Fees</p>
                      </div>
                      <div className="text-center">
                        <button
                          style={{
                            color: props.h4color,
                            border: props.btnborder,
                          }}
                          type="button"
                          id="button-Corse"
                          className="btn btn-outline-primary"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="member-slider-wrap ">
                  <div
                    className="box-Duration rounded-3 "
                    style={{ border: props.cardBorder }}
                  >
                    <h2 style={{ color: props.cardTitleColor }}>
                      Learn PHP Programming From Scratch
                    </h2>
                    <p style={{ color: props.cardTitleDetailsColor }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p>
                    <div className="row">
                      <div className="Corse d-flex justify-content-center align-items-center">
                        {/* <img
													style={{ color: props.imgcolor }}
													src="../img/Group 241.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/> */}
                        <svg
                          id="img-slider"
                          className="rounded float-start"
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.44444 1V3.7M12.5556 1V3.7M1.44444 7.381H16.5556M17 6.85V14.5C17 17.2 15.6667 19 12.5556 19H5.44444C2.33333 19 1 17.2 1 14.5V6.85C1 4.15 2.33333 2.35 5.44444 2.35H12.5556C15.6667 2.35 17 4.15 17 6.85Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.2837 11.5298H12.2917M12.2837 14.2298H12.2917M8.99486 11.5298H9.00374M8.99486 14.2298H9.00374M5.70508 11.5298H5.71397M5.70508 14.2298H5.71397"
                            stroke={props.imgcolor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p style={{ color: props.durationColor }}>
                          Corse Duration
                        </p>
                        {/* <img
													// style={{ color: props.imgcolor }}
													src="../img/Group 309.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/> */}
                        <svg
                          id="img-slider"
                          className="rounded float-start"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4619 10.2239C13.1251 10.5527 12.9326 11.0258 12.9807 11.531C13.0529 12.3971 13.8468 13.0306 14.7129 13.0306H16.2365V13.9849C16.2365 15.6449 14.8813 17.0002 13.2213 17.0002H4.01523C2.35525 17.0002 1 15.6449 1 13.9849V8.58799C1 6.928 2.35525 5.57275 4.01523 5.57275H13.2213C14.8813 5.57275 16.2365 6.928 16.2365 8.58799V9.74276H14.6167C14.1676 9.74276 13.7586 9.91918 13.4619 10.2239Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 9.30957V5.64478C1 4.69049 1.5854 3.84046 2.47554 3.50365L8.84281 1.09788C9.07352 1.01094 9.32187 0.981282 9.56656 1.01145C9.81125 1.04162 10.045 1.13072 10.2476 1.27109C10.4503 1.41147 10.6159 1.59893 10.7302 1.81738C10.8445 2.03584 10.904 2.27876 10.9038 2.5253V5.57261M4.60866 8.98079H10.2221M17.0858 10.5606V12.2125C17.0858 12.6536 16.7329 13.0145 16.2839 13.0305H14.7121C13.846 13.0305 13.0521 12.397 12.9799 11.5309C12.9318 11.0257 13.1243 10.5526 13.4611 10.2238C13.7578 9.91904 14.1668 9.74261 14.6159 9.74261H16.2839C16.7329 9.75865 17.0858 10.1195 17.0858 10.5606Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p style={{ color: props.durationColor }}>Corse Fees</p>
                      </div>
                      <div className="text-center">
                        <button
                          style={{
                            color: props.h4color,
                            border: props.btnborder,
                          }}
                          type="button"
                          id="button-Corse"
                          className="btn btn-outline-primary"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="member-slider-wrap ">
                  <div
                    className="box-Duration rounded-3 "
                    style={{ border: props.cardBorder }}
                  >
                    <h2 style={{ color: props.cardTitleColor }}>
                      Learn PHP Programming From Scratch
                    </h2>
                    <p style={{ color: props.cardTitleDetailsColor }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </p>
                    <div className="row">
                      <div className="Corse d-flex justify-content-center align-items-center">
                        {/* <img
													style={{ color: props.imgcolor }}
													src="../img/Group 241.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/> */}
                        <svg
                          id="img-slider"
                          className="rounded float-start"
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.44444 1V3.7M12.5556 1V3.7M1.44444 7.381H16.5556M17 6.85V14.5C17 17.2 15.6667 19 12.5556 19H5.44444C2.33333 19 1 17.2 1 14.5V6.85C1 4.15 2.33333 2.35 5.44444 2.35H12.5556C15.6667 2.35 17 4.15 17 6.85Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.2837 11.5298H12.2917M12.2837 14.2298H12.2917M8.99486 11.5298H9.00374M8.99486 14.2298H9.00374M5.70508 11.5298H5.71397M5.70508 14.2298H5.71397"
                            stroke={props.imgcolor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p style={{ color: props.durationColor }}>
                          Corse Duration
                        </p>
                        {/* <img
													// style={{ color: props.imgcolor }}
													src="../img/Group 309.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/> */}
                        <svg
                          id="img-slider"
                          className="rounded float-start"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4619 10.2239C13.1251 10.5527 12.9326 11.0258 12.9807 11.531C13.0529 12.3971 13.8468 13.0306 14.7129 13.0306H16.2365V13.9849C16.2365 15.6449 14.8813 17.0002 13.2213 17.0002H4.01523C2.35525 17.0002 1 15.6449 1 13.9849V8.58799C1 6.928 2.35525 5.57275 4.01523 5.57275H13.2213C14.8813 5.57275 16.2365 6.928 16.2365 8.58799V9.74276H14.6167C14.1676 9.74276 13.7586 9.91918 13.4619 10.2239Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 9.30957V5.64478C1 4.69049 1.5854 3.84046 2.47554 3.50365L8.84281 1.09788C9.07352 1.01094 9.32187 0.981282 9.56656 1.01145C9.81125 1.04162 10.045 1.13072 10.2476 1.27109C10.4503 1.41147 10.6159 1.59893 10.7302 1.81738C10.8445 2.03584 10.904 2.27876 10.9038 2.5253V5.57261M4.60866 8.98079H10.2221M17.0858 10.5606V12.2125C17.0858 12.6536 16.7329 13.0145 16.2839 13.0305H14.7121C13.846 13.0305 13.0521 12.397 12.9799 11.5309C12.9318 11.0257 13.1243 10.5526 13.4611 10.2238C13.7578 9.91904 14.1668 9.74261 14.6159 9.74261H16.2839C16.7329 9.75865 17.0858 10.1195 17.0858 10.5606Z"
                            stroke={props.imgcolor}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p style={{ color: props.durationColor }}>Corse Fees</p>
                      </div>
                      <div className="text-center">
                        <button
                          style={{
                            color: props.h4color,
                            border: props.btnborder,
                          }}
                          type="button"
                          id="button-Corse"
                          className="btn btn-outline-primary"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* <!-- students also searching for end --> */}
    </>
  );
}
