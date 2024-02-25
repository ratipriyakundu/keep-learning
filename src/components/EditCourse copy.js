import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const EditCourse = () => {
  // State to manage dynamic input values
  const [dynamicInputs, setDynamicInputs] = useState([]);
  const [dynamicVideo, setdynamicVideo] = useState([]);

  // Function to add a new dynamic input
  const addDynamicInput = () => {
    setDynamicInputs([...dynamicInputs, ""]);
  };
  const addDynamicVideo = () => {
    setdynamicVideo([...dynamicVideo, ""]);
  };
  const [formData, setFormData] = useState({
    title: "",
    about: "",
    contentFile: [],
    videoFile: [],
    comment: "",
    language: [],
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
  const handleChange = (event) => {
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
              { type: extension, content: base64, size: getFileSizeInMB(file) },
            ],
          }));
        };

        reader.readAsDataURL(file);
      }
    } else {
      // Handle non-file inputs
      setFormData((prevData) => ({
        ...prevData,
        [name]: event.target.value,
      }));
    }
  };
  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="row w-100">
        <div className="d-flex flex-column align-items-start edit-course-form">
          <h5 className="Course-Title">Course Title</h5>
          <form className="w-100">
            <div className="col-md-12">
              <label className="Add-response-text">
                You must enter at least 4 responses
              </label>
              <br />
              <input
                type="text"
                id="Add-response"
                name="title"
                placeholder="Add response"
                onChange={handleChange}
              />
              <p className="Add-more-responses">+Add more responses</p>
            </div>
          </form>

          <h5 className="About-Course">About Course</h5>
          <form className="w-100">
            <div className="col-md-12">
              <label className="Add-response-text">
                You must enter at least 4 responces
              </label>
              <br />
              <input
                type="text"
                id="Add-response"
                name="about"
                placeholder="Add response"
                onChange={handleChange}
              />
              <p className="Add-more-responses">+Add more responses</p>
            </div>
          </form>

          <h5 className="About-Course">
            Add course content as PDF / Word / Excel
          </h5>
          <form className="w-100">
            <div className="col-md-12">
              <label className="Add-response-text">
                You must enter at least 4 responces
              </label>
              <br />
              <input
                type="file"
                className="mb-2"
                name="contentFile"
                onChange={handleChange}
              />
              {dynamicInputs.map((inputValue, index) => (
                <input
                  key={index}
                  type="file"
                  className="mb-2"
                  name="contentFile"
                  onChange={handleChange}
                />
              ))}
              <p
                onClick={() => addDynamicInput("contentFile")}
                className="Add-more-responses"
              >
                +Add more responses
              </p>
            </div>
          </form>
        </div>
        <div className="row ">
          <div className="col-md-4 upload-section">
            <h5 className="About-Course">Upload Video</h5>
            <form className="w-100">
              <div className="col-md-12">
                <label className="Add-response-text">
                  You must enter at least 4 responces
                </label>
                <br />
                <input
                  type="file"
                  id="Add-response"
                  name="videoFile"
                  placeholder="Add response"
                  onChange={handleChange}
                />

                {dynamicVideo.map((inputValue, index) => (
                  <input
                    key={index}
                    type="file"
                    className="mb-2"
                    name="videoFile"
                    onChange={handleChange}
                  />
                ))}
                <p
                  onClick={() => addDynamicVideo("contentFile")}
                  className="Add-more-responses"
                >
                  +Add more responses
                </p>
              </div>
            </form>

            <h5 className="About-Course">Language</h5>
            <form className="w-100">
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
                  onChange={handleChange}
                />
                <p className="Add-more-responses">+Add more responses</p>
              </div>
            </form>
          </div>
          <div className="col-md-8">
            <form className="form-14">
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
                <p className="Add-more-responses">+Add more responses</p>
              </div>
            </form>
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
      </div>
    </>
  );
};

export default EditCourse;
