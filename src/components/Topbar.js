import React from "react";
import { Link } from "react-router-dom";

export default function Topbar({data}) {
	return (
		<>
			{/* <!-- top bar --> */}
			<div className="top-bar">
				{/* <!-- icon list --> */}
				<ul className="icon-list">
					<li>
						<Link to={'https://www.google.com/maps?q='+data.contact_address} target="_blank">
							<i className="fa-solid fa-location-dot"></i>
							{data.contact_address && data.contact_address}
						</Link>
					</li>
					<li>
						<Link to={'mailto:'+data.contact_email} target="_blank">
							<i className="fa-solid fa-comment"></i>
							{data.contact_email && data.contact_email}
						</Link>
					</li>
					<li>
						<Link to={'tel:'+data.contact_phone} target="_blank">
							<i className="fa-solid fa-phone"></i>
							{data.contact_phone && data.contact_phone}
						</Link>
					</li>
				</ul>
				{/* <!-- social Icons --> */}
				<div className="icons">
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
			{/* hide conditonaly  */}
		</>
	);
}
