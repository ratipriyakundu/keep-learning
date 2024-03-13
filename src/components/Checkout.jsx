import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import useHttp from "../Hooks/useHttp";
import { ToastContainer, toast } from "react-toastify";
const HOME = process.env.REACT_APP_HOME;
const API = process.env.REACT_APP_API_URL;

const Checkout = () => {

  const dataObject = useOutletContext();
  const token = localStorage.getItem("token");
  var subtotal = 0;
  const { PostRequest } = useHttp();
  const [CourseId, setCourseId] = useState([]);
  const [reload, setReload] = useState(false);

  const PlaceOrder = async () => {
    const uniqueArray = [...new Set(CourseId)];
    const { data } = await PostRequest(
      API + "PlaceOrder",
      {
        CourseId: uniqueArray,
        subTotal: subtotal,
        discount: 0,
        total: subtotal,
      },
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      setReload(true);
      toast.success(data?.responseText);
    } else {
      toast.error(data?.responseText);
    }
  };

  useEffect(() => {
    for (const courseId of dataObject.cart_list) {
      setCourseId((oldData) => [...oldData, courseId.CourseId._id]);
    }
  }, [reload]);

  if (dataObject && dataObject.cart_list.length > 0) {
    subtotal = dataObject.cart_list.reduce((acc, item) => acc + item.CourseId.courseFee, 0);
  }
  const myStyle = {
    button: {
      backgroundColor: "#021969",
      color: "#fff",
      fontSize: "20px",
      fontWeight: 600,
      height: "40px",
      width: "70%",
      borderRadius: "6px",
      // marginRight: "30px",
    },
    summaryBox: {
      border: "1px solid #021869",
      borderRadius: "6px",
    },
    paymentMethodList: {
      border: "1px solid #021869",
      borderRadius: "5px",
    },
    input: {
      display: "block",
      height: "20px",
      width: "20px",
    },
    price: {
      height: "100%",
    },
    h2: {
      color: "#021969",
      fontSize: "30px"
    },
    h4: {
      color: "#021969",
    },
    p: {
      fontSize: "18px",
      color: "#021869",
    },
    p2: {
      fontSize: "14px",
      color: "#5E5E5E",
    },
    p3: { color: "#B0B0B0" },
    p4: {
      color: "#021969",
      fontSize: "20px",
      fontWeight: "600"
    },
    img: {
      height: "100px",
      width: "100px",
      objectFit: "cover",
    },
    hr: {
      borderBottom: "1px solid #021969",
      width: "85%",
      margin: "auto"
    },
    imgDiv: {},
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="row w-100 p-4">
        <div className="row">
          <div className="col-md-12 ps-0 border-bottom">
            <h3 className="p-0 mb-2" style={myStyle.h2}>CHECKOUT</h3>
          </div>
        </div>
        {!reload && dataObject && dataObject.cart_list && dataObject.cart_list.length > 0 ? (
          <div className="row mt-2">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12 ps-0 mt-3 mb-2">
                  <h4 style={myStyle.h4}>Payment Method</h4>
                </div>
              </div>
              <div className="row">
                <ul class="list-group w-50 mt-3">
                  <li class="list-group-item p-3 d-flex">
                    <input
                      id="paymentMethod1"
                      style={myStyle.input}
                      type="radio"
                      defaultValue="0"
                      name="payment"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" fill="currentColor" class="bi bi-credit-card ms-3 border" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                      <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                    <label className="ms-3" htmlFor="paymentMethod1">Payment Method 1</label>
                  </li>
                  <li class="list-group-item p-3 d-flex">
                    <input
                      id="paymentMethod2"
                      style={myStyle.input}
                      type="radio"
                      defaultValue="0"
                      name="payment"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" fill="currentColor" class="bi bi-credit-card ms-3 border" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                      <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                    <label className="ms-3" htmlFor="paymentMethod2">Payment Method 2</label>
                  </li>
                  <li class="list-group-item p-3 d-flex">
                    <input
                      id="paymentMethod3"
                      style={myStyle.input}
                      type="radio"
                      defaultValue="0"
                      name="payment"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" fill="currentColor" class="bi bi-credit-card ms-3 border" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                      <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                    <label className="ms-3" htmlFor="paymentMethod3">Payment Method 3</label>
                  </li>
                  <li class="list-group-item p-3 d-flex">
                    <input
                      id="paymentMethod4"
                      style={myStyle.input}
                      type="radio"
                      defaultValue="0"
                      name="payment"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" fill="currentColor" class="bi bi-credit-card ms-3 border" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                      <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                    <label className="ms-3" htmlFor="paymentMethod4">Payment Method 4</label>
                  </li>
                  <li class="list-group-item p-3 d-flex">
                    <input
                      id="paymentMethod5"
                      style={myStyle.input}
                      type="radio"
                      defaultValue="0"
                      name="payment"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" fill="currentColor" class="bi bi-credit-card ms-3 border" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                      <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                    <label className="ms-3" htmlFor="paymentMethod5">Payment Method 5</label>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="row">
                  <div className="col-md-12 mt-4">
                    <h4 style={myStyle.h4}>ORDER DETAILS</h4>
                  </div>
                </div>
                {dataObject && dataObject.cart_list && dataObject.cart_list.length > 0
                  ? dataObject.cart_list.map((item, index) => {
                    return (
                      <div key={index} className="row mt-4">
                        <div className="col-md-2">
                          <img
                            style={myStyle.img}
                            src={item && item.CourseId.image !== null ? process.env.REACT_APP_HOME + item.CourseId.image : "../img/profile.png"}
                            alt=""
                          />
                        </div>
                        <div className="col-md-7">
                          <p style={myStyle.p4}>{item.CourseId.title}</p>
                        </div>
                        <div style={myStyle.price} className="col-md-3 ">
                          <h2 style={myStyle.h2}>
                            {" "}
                            {(item.CourseId.courseFee).toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'INR',
                            })}
                          </h2>
                          <del style={myStyle.p3}>
                            {(0).toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'INR',
                            })}
                          </del>
                        </div>
                      </div>
                    );
                  })
                  : null}
              </div>
            </div>
            <div className="col-md-4">
              <div
                style={myStyle.summaryBox}
                className="row  d-flex align-items-center justify-content-center mt-4"
              >
                <div className="row">
                  <div className="col-md-12 p-3 text-center">
                    <h3 className="p-0 mb-2" style={myStyle.h2}>SUMMERY</h3>
                  </div>
                </div>
                <div className="row d-flex mb-3 align-items-center justify-content-center text-center align-middle">
                  <div className="col-md-6">
                    <p style={myStyle.p}>Original Price</p>
                  </div>
                  <div className="col-md-6">
                    <h2 style={myStyle.h2}> {(subtotal).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'INR',
                    })}</h2>
                  </div>
                </div>
                <div className="row mb-3 text-center align-middle">
                  <div className="col-md-6">
                    <p style={myStyle.p}>Discount Price</p>
                  </div>
                  <div className="col-md-6  mb-4">
                    <del style={myStyle.p3}>₹ 0.00 Off</del>
                  </div>
                </div>
                <div className="mb-3" style={myStyle.hr}></div>
                <div className="row mb-3 text-center align-middle d-flex align-items-center justify-content-center">
                  <div className="col-md-6">
                    <p style={myStyle.p}>Total</p>
                  </div>
                  <div className="col-md-6">
                    <h2 style={myStyle.h2}>{(subtotal).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'INR',
                    })}</h2>
                  </div>
                </div>
                <div className="row text-center align-middle mt-5">
                  <div className="col-md-12 d-flex align-items-center justify-content-center">
                    <button
                      className="mb-3"
                      style={myStyle.button}
                      type="button"
                      name="searchcourses"
                      onClick={() => PlaceOrder()}
                    >
                      COMPLETE CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-4 h6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
          </div>
        ) : (
          <>
            <img src="../img/no-data.svg" className="mt-3" alt="No Data Found" style={{ width: "40%", margin: "auto" }} />
          </>
        )}
      </div>
    </>
  );
};

export default Checkout;
