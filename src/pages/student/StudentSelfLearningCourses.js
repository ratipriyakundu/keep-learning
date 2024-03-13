import React, { useEffect, useState } from "react";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import StdCourseList from "../../components/StdCourseList";

const StudentSelfLearningCourses = () => {

    const dataObject = useOutletContext();
    const [CartData, setCartData] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate("/");
        } else {
            setCartData(dataObject.cart_data);
        }
    }, []);

    const myStyle = {
        button: {
            backgroundColor: "#021969",
            color: "#fff",
            fontSize: "18px",
            fontWeight: 500,
            height: "40px",
            borderRadius: "7px",
            textDecoration: "none",
            padding: "8px 25px"
        },
        button2: {
            fontSize: "20px",
            border: "none",
            backgroundColor: "transparent",
            color: "#021969",
            marginRight: "100px",
        },
    };

    return (
        <>
            <div className="row w-100">
                <div
                    className="row w-100 px-5 d-flex  justify-content-between"
                    id="search"
                >
                    <div className="col-8 w-50 border rounded px-3 p-1 d-flex bordercol">
                        <img alt="img" className="px-3" src="../img/search-icon.svg" />
                        <input
                            className="border-0 w-100"
                            type="text"
                            placeholder="Search  Course"
                        />
                    </div>
                    <div className="col-4">
                        <Link to="/self-learning-courses" style={myStyle.button} type="submit" name="searchcourses">
                            BUY MORE COURSES
                        </Link>
                    </div>
                </div>
                <div className="row mt-5 w-100 px-5" id="switchcourses">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                style={myStyle.button2}
                                className=" active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                            >
                                Self-learning Courses
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                style={myStyle.button2}
                                className=""
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                                tabIndex="-1"
                            >
                                Live Online Class
                            </button>
                        </li>
                    </ul>
                    <StdCourseList CartData={CartData && CartData} />
                </div>
            </div>
        </>
    );

}
export default StudentSelfLearningCourses;