import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useHttp from "../Hooks/useHttp";
const API = process.env.REACT_APP_API_URL;
const HOME = process.env.REACT_APP_HOME;
export default function Myprofile() {
  const token = localStorage.getItem("token");
  const { PostRequest } = useHttp();
  const [profile, setProfile] = useState({});
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [Id, setId] = useState("");
  const [about, setAbout] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [teach, setTeach] = useState("");
  const [VideoBase, setVideoBase] = useState("");
  const [VideoExtension, setVideoExtension] = useState("");
  const [ContentBase, setContentBase] = useState("");
  const [ContentExtension, setContentExtension] = useState("");
  const [demoVideo, setDemoVideo] = useState("");
  const [demoContent, setDemoContent] = useState("");
  const navigate = useNavigate();
  const profileDetails = useCallback(async () => {
    const { data } = await PostRequest(
      API + "profileDetails",
      {},
      { authorization: "Bearer " + token }
    );
    if (data?.responseCode === 1) {
      setId(data?.responseData._id);
      setName(data?.responseData.name);
      setMobile(data?.responseData.mobile);
      setEmail(data?.responseData.email);
      setAbout(data?.responseData.about);
      setProfile(HOME + data?.responseData.profile);
      setQualification(data?.responseData.qualification);
      setExperience(data?.responseData.experience);
      setTeach(data?.responseData.teach);
      setDemoVideo(data?.responseData.demoVideo);
      setDemoContent(data?.responseData.demoContent);
    }
  }, []);
  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      profileDetails();
    }
    return profileDetails;
  }, [profileDetails]);

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
    const { data, error } = await PostRequest(API + "updateUser", FormData, {
      authorization: "Bearer " + token,
    });
    if (data?.responseCode === 1) {
      profileDetails();
    }
  };

  return (
    <>
      <div className="row">
        <div className="d-flex align-items-start">
          <div className="row p-5">
            <div className="col-md-3">
              <div className="profile1-2">
                <div className="text-center">
                  <img
                    src={profile}
                    id="profile1-1"
                    className=" w-50"
                    alt="img"
                  />
                  <Link
                    className="text-decoration-none"
                    to="/instructor-profile/edit-profile"
                  >
                    <p className="edit-profile">Edit Profile</p>
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
                <div className="row">
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
                <div className="row">
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
                <div className="row">
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
                <div className="row">
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
                <div className="row">
                  <div className="col-md-6" id="file-1">
                    <label className="aa">Upload demo video of 30 min</label>
                    <input
                      type="file"
                      name=""
                      placeholder=""
                      onChange={handleVideoFile}
                    />
                    <a
                      href={`${HOME}${demoVideo}`}
                      className="btn btn-success mt-2"
                    >
                      Download
                    </a>
                  </div>
                  <div className="col-md-6" id="file-2">
                    <label className="aa">
                      Upload demo course content as pdf/word file format
                    </label>
                    <input type="file" name="" onChange={handleContent} />
                    <a
                      href={`${HOME}${demoContent}`}
                      className="btn btn-success mt-2"
                    >
                      Download
                    </a>
                  </div>
                </div>
                <br />
                <div className="text-end">
                  <button
                    type="button"
                    id="button-p"
                    onClick={() => handleSubmit()}
                    className="btn btn-primary rounded px-5"
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