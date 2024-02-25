import React, { useEffect, useState } from "react";
import useHttp from "../Hooks/useHttp";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

const EditLiveCoursesForm = () => {
  const token = localStorage.getItem("token");
  const { PostRequest } = useHttp();
  const navigate = useNavigate();
  // State to manage dynamic input values
  const [CategoryData, setCategoryData] = useState([]);
  const [LanguageList, setLanguageList] = useState([]);
  const [TopicsData, setTopicsData] = useState([]);
  const location = useLocation();
  const courseEdit = location?.state?.items;
  const [formData, setFormData] = useState({
    _id: courseEdit._id,
    categoryId: courseEdit?.categoryId,
    subCategoryId: "65a9efb82e906dc29bd6dd32",
    topicId: courseEdit?.topicId,
    languageId: courseEdit?.languageId,
    title: courseEdit?.title,
    about: courseEdit?.about,
    CourseContent: courseEdit?.CourseContent,
    image: "",
    studentsLearn: courseEdit?.studentsLearn,
    courseFee: courseEdit?.courseFee,
    courseType: 2,
    courseDuration: courseEdit?.courseDuration,
    discount: "0",
    liveUrl: courseEdit?.liveUrl,
    liveDate: courseEdit?.liveDate,
    liveTime: courseEdit?.liveTime,
    platforms: courseEdit?.platforms,
  });

  const handleChange = async (event) => {
    const { name, type, value } = event.target;

    // Handle non-file inputs
    if (
      name === "CourseContent" ||
      name === "CourseContentPDF" ||
      name === "CourseContentVideo" ||
      name === "studentsLearn"
    ) {
      const index = Number(event.target.dataset.index);
      const newArray = formData[name].map((item, i) =>
        i === index
          ? {
              ...item,
              [type === "file" ? "fileUrl" : "fileName"]:
                type === "file" ? value : value, // files[0]
            }
          : item
      );

      setFormData((prevData) => ({
        ...prevData,
        [name]: newArray,
      }));
    } else {
      // Handle other inputs
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "file" ? value : value, // files[0]
      }));
    }
  };

  const handleSubmit = async () => {
    const { data } = await PostRequest(API + "editCourse", formData, {
      authorization: "Bearer " + token,
    });
    if (data?.responseCode === 1) {
      toast.success(data?.responseText);
      navigate("/instructor-profile/instCourses");
    } else {
      toast.error(data?.responseText);
    }
  };
  const addCourseContent = () => {
    if (formData.CourseContent.length <= 3) {
      setFormData((prevData) => ({
        ...prevData,
        CourseContent: [
          ...prevData.CourseContent,
          {
            fileName: "",
          },
        ],
      }));
    } else {
      toast.error("You can not add more");
    }
  };

  const addStudentsLearn = () => {
    if (formData.studentsLearn.length <= 3) {
      setFormData((prevData) => ({
        ...prevData,
        studentsLearn: [
          ...prevData.studentsLearn,
          {
            fileName: "",
          },
        ],
      }));
    } else {
      toast.error("You can not add more");
    }
  };

  const getCategoryData = async () => {
    const { data } = await PostRequest(
      API + "getCategory",
      {},
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      setCategoryData(data?.responseData);
    } else {
      toast.error(data?.responseText);
    }
  };
  const getTopicsData = async () => {
    const { data } = await PostRequest(
      API + "getTopics",
      {},
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      setTopicsData(data?.responseData);
    } else {
      toast.error(data?.responseText);
    }
  };
  const getLanguageData = async () => {
    const { data } = await PostRequest(
      API + "LanguageList",
      {},
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      setLanguageList(data?.responseData);
    } else {
      toast.error(data?.responseText);
    }
  };
  useEffect(() => {
    getCategoryData();
    getTopicsData();
    getLanguageData();
  }, []);

  const myStyle = {
    button: {
      height: "20px",
      fontSize: "60%",
      height: "25px",
      margin: "2px",
      borderRadius: "3px",
      backgroundColor: "#fff",
      border: "2px solid #ddd",
    },
  };
  return (
    <>
      <ToastContainer />
      <div className="row w-100">
        <form id="courseadd">
          <div className="d-flex flex-column align-items-start">
            <h5 className="Course-Title">Course Title</h5>
            <div className="row w-100">
              <div className="col-md-6">
                <label className="Add-response-text">Enter Course Name</label>
                <br />
                <input
                  type="text"
                  id="Add-response"
                  name="title"
                  placeholder="Add response"
                  onChange={handleChange}
                  defaultValue={formData.title}
                />
              </div>
              <div className="col-md-6">
                <label className="Add-response-text">About Course</label>
                <br />
                <input
                  type="text"
                  id="Add-response"
                  name="about"
                  placeholder="Add response"
                  onChange={handleChange}
                  defaultValue={formData.about}
                />
              </div>
            </div>
            <div className="w-100">
              <h5 className="Course-Title">Course Content</h5>
              <div className="w-100">
                <div className="col-md-12">
                  <label className="Add-response-text">
                    You must enter at least 4 responses
                  </label>
                  <br />
                  <div className="d-flex align-items-end flex-column">
                    {formData.CourseContent.length > 0
                      ? formData.CourseContent.map((item, index) => (
                          <input
                            key={index}
                            type="text"
                            className="mb-3"
                            id="Add-response"
                            name="CourseContent"
                            defaultValue={item.fileName}
                            placeholder="Add response"
                            onChange={handleChange}
                            data-index={index}
                          />
                        ))
                      : ""}
                    <button
                      onClick={addCourseContent}
                      type="button"
                      className=" btn text-end Add-more-responses"
                    >
                      + Add More Course Content
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100">
              <h5 className="Course-Title pt-0">
                What will students learn in your course?
              </h5>
              <div className="w-100">
                <div className="col-md-12">
                  <label className="Add-response-text">
                    You must enter at least 4 responses
                  </label>
                  <br />
                  <div className="d-flex align-items-end flex-column">
                    {formData.studentsLearn.length > 0
                      ? formData.studentsLearn.map((item, index) => (
                          <input
                            key={index}
                            type="text"
                            id="Add-response"
                            name="studentsLearn"
                            defaultValue={item.fileName}
                            className="mb-2"
                            placeholder="Add response"
                            onChange={handleChange}
                            data-index={index}
                          />
                        ))
                      : ""}

                    <button
                      type="button"
                      onClick={addStudentsLearn}
                      className=" btn text-end Add-more-responses"
                    >
                      + Add more responses
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-100">
              <h5 className="Course-Title pt-0">Course Details</h5>
              <div className="d-flex justify-content-between w-100">
                <div className="col-4 enter-course-name-field">
                  <label className="Add-response-text">
                    Select Course Category
                  </label>
                  <br />
                  <select
                    className="category-select"
                    aria-label="Default select example"
                    value={formData.categoryId}
                    name="categoryId"
                    onChange={handleChange}
                  >
                    <option disabled>Select Course Category</option>
                    {CategoryData &&
                      CategoryData.map((item, index) => (
                        <option
                          key={index}
                          value={item?._id}
                          selected={item?._id === formData.categoryId}
                        >
                          {item?.categoryName}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-7">
                  <label className="Add-response-text">
                    Select Course Topic
                  </label>
                  <div className="d-flex flex-column align-items-end">
                    <select
                      className="category-select  "
                      aria-label="Default select example"
                      name="topicId"
                      value={formData.topicId}
                      onChange={handleChange}
                    >
                      <option selected>Course Topic</option>
                      {TopicsData &&
                        TopicsData.map((item, index) => {
                          return (
                            <option
                              selected={item?._id === formData.topicId}
                              key={index}
                              value={item?._id}
                            >
                              {item?.TopicsName}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <h5 className="Course-Title mt-3 pt-0">Upload URL</h5>
            <div className="row w-100">
              <div className="col-md-8">
                <label className="Add-response-text">
                  Enter live course link
                </label>
                <br />
                <input
                  type="text"
                  id="Add-response"
                  name="liveUrl"
                  placeholder="Enter link"
                  defaultValue={formData.liveUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="Add-response-text">
                  Course hosting platforms
                </label>
                <br />
                <input
                  type="text"
                  id="Add-response"
                  name="platforms"
                  placeholder="Enter Name of hosting platform"
                  defaultValue={formData.platforms}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <h5 className="About-Course">Language</h5>
              <label className="Add-response-text">
                Please select Language
              </label>
              <div className="w-100">
                <div className="col-md-12">
                  <select
                    className="category-select  "
                    aria-label="Default select example"
                    name="languageId"
                    onChange={handleChange}
                    value={formData.languageId}
                  >
                    <option selected>Add Language</option>
                    {LanguageList.map((item, index) => {
                      return (
                        <option
                          key={index}
                          selected={item?._id === formData.languageId}
                          value={item._id}
                        >
                          {item.languageName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h5 className="About-Course">Date & Time</h5>
              <div className="w-100">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-5">
                      <label className="Add-response-text">Enter Date</label>
                      <br />
                      <input
                        type="text"
                        id="Add-response"
                        name="liveDate"
                        defaultValue={formData.liveDate}
                        placeholder="DD/MM/YY"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-7">
                      <label className="Add-response-text">Enter Time</label>
                      <div className="row d-flex">
                        <div className="col-md-8 d-flex align-items-center">
                          <input
                            className="text-center "
                            type="text"
                            id="Add-response"
                            name="liveTime"
                            defaultValue={formData.liveTime}
                            onChange={handleChange}
                            placeholder="00"
                          />
                          <span className="px-2">:</span>
                          <input
                            className="text-center "
                            type="text"
                            id="Add-response"
                            name="liveTime"
                            defaultValue={formData.liveTime}
                            onChange={handleChange}
                            placeholder="00"
                          />
                        </div>
                        <div className="col-md-4 d-flex flex-column">
                          <button type="button" style={myStyle.button}>
                            AM
                          </button>
                          <button type="button" style={myStyle.button}>
                            PM
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <h5 className="About-Course">Course Fee</h5>
              <div className="w-100">
                <div className="col-md-12">
                  <label className="Add-response-text">Enter Course Fee</label>
                  <br />
                  <input
                    type="number"
                    className="category-select"
                    name="courseFee"
                    placeholder="In Rupees"
                    defaultValue={formData.courseFee}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="publish-courses1">
              <button
                onClick={() => handleSubmit()}
                type="button"
                id="publish-courses"
                className="btn mb-3"
              >
                PUBLISH COURSES
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditLiveCoursesForm;
