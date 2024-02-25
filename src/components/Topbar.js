import React from "react";
import { Link } from "react-router-dom";

export default function Topbar() {
	return (
		<>
			{/* <!-- top bar --> */}
			<div className="top-bar">
				{/* <!-- icon list --> */}
				<ul className="icon-list">
					<li>
						<Link href="#">
							<i className="fa-solid fa-location-dot"></i>
							1PO Box, Collins Street West, Australia
						</Link>
					</li>
					<li>
						<Link href="#">
							<i className="fa-solid fa-comment"></i>info@example.com
						</Link>
					</li>
					<li>
						<Link href="#">
							<i className="fa-solid fa-phone"></i>info@example.com
						</Link>
					</li>
				</ul>
				{/* <!-- social Icons --> */}
				<div className="icons">
					<ul>
						<li>
							<Link href="#">
								<i className="fa-brands fa-facebook"></i>
							</Link>
						</li>
						<li>
							<Link href="#">
								<i className="fa-brands fa-instagram"></i>
							</Link>
						</li>
						<li>
							<Link href="#">
								<i className="fa-brands fa-square-twitter"></i>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* hide conditonaly  */}
		</>
	);
}
