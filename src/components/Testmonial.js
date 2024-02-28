import React from "react";
import { Carousel } from "react-bootstrap";
export default function Testmonial(props) {
	return (
		<>
			{/* <!-- Slider main container --> */}
			<Carousel data-vs-theme="dark">
				{props.testimonials && props.testimonials.map((item, index) =>
					<Carousel.Item key={index}>
						<div className="row" id="about-5">
							<h2>
								Hear from our<span> {props.type}</span>
							</h2>
							<div className="img-Vector">
								<div className="text-center">
									<img src="../img/Vector-2.png" className="rounded" alt="..." />
								</div>
							</div>
							<p>
								{item.content}
							</p>
							<div id="divider">
								<hr className="divider" />
							</div>
							<h6>{item.role}</h6>
							<h5>{item.name}</h5>
						</div>
					</Carousel.Item>
				)}

			</Carousel>
			{/* <!-- Hear from our Learners end --> */}
		</>
	);
}
