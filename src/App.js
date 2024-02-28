import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Beinstructor from "./pages/Beinstructor";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Selflearningdtailpage from "./pages/Selflearningdtailpage";
import Liveonlinedtailpage from "./pages/Liveonlinedtailpage";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import InstructorProfile from "./pages/InstructorProfile";
import EditInstructorProfile from "./pages/EditInstructorProfile";
import InstructorProfileConfirmed from "./pages/InstructorProfileConfirmed";
import "react-toastify/dist/ReactToastify.css";
import Selflearningcoursedetailspage from "./pages/Selflearningcoursedetailspage";
import Myprofile from "./components/Myprofile";
import Editprofile from "./components/Editprofile";
import Courseslistviewloop from "./components/Courseslistviewloop";
import InstCourses from "./components/InstCourses";
import Notification from "./components/Notification";
import AccountSetting from "./components/AccountSetting";
import Performance from "./components/Performance";
import Help from "./components/Help";
import StudentProfile from "./pages/StudentProfile";
import StdCourses from "./components/StdCourses";
import StdMyprofile from "./components/StdMyprofile";
import StdAccountSetting from "./components/StdAccountSetting";
import StdCart from "./components/StdCart";
import StdEditprofile from "./components/StdEditprofile";
import StdHelp from "./components/StdHelp";
import StdNotification from "./components/StdNotification";
import StdWishlist from "./components/StdWishlist";
import { GoogleOAuthProvider } from "@react-oauth/google";
import StdCheckout from "./components/StdCheckout";
import EditCoursesForm from "./components/EditCoursesForm";
import LiveOnlineClassDetails from "./pages/LiveOnlineClassDetails";
import AddNewCourse from "./components/AddNewCourse";
import SelflearningCourseDetailPages from "./pages/SelflearningCourseDetailPages";
import GoogleLogin from "./pages/GoogleLogin";
import EditLiveCoursesForm from "./components/EditLiveCoursesForm";
import Loader from "./components/Loader/Loader";
import useHttp from "../src/Hooks/useHttp";
export const DataContext = createContext({});

function App() {
  const [isLoading, setIsLoading] = useState(0);
  const [dataObject, setDataObject] = useState({});
  const API = process.env.REACT_APP_API_URL;
  const { PostRequest } = useHttp();
  const token = localStorage.getItem("token");
  const prevObjectData = { ...dataObject };
  const fetchData = async () => {
    //Fetch All Settings
    var { data } = await PostRequest(
      API + "allSettings",
      {},
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      data?.responseData.filter((item) => {
        prevObjectData[''+item.name+''] = item.value;
      })
      setDataObject(prevObjectData);
      setIsLoading(0);
    }
    //Home Route Data
    if (window.location.pathname === '/') {
      //Fetch Home Banner Data
      var { data } = await PostRequest(
        API + "getBanners",
        {},
        {
          authorization: "Bearer " + token,
        }
      );
      if (data?.responseCode === 1) {
        data?.responseData.filter((item) => {
          prevObjectData['home_banner'] = item;
        })
        setDataObject(prevObjectData);
        setIsLoading(isLoading + 50);
      }
      //Fetch Home Page Course
      var { data } = await PostRequest(
        API + "getCourses",
        {
          status: "1",
          featured: "",
          popular: "",
          page: 1,
        },
        {
          authorization: "Bearer " + token,
        }
      );
      if (data?.responseCode === 1) {
        prevObjectData['home_course_data'] = data?.responseData;
        setDataObject(prevObjectData);
        setIsLoading(isLoading + 70);
      }
      //Fetch Home Page Testimonial
      if(prevObjectData['home_testimonials'] === undefined) {
        var { data } = await PostRequest(
          API + "getTestimonials",
          {
            status: "1"
          },
          {
            authorization: "Bearer " + token,
          }
        );
        if (data?.responseCode === 1) {
          prevObjectData['home_testimonials'] = data?.responseData;
          setDataObject(prevObjectData);
          setIsLoading(isLoading + 100);
        }
      }
    }
  }
  useEffect(() => {
    if(Object.keys(dataObject).length === 0) {
      fetchData();
    }
  }, [dataObject]);
  return (
    <GoogleOAuthProvider clientId="752198572885-4g2el7a6670gkj9ed1qtdhltt56hnn3t.apps.googleusercontent.com">
      <div className="App">
        {isLoading !== 100 ? <Loader /> : (
          <DataContext.Provider value={dataObject}>
            <Router>
              <Header />
              <Routes>
                <Route path="/GoogleLogin" element={<GoogleLogin />} />
                <Route path="/" element={<Home />} />
                <Route path="/Beinstructor" element={<Beinstructor />} />
                <Route
                  path="/Selflearningdtailpage"
                  element={<Selflearningdtailpage />}
                />
                <Route
                  path="/Selflearningcoursedtailpages"
                  element={<SelflearningCourseDetailPages />}
                />
                <Route
                  path="/Liveonlinedtailpage"
                  element={<Liveonlinedtailpage />}
                />

                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/instructor-profile" element={<InstructorProfile />}>
                  <Route path="instCourses" element={<InstCourses />} />
                  <Route path="myprofile" element={<Myprofile />} />
                  <Route path="edit-profile" element={<Editprofile />} />
                  <Route path="edit-courses-form" element={<EditCoursesForm />} />
                  <Route
                    path="edit-live-courses-form"
                    element={<EditLiveCoursesForm />}
                  />
                  <Route path="add-new-course" element={<AddNewCourse />} />
                  <Route path="courses" element={<Courseslistviewloop />} />
                  <Route path="instNotification" element={<Notification />} />
                  <Route path="instPerformance" element={<Performance />} />
                  <Route path="instAccountSetting" element={<AccountSetting />} />
                  <Route path="instHelp" element={<Help />} />
                </Route>

                <Route path="/student-profile" element={<StudentProfile />}>
                  <Route path="stdCourses" element={<StdCourses />} />
                  <Route path="myprofile" element={<StdMyprofile />} />
                  <Route path="edit-profile" element={<StdEditprofile />} />
                  <Route path="stdCart" element={<StdCart />} />
                  <Route path="stdWishlist" element={<StdWishlist />} />
                  <Route path="stdNotification" element={<StdNotification />} />
                  <Route path="stdAccountSet" element={<StdAccountSetting />} />
                  <Route path="stdHelp" element={<StdHelp />} />
                  <Route path="stdCheckout" element={<StdCheckout />} />
                </Route>

                <Route
                  path="/edit-instructor-profile"
                  element={<EditInstructorProfile />}
                />
                <Route
                  path="/instructor-profile-confirmed"
                  element={<InstructorProfileConfirmed />}
                />
                <Route
                  exact
                  path={`/self-learning-course-details`}
                  element={<Selflearningcoursedetailspage />}
                />
                <Route
                  exact
                  path={`/live-online-course-details`}
                  element={<LiveOnlineClassDetails />}
                />
              </Routes>
              <Footer />
            </Router>
          </DataContext.Provider>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
