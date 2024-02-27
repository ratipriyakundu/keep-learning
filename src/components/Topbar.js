import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {DataContext} from "../App";

export default function Topbar() {
	const dataObject = useContext(DataContext);
	return (
		<>
			{/* <!-- top bar --> */}
			<div className="top-bar">
				{/* <!-- icon list --> */}
				<ul className="icon-list">
					<li>
						<Link to={'https://www.google.com/maps?q='+dataObject.contact_address} target="_blank">
							<i className="fa-solid fa-location-dot"></i>
							{dataObject.contact_address && dataObject.contact_address}
						</Link>
					</li>
					<li>
						<Link to={'mailto:'+dataObject.contact_email} target="_blank">
							<i className="fa-solid fa-comment"></i>
							{dataObject.contact_email && dataObject.contact_email}
						</Link>
					</li>
					<li>
						<Link to={'tel:'+dataObject.contact_phone} target="_blank">
							<i className="fa-solid fa-phone"></i>
							{dataObject.contact_phone && dataObject.contact_phone}
						</Link>
					</li>
				</ul>
				{/* <!-- social Icons --> */}
				<div className="icons">
					<ul>
						<li>
							<Link to={dataObject.facebook_social_link && dataObject.facebook_social_link} target="_blank">
								<i className="fa-brands fa-facebook"></i>
							</Link>
						</li>
						<li>
							<Link to={dataObject.instagram_social_link && dataObject.instagram_social_link} target="_blank">
								<i className="fa-brands fa-instagram"></i>
							</Link>
						</li>
						<li>
							<Link to={dataObject.twitter_social_link && dataObject.twitter_social_link} target="_blank">
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
