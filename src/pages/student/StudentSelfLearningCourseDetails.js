import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player';

const StudentSelfLearningCourseDetails = () => {
    const location = useLocation();
    const API = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem("token");
    const CourseDetails = location?.state?.item;

    const myStyle = {
        button: {
            width: "200px",
            height: "40px",
            border: "2px solid #021969",
            backgroundColor: "#fff",
            color: "#021969",
            fontSize: "18px",
            fontWeight: 600,
        },
        h3: {
            fontSize: "23px",
            color: "#021969",
            lineHeight: "25px",
            height: "50px"
        },
        instructorName: {
            color: "#021969"
        },
        p: {
            color: "#5E5E5E",
            fontSize: "16px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
        },
        p2: {
            fontSize: "16px",
            color: "#5E5E5E",

        },
        progress: {
            height: "5px",
        },

        img: {
            width: "100%",
            height: "200px",
            objectFit: "cover",
        },
        accrodionLabel: {
            fontSize: "20px"
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 p-2">
                        <h3 style={myStyle.h3} className="mb-3">{CourseDetails.CourseData.title}</h3>
                        <ReactPlayer
                            controls
                            width="100%"
                            height="auto"
                            url={[
                                { src: '../video/course.mp4', type: 'video/mp4' }
                            ]}
                        />
                        {/* <!-- About this course --> */}
                        <div className="container mt-5">
                            <div className="row">
                                <div className="fixed_message">
                                    <img src="../img/fixed_message.png" alt="" />
                                </div>
                                <div className="About-this-course">
                                    <h3 style={{ color: "#021969" }}>About this course</h3>
                                    <p className="mt-3">{CourseDetails.CourseData.about}</p>
                                </div>
                                <div className="mt-5" style={{ borderTop: "1px solid #ddd ", marginLeft: 'auto', marginRight: 'auto' }}></div>
                            </div>
                        </div>
                        {/* <!-- About this course end --> */}
                        {/* <!-- instructor --> */}
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row m-0">
                                        <h3 style={{ color: "#021969" }} className="mb-3">Instructor</h3>
                                        <div className="instructor-section">
                                            <div className="d-flex w-100 justify-content-between">
                                                <div>
                                                    <h4 style={{ color: "#021969" }}>{CourseDetails.CourseData.userName}</h4>
                                                </div>
                                                <div className="me-4 d-flex align-items-center">
                                                    <img
                                                        src="../../img/Vector.svg"
                                                        className="rounded float-start"
                                                        alt="..."
                                                        style={{ width: "15px", height: "15px" }}
                                                    />
                                                    <p className="text-img-1 ">00 students</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="../../img/Star 2.svg"
                                                        className="rounded float-start"
                                                        alt="..."
                                                    />
                                                    <img
                                                        src="../../img/Star 2.svg"
                                                        className="rounded float-start"
                                                        alt="..."
                                                    />
                                                    <img
                                                        src="../../img/Star 2.svg"
                                                        className="rounded float-start"
                                                        alt="..."
                                                    />
                                                    <img
                                                        src="../../img/Star 2.svg"
                                                        className="rounded float-start"
                                                        alt="..."
                                                    />
                                                    <img
                                                        src="../../img/Star 5.svg"
                                                        className="rounded float-start"
                                                        alt="..."
                                                    />
                                                    <p className="text-img-1">Ratings</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="instructor-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- instructor end --> */}
                    </div>
                    <div className="col-md-5 p-2">
                        {/* <!-- Course content --> */}
                        <div className="container mt-3">
                            <div className="row">
                                <div className="col-md-12 total-detail-box">
                                <h3 style={myStyle.h3} className="mb-3">Course content</h3>
                                    <ul className="accordion" id="accordion">
                                        {CourseDetails?.CourseData?.CourseContent?.map((item, index) => (
                                            <li key={index}>
                                                <input type="radio" name="accordion" id={`courseContent_` + index} />
                                                <label style={myStyle.accrodionLabel} htmlFor={`courseContent_` + index} className="w-100 d-flex position-relative">
                                                    <div style={{ width: '60%' }}>
                                                        {item.fileName}
                                                    </div>
                                                    <div>
                                                        <span className="time no-wrap position-absolute right-0"> {CourseDetails.CourseData.courseDuration} min</span>
                                                    </div>
                                                </label>
                                                <div className="main-content">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown
                                                        printer took a galley of type and scrambled it to make a
                                                        type specimen book.
                                                    </p>
                                                </div>
                                                {CourseDetails?.CourseData?.CourseContent?.length !== (index + 1) ? (
                                                    <div className="mt-3" style={{ borderTop: "1px solid #ddd ", marginLeft: 'auto', marginRight: '17%', width: '85%' }}></div>
                                                ) : ''}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-md-12 mt-5">
                                    <div className="detail-box mt-5 d-flex flex-column justify-content-center align-items-center">
                                        <h2 className="bb">What you'll learn</h2>
                                        <div className="learning-points">
                                            {CourseDetails?.CourseData?.studentsLearn?.map((item, index) => (
                                                <div key={index} className="row w-100 ">
                                                    <div className="rr col-2">
                                                        <div className="logo-1">
                                                            <i className="fa-solid fa-check"></i>
                                                        </div>
                                                    </div>
                                                    <div className="text-2 col">
                                                        <h6>{item?.fileName}</h6>
                                                    </div>
                                                    <div className="text-center">
                                                        <hr className="hh" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Course content end--> */}
                    </div>
                </div>
                <div className="mt-5" style={{ borderTop: "1px solid #ddd ", marginLeft: 'auto', marginRight: 'auto' }}></div>
                <div className="row d-flex flex-column justify-content-center align-items-center">
                    <h2 className="review-heading mt-3">Review</h2>
                    <div className="total-review-box">
                        <div className="first-child-total-review-box">
                            <div className="d-flex">
                                <div className="col px-3">
                                    <h5 className="h-4-0 ">4.0</h5>
                                </div>
                                <div className="col pe-3">
                                    <img
                                        src="../../img/Star 6.svg"
                                        id="img-star-6"
                                        className="rounded float-start align-middle"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <div className="col-md-8 ms-5 star-section">
                                <div className="mb-2 d-flex justify-content-center align-items-center row">
                                    <div
                                        className=""
                                        style={{ width: "5%", fontWeight: "600", fontSize: "25px" }}
                                    >
                                        5
                                    </div>
                                    <div className="mt-1 progress-box">
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: "0%" }}
                                                aria-valuenow="0"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="col" style={{ width: "5%" }}>
                                        00%
                                    </div>
                                </div>
                                <div className="mb-2 d-flex justify-content-center align-items-center row">
                                    <div
                                        className=""
                                        style={{ width: "5%", fontWeight: "600", fontSize: "25px" }}
                                    >
                                        4
                                    </div>
                                    <div className="mt-1 progress-box">
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: "100%" }}
                                                aria-valuenow="100"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="col" style={{ width: "5%" }}>
                                        100%
                                    </div>
                                </div>
                                <div className="mb-2 d-flex justify-content-center align-items-center row">
                                    <div
                                        className=""
                                        style={{ width: "5%", fontWeight: "600", fontSize: "25px" }}
                                    >
                                        3
                                    </div>
                                    <div className="mt-1 progress-box">
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: "0%" }}
                                                aria-valuenow="0"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="col" style={{ width: "5%" }}>
                                        00%
                                    </div>
                                </div>
                                <div className="mb-2 d-flex justify-content-center align-items-center row">
                                    <div
                                        className=""
                                        style={{ width: "5%", fontWeight: "600", fontSize: "25px" }}
                                    >
                                        2
                                    </div>
                                    <div className="mt-1 progress-box">
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: "0%" }}
                                                aria-valuenow="0"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="col" style={{ width: "5%" }}>
                                        00%
                                    </div>
                                </div>
                                <div className="mb-2 d-flex justify-content-center align-items-center row">
                                    <div
                                        className=""
                                        style={{ width: "5%", fontWeight: "600", fontSize: "25px" }}
                                    >
                                        1
                                    </div>
                                    <div className="mt-1 progress-box">
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style={{ width: "0%" }}
                                                aria-valuenow="0"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="col" style={{ width: "5%" }}>
                                        00%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 w-100">
                            <div className="mt-5" style={{ borderTop: "1px solid #ddd ", marginLeft: 'auto', marginRight: 'auto' }}></div>
                            <div className="px-5 mb-5 review-section">
                                <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
                                    <h6 className="add-review"> Review (00)</h6>
                                    <h6 className="add-review-plus">+ Add Review</h6>
                                </div>
                                <div className="d-flex justify-content-center align-items-baseline">
                                    <div className="pe-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                        >
                                            <circle cx="15" cy="15" r="15" fill="#A9B7B8" />
                                            <path
                                                d="M21 12C21 15.3137 18.3137 19 15 19C11.6863 19 9 15.3137 9 12C9 8.68629 11.6863 6 15 6C18.3137 6 21 8.68629 21 12Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M6 23.5C6 23.5 8 19 15 19C22 19 24 23.5 24 23.5"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="d-flex flex-column   w-100 mx-2">
                                        <div className="mb-2 d-flex align-items-center mt-1 text-left">
                                            <h6 className="review-username">RedHibisCus</h6>
                                            <div className="text-right">
                                                <img src="../../img/Star 2.svg" alt=".." />
                                                <img src="../../img/Star 2.svg" alt=".." />
                                                <img src="../../img/Star 2.svg" alt=".." />
                                                <img src="../../img/Star 2.svg" alt=".." />
                                                <img src="../../img/Star 5.svg" alt=".." />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="review-para">
                                                Review in the United States on September 24, 2020
                                            </p>
                                            <p className="review-details-para">
                                                Lorem Ipsum is a dummy Text
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5" style={{ borderTop: "1px solid #ddd ", marginLeft: 'auto', marginRight: 'auto' }}></div>
            </div>
        </>
    );

}

export default StudentSelfLearningCourseDetails;