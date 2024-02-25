import React from "react";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { ToastContainer } from "react-toastify";
import Topbar from "./Topbar";
import Headermenu from "./Headermenu";
import Mobileheadermenu from "./Mobileheadermenu";

export default function Header() {
	return (
		<>
			<ToastContainer autoClose={1000} />
			<header className="position-sticky top-0 " style={{ zIndex: 999 }}>
				<Topbar />
				{/* desktop menu */}
				<Headermenu />
				{/* mobile view menu */}
				<Mobileheadermenu />
				{/* set condition if instractor login hide nav menu set this button */}
				<div className="cart-switchtostudentbtn d-none">
					<Link to="/" className="btn btn-custom2">
						Switch To Student
					</Link>
				</div>
			</header>
		</>
	);
}
