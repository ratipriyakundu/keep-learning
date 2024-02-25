import React from "react";

// import Swiper core and required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Trendingcoursesslider(props) {
	return (
		<>
			{/* Trending-Courses */}
			<div className="Trending-Courses mt-5">
				<div className="container">
					<div className="row student-also-searching">
						<h4>
							<span>{props.h4span}</span> Courses
						</h4>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesettings
						</p>
					</div>
					<div className="row">
						<Swiper
							// install Swiper modules
							modules={[Navigation]}
							spaceBetween={30}
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
								<div className="member-slider-wrap">
									<div className="box-Durations rounded-3">
										<h2>Learn PHP Programming From Scratch</h2>
										<p>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting
										</p>
										<div className="row">
											<div className="Cors d-flex justify-content-center align-items-center">
												<img
													src="../img/Group 2411.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/>
												<p>Corse Duration</p>
												<img
													src="../img/Group 3099.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/>
												<p>Corse Fees</p>
											</div>
											<div className="text-center">
												<button
													type="button"
													id="button-Cors"
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
								<div className="member-slider-wrap">
									<div className="box-Durations rounded-3">
										<h2>Learn PHP Programming From Scratch</h2>
										<p>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting
										</p>
										<div className="row">
											<div className="Cors d-flex justify-content-center align-items-center">
												<img
													src="../img/Group 2411.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/>
												<p>Corse Duration</p>
												<img
													src="../img/Group 3099.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/>
												<p>Corse Fees</p>
											</div>
											<div className="text-center">
												<button
													type="button"
													id="button-Cors"
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
								<div className="member-slider-wrap">
									<div className="box-Durations  rounded-3">
										<h2>Learn PHP Programming From Scratch</h2>
										<p>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting
										</p>
										<div className="row">
											<div className="Cors d-flex justify-content-center align-items-center">
												<img
													src="../img/Group 2411.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/>
												<p>Corse Duration</p>
												<img
													src="../img/Group 3099.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/>
												<p>Corse Fees</p>
											</div>
											<div className="text-center">
												<button
													type="button"
													id="button-Cors"
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
								<div className="member-slider-wrap">
									<div className="box-Durations rounded-3">
										<h2>Learn PHP Programming From Scratch</h2>
										<p>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting
										</p>
										<div className="row">
											<div className="Cors d-flex justify-content-center align-items-center">
												<img
													src="../img/Group 2411.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/>
												<p>Corse Duration</p>
												<img
													src="../img/Group 3099.svg"
													id="img-slider"
													className="rounded float-start"
													alt="..."
												/>
												<p>Corse Fees</p>
											</div>
											<div className="text-center">
												<button
													type="button"
													id="button-Cors"
													className="btn btn-outline-primary"
												>
													View Details
												</button>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide></SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
}
