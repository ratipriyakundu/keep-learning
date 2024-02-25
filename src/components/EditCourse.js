import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useHttp from "../Hooks/useHttp";
import { useLocation, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;
const HOME = process.env.REACT_APP_HOME;
const EditCourse = () => {
  const token = localStorage.getItem("token");
  const { PostRequest } = useHttp();
  const navigate = useNavigate();
  const location = useLocation();
  // State to manage dynamic input values
  const [dynamicInputs, setDynamicInputs] = useState([]);
  const [dynamicVideo, setdynamicVideo] = useState([]);
  const [CategoryData, setCategoryData] = useState([]);
  const [SubCategoryData, setSubCategoryData] = useState([]);
  const [TopicsData, setTopicsData] = useState([]);
  const [EditCourseData] = useState(
    location?.state?.items ? location?.state?.items : {}
  );
  // Function to add a new dynamic input
  const addDynamicInput = () => {
    setDynamicInputs([...dynamicInputs, ""]);
  };
  const addDynamicVideo = () => {
    setdynamicVideo([...dynamicVideo, ""]);
  };
  const [formData, setFormData] = useState({
    id: EditCourseData ? EditCourseData._id : "",
    title: EditCourseData ? EditCourseData.title : "",
    about: EditCourseData ? EditCourseData.about : "",
    contentFile: [],
    videoFile: [],
    comment: EditCourseData ? EditCourseData.comment : "",
    language: [],
    categoryId: "",
    image: [],
    subCategoryId: "",
    topicId: "",
    courseFee: EditCourseData ? EditCourseData.courseFee : "",
    courseDuration: EditCourseData ? EditCourseData.courseDuration : "",
  });

  function getFileSizeInMB(file) {
    const fileSizeInBytes = file.size;
    const fileSizeInMB = fileSizeInBytes / (1024 * 1024);

    if (fileSizeInMB > 5) {
      toast.error("Please select max 5 MB File only");
      return false;
    }
    return fileSizeInMB.toFixed(2);
  }
  const handleChange = async (event) => {
    const { name, type, files } = event.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result.split(",")[1];
          const extensionMatch = file.name.match(/\.([^.]+)$/);
          const extension = extensionMatch[1].toLowerCase();
          setFormData((prevData) => ({
            ...prevData,
            [name]: [
              ...prevData[name],
              {
                type: extension,
                content: base64,
                size: getFileSizeInMB(file),
              },
            ],
          }));
        };

        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: event.target.value,
      }));
    }
  };

  const handleSubmit = async () => {
    // return;
    if (formData.categoryId === "") {
      toast.error("plese select category");
      return false;
    }
    if (formData.subCategoryId === "") {
      toast.error("plese select sub category");
      return false;
    }
    if (location?.state?.items) {
      const { data, error } = await PostRequest(API + "editCourse", formData, {
        authorization: "Bearer " + token,
      });
      if (data?.responseCode === 1) {
        toast.success(data?.responseText);
        navigate("/instructor-profile/instCourses");
      } else {
        toast.error(data?.responseText);
      }
    } else {
      const { data } = await PostRequest(API + "addCourse", formData, {
        authorization: "Bearer " + token,
      });
      if (data?.responseCode === 1) {
        toast.success(data?.responseText);
        navigate("/instructor-profile/instCourses");
      } else {
        toast.error(data?.responseText);
      }
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
  const getToicsData = async () => {
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
  useEffect(() => {
    getCategoryData();
    getToicsData();
  }, []);
  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="row w-100">
        <form>
          <div className="d-flex flex-column align-items-start edit-course-form">
            <h5 className="Course-Title">Course Title</h5>
            <div className="w-100">
              <div className="col-md-12">
                <label className="Add-response-text">
                  You must enter at least 4 responces
                </label>
                <br />
                <input
                  type="text"
                  id="Add-response"
                  name="title"
                  placeholder="Add response"
                  onChange={handleChange}
                  defaultValue={formData.title}
                />
                {/* <p className="Add-more-responses">+Add more responses</p> */}
              </div>
            </div>

            <h5 className="About-Course">About Course</h5>
            <div className="w-100">
              <div className="col-md-12">
                <label className="Add-response-text">
                  You must enter at least 4 responces
                </label>
                <br />
                <input
                  type="text"
                  id="Add-response"
                  name="about"
                  defaultValue={formData.about}
                  placeholder="Add response"
                  onChange={handleChange}
                />
                {/* <p className="Add-more-responses">+Add more responses</p> */}
              </div>
            </div>
            <div>
              <h5 className="About-Course">Course Image</h5>
              <input
                type="file"
                id="Add-response"
                name="image"
                onChange={handleChange}
              />
            </div>
            <h5 className="About-Course">
              Add course content as PDF / Word / Excel
            </h5>
            <div className="w-100">
              <div className="col-md-12">
                <label className="Add-response-text">
                  You must enter at least 4 responces
                </label>
                <br />
                {EditCourseData?.contentFile?.length > 0 ? (
                  EditCourseData?.contentFile?.map((item, index) => {
                    return (
                      <div key={index} className="row gap-2">
                        <a
                          href={`${HOME}${item}`}
                          className="btn btn-success mt-2"
                        >
                          Download
                        </a>
                        <button
                          disabled
                          href={`${HOME}${item}`}
                          className="btn btn-success mt-2"
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <input
                    type="file"
                    className="mb-2"
                    name="contentFile"
                    onChange={handleChange}
                  />
                )}

                {dynamicInputs.map((inputValue, index) => (
                  <input
                    key={index}
                    type="file"
                    className="mb-2"
                    name="contentFile"
                    onChange={handleChange}
                  />
                ))}
                {/* <p
                onClick={() => addDynamicInput("contentFile")}
                className="Add-more-responses"
              >
                +Add more responses
              </p> */}
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4 upload-section">
              <h5 className="About-Course">Upload Video</h5>
              <div className="w-100">
                <div className="col-md-12">
                  <label className="Add-response-text">
                    You must enter at least 4 responces
                  </label>
                  <br />
                  {EditCourseData?.videoFile?.length > 0 ? (
                    EditCourseData?.videoFile?.map((item, index) => {
                      return (
                        <div className="row gap-2">
                          <a
                            href={`${HOME}${item}`}
                            className="btn btn-success mt-2"
                          >
                            Download
                          </a>
                          <button
                            disabled
                            href={`${HOME}${item}`}
                            className="btn btn-success mt-2"
                          >
                            Delete
                          </button>
                        </div>
                      );
                    })
                  ) : (
                    <input
                      type="file"
                      id="Add-response"
                      name="videoFile"
                      placeholder="Add response"
                      onChange={handleChange}
                    />
                  )}

                  {dynamicVideo.map((inputValue, index) => (
                    <input
                      key={index}
                      type="file"
                      className="mb-2"
                      name="videoFile"
                      onChange={handleChange}
                    />
                  ))}
                  {/* <p
                  onClick={() => addDynamicVideo("contentFile")}
                  className="Add-more-responses"
                >
                  +Add more responses
                </p> */}
                </div>
              </div>

              <h5 className="About-Course">Language</h5>
              <div className="w-100">
                <div className="col-md-12">
                  <label className="Add-response-text">
                    You must enter at least 4 responces
                  </label>
                  <br />
                  <input
                    type="text"
                    id="Add-response"
                    name="language"
                    placeholder="Add Language"
                    defaultValue={formData.language[0]}
                    onChange={handleChange}
                  />
                  {/* <p className="Add-more-responses">+Add more responses</p> */}
                </div>
              </div>

              <h5 className="About-Course">Course Duration</h5>
              <div className="w-100">
                <div className="col-md-12">
                  <label className="Add-response-text">
                    You must enter at least 4 responces
                  </label>
                  <br />
                  <input
                    type="number"
                    id="Add-response"
                    name="courseDuration"
                    placeholder="Enter course Duration"
                    onChange={handleChange}
                    defaultValue={formData.courseDuration}
                  />
                  {/* <p className="Add-more-responses">+Add more responses</p> */}
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-14">
                <div className="col-md-12">
                  <label className="Add-response-text">
                    You must enter at least 4 responces
                  </label>
                  <br />
                  <input
                    type="text"
                    id="Add-response"
                    name="comment"
                    placeholder="Add Comment"
                    onChange={handleChange}
                  />
                  {/* <p className="Add-more-responses">+Add more responses</p> */}
                </div>
              </div>
              <h5 className="About-Course">Course Fee</h5>
              <div className="w-100">
                <div className="col-md-12">
                  <label className="Add-response-text">
                    You must enter at least 4 responces
                  </label>
                  <br />
                  <input
                    type="number"
                    id="Add-response"
                    name="courseFee"
                    placeholder="Enter fee amount"
                    defaultValue={formData.courseFee}
                    onChange={handleChange}
                  />
                  {/* <p className="Add-more-responses">+Add more responses</p> */}
                </div>
              </div>

              <h5 className="About-Course">Category</h5>
              <div className="d-flex ">
                <select
                  className="form-select mt-3 mb-3"
                  style={{ width: "50%" }}
                  aria-label="Default select example"
                  name="categoryId"
                  onChange={handleChange}
                >
                  <option defaultValue="" selected>
                    Add Category
                  </option>
                  {CategoryData &&
                    CategoryData.map((item, index) => {
                      return (
                        <option key={index} defaultValue={item?._id}>
                          {item?.categoryName}
                        </option>
                      );
                    })}
                </select>
                <select
                  className="form-select mt-3 mb-3"
                  style={{ width: "50%" }}
                  aria-label="Default select example"
                  name="subCategoryId"
                  onChange={handleChange}
                >
                  <option defaultValue="" selected>
                    Add Subcategory
                  </option>
                  {SubCategoryData &&
                    SubCategoryData.map((item, index) => {
                      return (
                        <option key={index} defaultValue={item?._id}>
                          {item?.subcategoryName}
                        </option>
                      );
                    })}
                </select>
              </div>
              <select
                className="form-select mt-3 mb-3"
                style={{ width: "50%" }}
                aria-label="Default select example"
                name="topicId"
                onChange={handleChange}
              >
                <option defaultValue="" selected>
                  Add Topic
                </option>
                {TopicsData &&
                  TopicsData.map((item, index) => {
                    return (
                      <option key={index} defaultValue={item?._id}>
                        {item?.TopicsName}
                      </option>
                    );
                  })}
              </select>
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

export default EditCourse;
