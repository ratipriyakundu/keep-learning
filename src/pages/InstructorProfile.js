import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useHttp from "../Hooks/useHttp";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import InstSidebar from "../components/InstSidebar";
import Footer from "../components/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function InstructorProfile() {

	const [isLoading, setIsLoading] = useState(true);
	const [dataObject, setDataObject] = useState({});
	const location = useLocation();
	const { PostRequest } = useHttp();
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
			if (location.pathname === '/instructor-profile/edit-profile') {
				fetchProfileData();
			}
			if (location.pathname === '/instructor-profile/self-learning-courses') {
				fetchInstructorSelfLearningCourses();
			}
			if (location.pathname === '/instructor-profile/add-self-learning-course') {
				fetchCategory();
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
			prevObjectData['qualification'] = data?.responseData.qualification;
			prevObjectData['experience'] = data?.responseData.experience;
			prevObjectData['teach'] = data?.responseData.teach;
			prevObjectData['demoVideo'] = data?.responseData.demoVideo;
			prevObjectData['demoContent'] = data?.responseData.demoContent;
			setDataObject(prevObjectData);
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}
	}
	//Fetch Instructor Self Learning Courses
	const fetchInstructorSelfLearningCourses = async () => {
		const { data } = await PostRequest(
			API + "getInsCourses",
			{ courseType: 1 },
			{
				authorization: "Bearer " + token,
			}
		);
		if (data?.responseCode === 1) {
			prevObjectData['courses'] = data?.responseData;
			setDataObject(prevObjectData);
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}
	};
	//Fetch Category
	const fetchCategory = async () => {
		const { data } = await PostRequest(
			API + "getCategory",
			{},
			{
				authorization: "Bearer " + token,
			}
		);
		if (data?.responseCode === 1) {
			prevObjectData['category'] = data?.responseData;
			setDataObject(prevObjectData);
			fetchTopic();
		}
	}
	//Fetch Topic
	const fetchTopic = async () => {
		const { data } = await PostRequest(
			API + "getTopics",
			{},
			{
				authorization: "Bearer " + token,
			}
		);
		if (data?.responseCode === 1) {
			prevObjectData['topic'] = data?.responseData;
			setDataObject(prevObjectData);
			fetchLanguage();
		}
	}
	//Fetch Language
	const fetchLanguage = async () => {
		const { data } = await PostRequest(
            API + "LanguageList",
            {},
            {
                authorization: "Bearer " + token,
            }
        );
        if (data?.responseCode === 1) {
			prevObjectData['language'] = data?.responseData;
			setDataObject(prevObjectData);
			setIsLoading(false);
        }
	}

	useEffect(() => {
		fetchSettings();
	}, [location]);
	return (
		<>
			{isLoading === true ? <Loader /> : (
				<>
					<GoogleOAuthProvider clientId="752198572885-4g2el7a6670gkj9ed1qtdhltt56hnn3t.apps.googleusercontent.com">
						<Header data={dataObject} />
					</GoogleOAuthProvider>
					<div className="container-fluid mt-3">
						<div className="row">
							<div className="d-flex align-items-start " id="inst-profile">
								<InstSidebar />
								<Outlet context={dataObject} />
							</div>
						</div>
					</div>
					<Footer data={dataObject} />
				</>
			)}
		</>
	);
}
