import React from "react";
import { Carousel } from "react-bootstrap";
export default function Testmonial(props) {
	return (
		<>
			{/* <!-- Slider main container --> */}
			<Carousel data-vs-theme="dark">
				<Carousel.Item>
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
				</Carousel.Item>
				<Carousel.Item>
					<div className="row" id="about-5">
						<h2>
							Hear from our <span>{props.type}</span>
						</h2>
						<div className="img-Vector">
							<div className="text-center">
								<img src="img/Vector-2.png" className="rounded" alt="..." />
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
				</Carousel.Item>
				<Carousel.Item>
					<div className="row" id="about-5">
						<h2>
							Hear from our <span>{props.type}</span>
						</h2>
						<div className="img-Vector">
							<div className="text-center">
								<img src="img/Vector-2.png" className="rounded" alt="..." />
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
				</Carousel.Item>
			</Carousel>
			{/* <!-- Hear from our Learners end --> */}
		</>
	);
}
