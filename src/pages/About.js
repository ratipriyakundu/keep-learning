import React, { useState } from "react";
import Loader from "../components/Loader/Loader";

export default function About() {

	const [isLoading, setIsLoading] = useState(true);

	return isLoading === true ? <Loader /> : (
		<>
			{/* <!-- main content --> */}
			<div className="main-content">
				<div className="container">
					<section className="platform-strength mt-5">
						<div className="container">
							<div className="main-content2">
								<h2>
									The learning platform with
									<span style={{ color: "#021869" }}>
										smarts,
										<br /> strength
									</span>
									, and
									<span style={{ color: "#021869" }}>style</span>
								</h2>
								<p>
									We are unlike any learning platform. Our intuitive interface
									and innovative technology helps millions of L&amp;D
									professionals, educators, trainers, teachers, HR leaders, and
									course creators - bring out the best in themselves and their
									learners, everyday.
								</p>
							</div>
							<div className="image-box">
								<div className="row mt-5">
									<div className="col-md-3 d-flex ">
										<img alt="img" src="img/dimond.svg" />
										<div className="box-content px-3">
											<h3>00000</h3>
											<p>Online Courses</p>
										</div>
									</div>
									<div className="col-md-3 d-flex ">
										<img alt="img" src="img/dimond.svg" />
										<div className="box-content px-3">
											<h3>00000</h3>
											<p>Expert Instructors</p>
										</div>
									</div>
									<div className="col-md-3 d-flex ">
										<img alt="img" src="img/dimond.svg" />
										<div className="box-content px-3">
											<h3>Unlimited</h3>
											<p>Course Access</p>
										</div>
									</div>
									<div className="col-md-3 d-flex ">
										<img alt="img" src="img/dimond.svg" />
										<div className="box-content px-3">
											<h3>Learn</h3>
											<p>From Anywhere</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="klit mt-4">
						<div className="container">
							<p className="text-center">Hey, let’s show you around</p>
							<div className="main-content2">
								<h2 className="py-3">
									<span style={{ color: "#021869" }}>Tour</span>
									the klit
									<span style={{ color: "#021869" }}>modern</span> learning
									platform
								</h2>
							</div>
							{/* <!-- Klit image box --> */}
							<div className="row mt-5 pt-5">
								<div className="col-md-4 mt-5  ">
									<div className="card customcard text-center border-0 pt-5 m-3">
										<div className="text-center img">
											<img
												alt="img"
												className="pt-3"
												src="img/Self-paced Courses.svg"
												width="80%"
											/>
										</div>
										<div className="card-content">
											<h4>Self-paced Courses</h4>
											<p>
												The modern learning platform for L&amp;D pros like HR,
												trainers, instructional designers, and managers in
												businesses that need training, up-skilling, employee
												performance, on-boarding, trainer productivity,
												compliance, and more.
											</p>
										</div>
										<a href="#" className="text-center readmorebtn">
											Know more
											<img alt="img" className="px-3" src="img/Arrow 1.png" />
										</a>
									</div>
								</div>
								<div className="col-md-4 mt-5  ">
									<div className="card customcard text-center border-0 pt-5 m-3">
										<div className="text-center img">
											<img
												alt="img"
												className="pt-3"
												src="img/image 3.svg"
												width="80%"
											/>
										</div>
										<div className="card-content">
											<h4>Be instructor</h4>
											<p>
												The modern learning platform for L&amp;D pros like HR,
												trainers, instructional designers, and managers in
												businesses that need training, up-skilling, employee
												performance, on-boarding, trainer productivity,
												compliance, and more.
											</p>
										</div>
										<a href="#" className="text-center readmorebtn">
											Know more
											<img alt="img" className="px-3" src="img/Arrow 1.png" />
										</a>
									</div>
								</div>
								<div className="col-md-4 mt-5  ">
									<div className="card customcard text-center border-0 pt-5 m-3">
										<div className="text-center img">
											<img
												alt="img"
												className="pt-3"
												src="img/image 4.svg"
												width="80%"
											/>
										</div>
										<div className="card-content">
											<h4>Live Online Class</h4>
											<p>
												The modern learning platform for L&amp;D pros like HR,
												trainers, instructional designers, and managers in
												businesses that need training, up-skilling, employee
												performance, on-boarding, trainer productivity,
												compliance, and more.
											</p>
										</div>
										<a href="#" className="text-center readmorebtn">
											Know more
											<img alt="img" className="px-3" src="img/Arrow 1.png" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				<div className="container ">
					<div className="row" id="about-3">
						<div className="col-md-6 mt-5 mb-5">
							<div className="text-center">
								<img
									alt="img"
									src="img/mission 2.svg"
									className="rounded"
									
									style={{ width: "20%" }}
								/>
							</div>
							<p>
								Our mission is to power learning experiences that connect people
								to their purpose and potential
							</p>
						</div>
						<div className="col-md-6 mt-5">
							<div className="text-center">
								<img
									alt="img"
									src="img/vision 3.png"
									className="rounded"
									
									style={{ width: "20%" }}
								/>
							</div>
							<p>
								Our vision is to ignite lifelong passions through personalized,
								engaging, and limitless learning experiences for all.
							</p>
						</div>
					</div>
				</div>
				<div className="Why-klit">
					<div className="container">
						<div className="row mb-5" id="about-4">
							<h2 className="mb-4">
								Why <span>klit</span> ?
							</h2>
							<p className="mb-5">
								We believe in fostering a holistic and dynamic workplace
								<br /> where you can create, innovate and thrive!
							</p>
						</div>

						<div className="row mt-5">
							<div className="col-md-1"></div>
							<div className="col-md-5">
								<div className="row">
									<div className="col-md-3">
										<div className="text-center">
											<img
												alt="img"
												src="img/Frame 40.png"
												className="rounded"
												
											/>
										</div>
									</div>
									<div className="text-b col-md-9">
										<h5>Employee-friendly policies</h5>
										<p>
											Lorem ipsum dolor sit amet,consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-5">
								<div className="row">
									<div className="col-md-3">
										<div className="text-center">
											<img
												alt="img"
												src="img/Group 86.svg"
												className="rounded"
												
											/>
										</div>
									</div>
									<div className="text-b col-md-9">
										<h5>Employee-friendly policies</h5>
										<p>
											Lorem ipsum dolor sit amet,consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-1"></div>
						</div>

						<div className="row mt-5">
							<div className="col-md-1"></div>
							<div className="col-md-5">
								<div className="row">
									<div className="col-md-3">
										<div className="text-center">
											<img
												alt="img"
												src="img/Frame 42.png"
												className="rounded"
												
											/>
										</div>
									</div>
									<div className="text-b col-md-9">
										<h5>Employee-friendly policies</h5>
										<p>
											Lorem ipsum dolor sit amet,consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-5">
								<div className="row">
									<div className="col-md-3">
										<div className="text-center">
											<img
												alt="img"
												src="img/Frame 43.png"
												className="rounded"
												
											/>
										</div>
									</div>
									<div className="text-b col-md-9">
										<h5>Employee-friendly policies</h5>
										<p>
											Lorem ipsum dolor sit amet,consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-1"></div>
						</div>
					</div>
				</div>
				<div className="container mt-5">
					<div className="row" id="about-5">
						<h2>
							Hear from our<span> Learners</span>
						</h2>
						<div className="img-Vector">
							<div className="text-center">
								<img
									alt="img"
									src="img/Vector-2.png"
									className="rounded"
									
								/>
							</div>
						</div>
						<p>
							Excepturi praesentium beatae ut nemo commodi. Nemo omnis
							repudiandae <br />
							culpa quaerat soluta dolorem aspernatur et. Repellendus
							<br /> sint reprehenderit dignissimos consequatur maiores.
						</p>
						<div id="divider">
							<hr className="divider" />
						</div>
						<h6>Lead Intranet Specialist</h6>
						<h5>Devin Bartoletti</h5>
					</div>
				</div>
			</div>
		</>
	);
}
