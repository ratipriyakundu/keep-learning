import React from "react";
import {  Outlet } from "react-router-dom";

import InstSidebar from "../components/InstSidebar";

export default function InstructorProfile() {
	return (
		<>
			<div className="container-fluid mt-3">
				<div className="row">
					<div className="d-flex align-items-start " id="inst-profile">
						<InstSidebar />

						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}
