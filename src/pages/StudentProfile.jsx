import React, { useState, useEffect } from "react";
import useHttp from "../Hooks/useHttp";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import StdSidebar from "../components/StdSidebar";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";

const StudentProfile = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [dataObject, setDataObject] = useState({});
	const location = useLocation();
	const { PostRequest } = useHttp();
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const API = process.env.REACT_APP_API_URL;
	const HOME = process.env.REACT_APP_HOME;
	const prevObjectData = { ...dataObject };

	//Fetch All Settings
	const fetchSettings = async () => {
		setIsLoading(true);
		var { data } = await PostRequest(
			API + "allSettings",
			{},
			{
				authorization: "Bearer " + token,
			}
		);
		if (data?.responseCode === 1) {
			data?.responseData.filter((item) => {
				prevObjectData['' + item.name + ''] = item.value;
			})
			setDataObject(prevObjectData);
			if (location.pathname === '/student-profile/edit-profile') {
				fetchProfileData();
			}
			if (location.pathname === '/student-profile/my-courses') {
				fetchMyCourses();
			}
		}
	}

	//Fetch Profile Data
	const fetchProfileData = async () => {
		const { data } = await PostRequest(
			API + "profileDetails",
			{},
			{ authorization: "Bearer " + token }
		);
		if (data?.responseCode === 1) {

			prevObjectData['_id'] = data?.responseData._id;
			prevObjectData['name'] = data?.responseData.name;
			prevObjectData['mobile'] = data?.responseData.mobile;
			prevObjectData['email'] = data?.responseData.email;
			prevObjectData['about'] = data?.responseData.about;
			prevObjectData['profile'] = data?.responseData.profile !== null ? HOME + data?.responseData.profile : null;
			prevObjectData['headline'] = data?.responseData.Headline;

			setDataObject(prevObjectData);
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}
	}

	//Fetch My Courses
	const fetchMyCourses = async () => {
		const { data } = await PostRequest(
			API + "myCourses",
			{},
			{
				authorization: "Bearer " + token,
			}
		);
		if (data?.responseCode) {
			if (data?.responseData) {
				prevObjectData['cart_data'] = data?.responseData;
			} else {
				prevObjectData['cart_data'] = [];
			}
			setDataObject(prevObjectData);
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}
	};
	
	useEffect(() => {
		if(!token) {
			navigate('/');
		}else {
			fetchSettings();
		}
	}, [location]);

	return isLoading === true ? <Loader /> : (
		<>
			<GoogleOAuthProvider clientId="752198572885-4g2el7a6670gkj9ed1qtdhltt56hnn3t.apps.googleusercontent.com">
				<Header data={dataObject} />
			</GoogleOAuthProvider>
			<div className="container-fluid mt-5">
				<div className="row">
					<div className="d-flex align-items-start">
						<StdSidebar />
						<Outlet context={dataObject} />
					</div>
				</div>
			</div>
			<Footer data={dataObject} />
		</>
	);
};

export default StudentProfile;
