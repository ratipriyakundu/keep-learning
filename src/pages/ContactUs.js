import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";

export default function ContactUs() {

  const [isLoading, setIsLoading] = useState(true);

  return isLoading === true ? <Loader /> : (
    <>
      {/* <!-- main content --> */}
      <div className="main-content ">
        <div className="container ">
          <div className="row" id="contact-1">
            <h2 className="mb-4">Contact Us</h2>
            <p>
              We are unlike any learning platform. Our intuitive interface and
              innovative technology helps millions
              <br />
              of L&D professionals, educators, trainers, teachers, HR leaders,
              and course creators - bring out the best in
              <br /> themselves and their learners, everyday.
            </p>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4 mt-5 p-5">
                <h6>Address :</h6>
                <p className="t-p">
                  No 390, 2nd Main Rd, <br />
                  5th Cross, Vrushabavathi Nagar,
                  <br /> Kamakshipalya,
                  <br />
                  Bangalore - 560079
                </p>
              </div>
              <div className="col-md-4 mt-5 p-5">
                <h6>Email :</h6>
                <p className="t-p">
                  <Link to="">optechcular@gmail.com</Link>{" "}
                </p>
                <h6 className="mt-3">Phone :</h6>
                <p className="t-p">
                  <Link to="">+91-7017032238</Link>{" "}
                </p>
              </div>
              <div className="col-md-2"></div>
            </div>
            <div className="text-center my-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.697337424072!2d77.52233807492053!3d12.991200014448578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dabaec9c495%3A0x4a6d39242397dd65!2s5th%20Cross%20Rd%2C%20Vrishabha%20Nagar%2C%20Kamakshipalya%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1697204633780!5m2!1sen!2sin"
                width="900"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="test"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="Why-klit">
          <div className="container">
            <div className="row" id="contact-1">
              <div className="col-md-6">
                <div className="text-center">
                  <img
                    src="img/logo.svg"
                    id="img-3"
                    className="rounded"
                    alt="..."
                  />
                </div>
              </div>
              <div className="form-text col-md-6">
                <h5>Join Us</h5>
                <p className="text-f">
                  For more information about our services and capabilities
                  please
                  <br /> approach us in confidence with your details below.
                </p>
                <form className="mt-4">
                  <input
                    type="text"
                    id="name-a"
                    name="name"
                    placeholder="Name"
                  />
                  <br />
                  <br />

                  <input
                    type="email"
                    id="email-a"
                    name="email"
                    placeholder="Email"
                  />
                  <br />
                  <label className="mt-4 lv" for="msg">
                    Message
                  </label>
                  <br />
                  <textarea id="msg"></textarea>
                  <div className="text-center">
                    <button
                      type="submit"
                      id="button-f"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
