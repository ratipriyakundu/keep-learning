import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			{/* <!-- footer --> */}
			<footer>
				<div className="container footer">
					<div className="row">
						<div className="col-md-4">
							<div className="brand-info">
								<div className="brand-logo">
									<img alt="img" src="../img/Frame.png" width="60%" />
								</div>
								<p className="mt-4">
									{" "}
									keep learning is online learning platform. <br />
									Download our apps to start learning
								</p>
								<div className="icons2 mt-3">
									<ul>
										<li>
											<Link to="#">
												<i className="fa-brands fa-facebook"></i>
											</Link>
										</li>
										<li>
											<Link to="#">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link to="#">
												<i className="fa-brands fa-twitter"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-8 ">
							<div className="row" id="footer-item">
								<div className="col-4 p-3">
									{/* <!-- footer 1 widget --> */}
									<h2> Company</h2>
									<hr className="bar " />
									<ul className="list">
										<li>
											<Link to="/about">About</Link>
										</li>
										<li>
											<Link to="#">Pricing</Link>
										</li>
										<li>
											<Link to="#">Career</Link>
										</li>
										<li>
											<Link to="/contact-us">Contact</Link>
										</li>
										<li>
											<Link to="#">Term & Con.</Link>
										</li>
									</ul>
								</div>
								<div className="col-4 p-3">
									{/* <!-- footer 2 widget --> */}
									<h2> Quick Links</h2>
									<hr className="bar " />
									<ul className="list">
										<li>
											<Link to="#">Self-learning Courses</Link>
										</li>
										<li>
											<Link to="#">Live Online class</Link>
										</li>
										<li>
											<Link to="#">Be instructor</Link>
										</li>
										<li>
											<Link to="#">Login/Signup</Link>
										</li>
									</ul>
								</div>
								<div className="col-4 p-3">
									{/* <!-- footer 3 widget --> */}
									<h2> Contact</h2>
									<hr className="bar " />
									<ul className="list">
										<li className="p-0">
											<Link to="#">
												<div className="icon-box-footer">
													<img
														alt="img"
														className="pr-3"
														src="../img/location.svg"
														width="auto"
													/>
													<span className="iccontent">
														1PO Box, Collins Street West, Australia
													</span>
												</div>
											</Link>
										</li>
										<li className="p-0">
											<Link to="#">
												<div className="icon-box-footer">
													<img
														alt="img"
														className="pr-3"
														src="../img/message.svg"
														width="auto"
													/>
													<span className="iccontent">info@example.com</span>
												</div>
											</Link>
										</li>
										<li className="p-0">
											<Link to="tel:+919876543210">
												<div className="icon-box-footer">
													<img
														alt="img"
														className="pr-3"
														src="../img/call.svg"
														width="auto"
													/>
													<span className="iccontent">+91 9876543210</span>
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright">
					<p>Created By SNDk @keeplearning</p>
				</div>
			</footer>
		</>
	);
}
