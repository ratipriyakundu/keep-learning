import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import StdSidebar from "../components/StdSidebar";
import Loader from "../components/Loader/Loader";

const StudentProfile = () => {

	const [isLoading, setIsLoading] = useState(true);

	return isLoading === true ? <Loader /> : (
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
