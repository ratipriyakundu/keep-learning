import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useOutletContext } from "react-router-dom";
import useHttp from "../Hooks/useHttp";
import { ToastContainer, toast } from "react-toastify";
const API = process.env.REACT_APP_API_URL;

export default function Myprofile() {

  const token = localStorage.getItem("token");
  const { PostRequest } = useHttp();
  const dataObject = useOutletContext();
  const [profile, setProfile] = useState(dataObject.profile);
  const [name, setName] = useState(dataObject.name);
  const [mobile, setMobile] = useState(dataObject.mobile);
  const [email, setEmail] = useState(dataObject.email);
  const [Id, setId] = useState(dataObject._id);
  const [about, setAbout] = useState(dataObject.about);
  const [qualification, setQualification] = useState(dataObject.qualification);
  const [experience, setExperience] = useState(dataObject.experience);
  const [teach, setTeach] = useState(dataObject.teach);
  const [VideoBase, setVideoBase] = useState("");
  const [VideoExtension, setVideoExtension] = useState("");
  const [ContentBase, setContentBase] = useState("");
  const [ContentExtension, setContentExtension] = useState("");
  const [demoVideo, setDemoVideo] = useState(dataObject.demoVideo);
  const [demoContent, setDemoContent] = useState(dataObject.demoContent);
  const navigate = useNavigate();
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result.split(",")[1];
        const extensionMatch = file.name.match(/\.([^.]+)$/);
        const extension = extensionMatch[1].toLowerCase();
        const FormData = {
          file: base64,
          fileType: extension,
        };
        const { data } = await PostRequest(API + "updateProfile", FormData, {
          authorization: "Bearer " + token,
        });
        if (data?.responseCode === 1) {
          toast.success(data?.responseText);
        } else {
          toast.error(data?.responseText);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const myRef = useRef(null);
  const clickElement = (ref) => {
    ref.current.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
  };
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const handleContent = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result.split(",")[1];
        const extensionMatch = file.name.match(/\.([^.]+)$/);
        const extension = extensionMatch[1].toLowerCase();
        setContentBase(base64);
        setContentExtension(extension);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoFile = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result.split(",")[1];
        const extensionMatch = file.name.match(/\.([^.]+)$/);
        const extension = extensionMatch[1].toLowerCase();
        setVideoBase(base64);
        setVideoExtension(extension);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const FormData = {
      id: Id,
      name,
      mobile,
      email,
      about,
      qualification,
      experience,
      teach,
      demoVideo: VideoBase,
      demoContent: ContentBase,
      VideoExtension,
      ContentExtension,
    };
    const { data } = await PostRequest(API + "updateUser", FormData, {
      authorization: "Bearer " + token,
    });
    if (data?.responseCode === 1) {
      toast.success(data?.responseText);
    } else {
      toast.error(data?.responseText);
    }
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="row">
        <div className="d-flex align-items-start">
          <div className="row p-5">
            <div className="col-md-3">
              <div className="profile1-2">
                <div className="text-center">
                  <img
                    src={profile !== null ? profile : "../img/profile.png"}
                    className="rounded-profile-image"
                  />
                  <input
                    onChange={handleFileChange}
                    accept="image/*"
                    type="file"
                    ref={myRef}
                    className="d-none"
                  />
                  <Link
                    onClick={() => clickElement(myRef)}
                    className="edit-profile d-block"
                  >
                    Upload profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <form className="mainform">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="name-1"
                      name="name"
                      placeholder="Name*"
                      defaultValue={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="name-2"
                      name="name"
                      placeholder="Last Name*"
                      defaultValue={name}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <input
                      type="email"
                      id="email-1"
                      name="email"
                      placeholder="E-mail *"
                      defaultValue={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      id="number-1"
                      name="number"
                      placeholder="Contact Number"
                      defaultValue={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <input
                      type="text"
                      id="About-Yourself"
                      name=""
                      placeholder="About Yourself"
                      defaultValue={about}
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <input
                      type="number"
                      id="Qualification"
                      name=""
                      placeholder="Qualification*"
                      defaultValue={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      id="experience"
                      name=""
                      placeholder="Teaching Experience"
                      defaultValue={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <input
                      type="text"
                      id="what-you"
                      name=""
                      defaultValue={teach}
                      placeholder="What you are going to teach ? "
                      onChange={(e) => setTeach(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6" id="file-1">
                    <label className="aa">Upload demo video of 30 min</label>
                    <input
                      type="file"
                      name=""
                      placeholder=""
                      onChange={handleVideoFile}
                    />
                    {/* <a
                      href={`${HOME}${demoVideo}`}
                      className="btn btn-success mt-2"
                    >
                      Download
                    </a> */}
                  </div>
                  <div className="col-md-6" id="file-2">
                    <label className="aa">
                      Upload demo course content as pdf/word file format
                    </label>
                    <input type="file" name="" onChange={handleContent} />
                    {/* <a
                      href={`${HOME}${demoContent}`}
                      className="btn btn-success mt-2"
                    >
                      Download
                    </a> */}
                  </div>
                </div>
                <br />
                <div className="text-end">
                  <button
                    type="button"
                    id="button-p"
                    onClick={() => handleSubmit()}
                    className="btn btn-primary btn-sm rounded px-5"
                  >
                    UPDATE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
