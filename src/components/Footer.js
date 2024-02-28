import React from "react";
import { Link } from "react-router-dom";

export default function Footer({data}) {
	return (
		<>
			{/* <!-- footer --> */}
			<footer>
				<div className="container footer">
					<div className="row">
						<div className="col-md-4">
							<div className="brand-info">
								<div className="brand-logo">
									<img alt="Footer Brand Icon" src={data.footer_logo && process.env.REACT_APP_HOME+data.footer_logo} width="60%" />
								</div>
								<p className="mt-4">
									{" "}
									keep learning is online learning platform. <br />
									Download our apps to start learning
								</p>
								<div className="icons2 mt-3">
									<ul>
										<li>
											<Link to={data.facebook_social_link && data.facebook_social_link} target="_blank">
												<i className="fa-brands fa-facebook"></i>
											</Link>
										</li>
										<li>
											<Link to={data.instagram_social_link && data.instagram_social_link} target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link to={data.twitter_social_link && data.twitter_social_link} target="_blank">
												<i className="fa-brands fa-square-twitter"></i>
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
											<Link to="/">Pricing</Link>
										</li>
										<li>
											<Link to="/">Career</Link>
										</li>
										<li>
											<Link to="/contact-us">Contact</Link>
										</li>
										<li>
											<Link to="/">Term & Con.</Link>
										</li>
									</ul>
								</div>
								<div className="col-4 p-3">
									{/* <!-- footer 2 widget --> */}
									<h2> Quick Links</h2>
									<hr className="bar " />
									<ul className="list">
										<li>
											<Link to="/">Self-learning Courses</Link>
										</li>
										<li>
											<Link to="/">Live Online class</Link>
										</li>
										<li>
											<Link to="/">Be instructor</Link>
										</li>
										<li>
											<Link to="/">Login/Signup</Link>
										</li>
									</ul>
								</div>
								<div className="col-4 p-3">
									{/* <!-- footer 3 widget --> */}
									<h2> Contact</h2>
									<hr className="bar " />
									<ul className="list">
										<li className="p-0">
											<Link to={'https://www.google.com/maps?q=' + data.contact_address} target="_blank">
												<div className="icon-box-footer">
													<img
														alt="img"
														className="pr-3"
														src="../img/location.svg"
														width="auto"
													/>
													<span className="iccontent">
														{data.contact_address && data.contact_address}
													</span>
												</div>
											</Link>
										</li>
										<li className="p-0">
											<Link to={'mailto:' + data.contact_email} target="_blank">
												<div className="icon-box-footer">
													<img
														alt="img"
														className="pr-3"
														src="../img/message.svg"
														width="auto"
													/>
													<span className="iccontent">
														{data.contact_email && data.contact_email}
													</span>
												</div>
											</Link>
										</li>
										<li className="p-0">
											<Link to={'tel:' + data.contact_phone} target="_blank">
												<div className="icon-box-footer">
													<img
														alt="img"
														className="pr-3"
														src="../img/call.svg"
														width="auto"
													/>
													<span className="iccontent">
														{data.contact_phone && data.contact_phone}
													</span>
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
