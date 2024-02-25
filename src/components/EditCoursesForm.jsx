import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import useHttp from "../Hooks/useHttp";
import { useLocation, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;
const EditCoursesForm = () => {
  const token = localStorage.getItem("token");
  const { PostRequest } = useHttp();
  const navigate = useNavigate();
  const location = useLocation();
  const courseEdit = location?.state?.items;
  const [CategoryData, setCategoryData] = useState([]);
  const [LanguageList, setLanguageList] = useState([]);
  const [TopicsData, setTopicsData] = useState([]);
  // form data
  const [formData, setFormData] = useState({
    _id: courseEdit._id,
    categoryId: courseEdit?.categoryId,
    subCategoryId: "65a9efb82e906dc29bd6dd32",
    topicId: courseEdit?.topicId,
    languageId: courseEdit?.languageId,
    title: courseEdit?.title,
    about: courseEdit?.about,
    CourseContent: courseEdit?.CourseContent,
    CourseContentPDF: courseEdit?.CourseContentPDF,
    CourseContentVideo: courseEdit?.CourseContentVideo,
    image: "",
    studentsLearn: courseEdit?.studentsLearn,
    courseFee: courseEdit?.courseFee,
    courseType: 1,
    courseDuration: courseEdit?.courseDuration,
    discount: "0",
  });
  // Function to add a new dynamic input
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
  const addCourseContentPDF = () => {
    if (formData.CourseContentPDF.length <= 3) {
      setFormData((prevData) => ({
        ...prevData,
        CourseContentPDF: [
          ...prevData.CourseContentPDF,
          {
            fileName: "",
            fileUrl: "",
          },
        ],
      }));
    } else {
      toast.error("You can not add more");
    }
  };
  const addCourseUploadVideo = () => {
    if (formData.CourseContentVideo.length <= 3) {
      setFormData((prevData) => ({
        ...prevData,
        CourseContentVideo: [
          ...prevData.CourseContentVideo,
          {
            fileName: "",
            fileUrl: "",
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
  // end function dynamic input

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
    for (const [key, value] of Object.entries(formData)) {
      if (formData[key] === "") {
        toast.error(key + " Input can`t be Empty");
        return false;
      }
    }
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
  const imageRef = useRef(null);
  const ContentRef = useRef(null);
  const clickElement = (ref) => {
    ref.current.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1,
      })
    );
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="row w-100">
        <form className="w-100" id="courseadd">
          <div className=" w-100">
            <h5 className="Course-Title">Course Title</h5>
            <div className="d-flex justify-content-between w-100">
              <div className="enter-course-name-field">
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
              <div className="col-7">
                <label className="Add-response-text">About Course</label>
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
          <div className=" w-100">
            <h5 className="Course-Title m-0 p-0">
              Add course content as PDF / Word / Excel
            </h5>

            {formData.CourseContentPDF.length > 0
              ? formData.CourseContentPDF.map((item, index) => (
                  <div
                    key={index}
                    className=" w-100 d-flex justify-content-between"
                  >
                    <div className="enter-course-name-field">
                      <label className="Add-response-text">
                        Upload Pdf/Word/Excel
                      </label>
                      <br />
                      <input
                        type="file"
                        id="Add-response"
                        className="mb-2 file-input-label"
                        name="CourseContentPDF"
                        onChange={handleChange}
                        ref={ContentRef}
                        data-index={index}
                      />
                      {/* <button
                        id="Add-response"
                        type="button"
                        onClick={() => clickElement(ContentRef)}
                        className="mb-2 text-center"
                      >
                        Upload Content
                      </button> */}
                    </div>
                    <div className="col-7">
                      <label className="Add-response-text">Document Name</label>
                      <br />
                      <input
                        style={{ color: "#5E5E5E" }}
                        type="text"
                        id="Add-response"
                        name="CourseContentPDF"
                        defaultValue={item.name}
                        placeholder="Write Document name"
                        onChange={handleChange}
                        data-index={index}
                      />
                    </div>
                  </div>
                ))
              : ""}
            <button
              type="button"
              onClick={addCourseContentPDF}
              className="w-100 btn text-end Add-more-responses"
            >
              + Add more PDF
            </button>
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
                <label className="Add-response-text">Select Course Topic</label>
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
          <div className=" w-100">
            <h5 className="Course-Title m-0 p-0">Upload Video</h5>
            {formData.CourseContentVideo.length > 0
              ? formData.CourseContentVideo.map((item, index) => (
                  <div
                    key={index}
                    className=" w-100 d-flex justify-content-between"
                  >
                    <div className="enter-course-name-field">
                      <label className="Add-response-text">
                        Upload Video {index + 1}
                      </label>
                      <br />
                      <input
                        type="file"
                        id="Add-response"
                        className="mb-2 "
                        name="CourseContentVideo"
                        onChange={handleChange}
                        ref={ContentRef}
                        data-index={index}
                      />
                      {/* <button
                        id="Add-response"
                        type="button"
                        onClick={() => clickElement(ContentRef)}
                        className="mb-2 text-center"
                      >
                        Upload Video
                      </button> */}
                    </div>
                    <div className="col-7">
                      <label className="Add-response-text">
                        Write Video Name
                      </label>
                      <br />
                      <input
                        style={{ color: "#5E5E5E" }}
                        type="text"
                        id="Add-response"
                        name="CourseContentVideo"
                        defaultValue={item.fileName}
                        placeholder="Write Video Name"
                        onChange={handleChange}
                        data-index={index}
                      />
                    </div>
                  </div>
                ))
              : ""}
            <button
              type="button"
              onClick={addCourseUploadVideo}
              className="w-100 btn text-end Add-more-responses"
            >
              + Add more Video
            </button>
          </div>
          <div className="w-100 ">
            <div className="w-100 d-flex">
              <div className="col-4 p-3">
                <h5 className="Course-Title pt-0">Language</h5>
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
              <div className="col-4 p-3">
                <h5 className="Course-Title pt-0">Duration</h5>
                <div className="w-100">
                  <div className="col-md-12">
                    <input
                      type="number"
                      className="category-select"
                      name="courseDuration"
                      placeholder="In hours"
                      onChange={handleChange}
                      defaultValue={formData.courseDuration}
                    />
                  </div>
                </div>
              </div>

              <div className="col-4 p-3">
                <h5 className="Course-Title pt-0">Course Fee</h5>
                <div className="w-100">
                  <div className="col-md-12">
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
            </div>
            <div className="col-4 p-3">
              <h5 className="Course-Title pt-0">Course Image</h5>
              <div className="w-100">
                <input
                  type="file"
                  id="Add-response"
                  className="course-topic-field d-none"
                  name="image"
                  onChange={handleChange}
                  ref={imageRef}
                />
                <button
                  id="Add-response"
                  type="button"
                  onClick={() => clickElement(imageRef)}
                  className="mb-2 text-center pointer-event"
                >
                  Select Image
                </button>
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

export default EditCoursesForm;
