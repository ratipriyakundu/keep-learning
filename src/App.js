import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Beinstructor from "./pages/Beinstructor";
import Home from "./pages/Home";
import SelfLearningCourses from "./pages/SelfLearningCourses";
import Liveonlinedtailpage from "./pages/Liveonlinedtailpage";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import InstructorProfile from "./pages/InstructorProfile";
import InstructorSelfLearningCourses from "./pages/instructor/InstructorSelfLearningCourses";
import AddSelfLearningCourse from "./pages/instructor/AddSelfLearningCourse";
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
import StudentSelfLearningCourses from "./pages/student/StudentSelfLearningCourses";
import StdMyprofile from "./components/StdMyprofile";
import StdAccountSetting from "./components/StdAccountSetting";
import Cart from "./components/Cart";
import StdEditprofile from "./components/StdEditprofile";
import StdHelp from "./components/StdHelp";
import StdNotification from "./components/StdNotification";
import StdWishlist from "./components/StdWishlist";
import Checkout from "./components/Checkout";
import EditCoursesForm from "./components/EditCoursesForm";
import LiveOnlineClassDetails from "./pages/LiveOnlineClassDetails";
import SelflearningCourseDetailPages from "./pages/SelflearningCourseDetailPages";
import GoogleLogin from "./pages/GoogleLogin";
import EditLiveCoursesForm from "./components/EditLiveCoursesForm";
import StudentSelfLearningCourseDetails from "./pages/student/StudentSelfLearningCourseDetails";
import CartCountProvider from "./contexts/CartCountProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <CartCountProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/GoogleLogin" element={<GoogleLogin />} />
            <Route
              path="/self-learning-courses"
              element={<SelfLearningCourses />}
            />
            <Route path="/Beinstructor" element={<Beinstructor />} />

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
              <Route path="self-learning-courses" element={<InstructorSelfLearningCourses />} />
              <Route path="myprofile" element={<Myprofile />} />
              <Route path="edit-profile" element={<Editprofile />} />
              <Route path="add-self-learning-course" element={<AddSelfLearningCourse />} />
              <Route path="edit-courses-form" element={<EditCoursesForm />} />
              <Route
                path="edit-live-courses-form"
                element={<EditLiveCoursesForm />}
              />
              <Route path="courses" element={<Courseslistviewloop />} />
              <Route path="instNotification" element={<Notification />} />
              <Route path="instPerformance" element={<Performance />} />
              <Route path="instAccountSetting" element={<AccountSetting />} />
              <Route path="instHelp" element={<Help />} />
            </Route>

            <Route path="/student-profile" element={<StudentProfile />}>
              <Route path="self-learning-courses" element={<StudentSelfLearningCourses />} />
              <Route path="myprofile" element={<StdMyprofile />} />
              <Route path="edit-profile" element={<StdEditprofile />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="self-learning-course-details" element={<StudentSelfLearningCourseDetails />} />
              <Route path="stdWishlist" element={<StdWishlist />} />
              <Route path="stdNotification" element={<StdNotification />} />
              <Route path="stdAccountSet" element={<StdAccountSetting />} />
              <Route path="stdHelp" element={<StdHelp />} />
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
        </CartCountProvider>
      </Router>
    </div>
  );
}

export default App;
