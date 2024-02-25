import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const InstSidebar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const Logout = () => {
    localStorage.clear();
    window.location.reload();
		window.scrollTo();
    navigate("/");
  };
	return (
		<>
			<div
				className="col-md-4 inst-sidebar  nav flex-column nav-pills p-3"
				id="v-pills-tab"
				role="tablist"
				aria-orientation="vertical"
			>
				<Link
					to="/instructor-profile/edit-profile"
					className={
						location.pathname === "/instructor-profile/myprofile" ||
						location.pathname === "/instructor-profile/edit-profile"
							? "nav-link active"
							: "nav-link"
					}
				>
					My profile
				</Link>
				<Link
					to="/instructor-profile/instCourses"
					className={
						location.pathname === "/instructor-profile/instCourses" ||
						location.pathname === "/instructor-profile/edit-courses-form"
							? "nav-link active"
							: "nav-link"
					}
				>
					Courses
				</Link>
				<Link
					to="/instructor-profile/instNotification"
					className={
						location.pathname === "/instructor-profile/instNotification"
							? "nav-link active"
							: "nav-link"
					}
				>
					Notification
				</Link>
				<Link
					to="/instructor-profile/instPerformance"
					className={
						location.pathname === "/instructor-profile/instPerformance"
							? "nav-link active"
							: "nav-link"
					}
				>
					Performance
				</Link>
				<Link
					to="/instructor-profile/instAccountSetting"
					className={
						location.pathname === "/instructor-profile/instAccountSetting"
							? "nav-link active"
							: "nav-link"
					}
				>
					Account Setting
				</Link>
				<Link
					to="/instructor-profile/instHelp"
					className={
						location.pathname === "/instructor-profile/instHelp"
							? "nav-link active"
							: "nav-link"
					}
				>
					Help
				</Link>
				<Link onClick={Logout} className="nav-link">
					Logout
				</Link>
			</div>
		</>
	);
};

export default InstSidebar;
