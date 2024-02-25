import React from "react";
import { Outlet } from "react-router-dom";
import StdSidebar from "../components/StdSidebar";

const StudentProfile = () => {
	return (
		<>
			<div className="container-fluid mt-5">
				<div className="row">
					<div className="d-flex align-items-start">
						<StdSidebar />
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default StudentProfile;
