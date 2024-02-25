import React, { useEffect, useState } from "react";
import useHttp from "../Hooks/useHttp";
import { ToastContainer, toast } from "react-toastify";
const HOME = process.env.REACT_APP_HOME;
const API = process.env.REACT_APP_API_URL;
const StdCheckout = () => {
  const token = localStorage.getItem("token");
  var subtotal = 0;
  const { PostRequest } = useHttp();
  const [CartData, setCartData] = useState([]);
  const [CourseId, setCourseId] = useState([]);
  const getCartList = async () => {
    const { data } = await PostRequest(
      API + "CartList",
      {},
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      setCartData(data?.responseData);
      for (const courseId of data?.responseData) {
        setCourseId((oldData) => [...oldData, courseId.CourseId._id]);
      }
    }
  };
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
      setCartData([]);
      toast.success(data?.responseText);
      getCartList();
    } else {
      toast.error(data?.responseText);
    }
  };

  useEffect(() => {
    getCartList();
  }, []);

  if (CartData.length > 0) {
    subtotal = CartData.reduce((acc, item) => acc + item.CourseId.courseFee, 0);
  }
  const myStyle = {
    button: {
      backgroundColor: "#021969",
      color: "#fff",
      fontSize: "20px",
      fontWeight: 600,
      height: "40px",
      width: "70%",
      borderRadius: "10px",
      // marginRight: "30px",
    },
    summaryBox: {
      border: "1px solid #021869",
      borderRadius: "10px",
    },
    paymentMethodList: {
      border: "2px solid #021869",
      borderRadius: "10px",
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
      fontSize: "18px",
    },
    img: {
      height: "100px",
      width: "100px",
      objectFit: "cover",
    },
    imgDiv: {},
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="row w-100">
        <div className="row">
          <div className="col-md-12 ps-0 border-bottom">
            <h3 className="ps-0">CHECKOUT</h3>
          </div>
        </div>
        {CartData && CartData.length > 0 ? (
          <div className="row mt-2">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12 ps-0 mt-3">
                  <h4>Payment Method</h4>
                </div>
              </div>
              <div className="row">
                <div
                  style={myStyle.paymentMethodList}
                  className="col-md-10  mt-3"
                >
                  <div className="row d-flex align-items-center justify-content-center border-bottom">
                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                      <input
                        style={myStyle.input}
                        type="radio"
                        defaultValue="0"
                        name="payment"
                      />
                    </div>
                    <div className="col-md-2">
                      <i>Process to Pay</i>
                    </div>
                    <div className="col-md-8">
                      <p>Pay as you go</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <h4>ORDER DETAILS</h4>
                  </div>
                </div>
                {CartData && CartData.length > 0
                  ? CartData.map((item, index) => {
                      return (
                        <div key={index} className="row mt-4">
                          <div className="col-md-3">
                            <img
                              style={myStyle.img}
                              src="../img/image23.png"
                              alt=""
                            />
                          </div>
                          <div className="col-md-6">
                            <p style={myStyle.p4}>{item.CourseId.title}</p>
                          </div>
                          <div style={myStyle.price} className="col-md-3 ">
                            <h2 style={myStyle.h2}>
                              {" "}
                              {item.CourseId.courseFee}
                            </h2>
                            <del style={myStyle.p3}>
                              {item.CourseId.courseFee}
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
                className="row  d-flex align-items-center justify-content-center"
              >
                <div className="row">
                  <div className="col-md-12 p-3 text-center">
                    <p style={myStyle.p}>SUMMERY</p>
                  </div>
                </div>
                <div className="row d-flex align-items-center justify-content-center text-center align-middle">
                  <div className="col-md-6">
                    <p style={myStyle.p}>Original Price</p>
                  </div>
                  <div className="col-md-6">
                    <h2 style={myStyle.h2}> {subtotal}</h2>
                  </div>
                </div>
                <div className="row border-bottom text-center align-middle">
                  <div className="col-md-6">
                    <p style={myStyle.p}>Discount Price</p>
                  </div>
                  <div className="col-md-6  mb-4">
                    <del style={myStyle.p3}>{subtotal} Off</del>
                  </div>
                </div>
                <div className="row text-center align-middle d-flex align-items-center justify-content-center">
                  <div className="col-md-6">
                    <p style={myStyle.p}>Total</p>
                  </div>
                  <div className="col-md-6">
                    <h2 style={myStyle.h2}> {subtotal}</h2>
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
            </div>
          </div>
        ) : (
          <h6 className="text-bold p-2">
            Your Cart is empty! Please add to cart
          </h6>
        )}
      </div>
    </>
  );
};

export default StdCheckout;
