import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useHttp from "../Hooks/useHttp";
const HOME = process.env.REACT_APP_HOME;
const API = process.env.REACT_APP_API_URL;
const StdCart = () => {
  const navigate = useNavigate();
  const myStyle = {
    button: {
      width: "300px",
      height: "40px",
      border: "1px solid #021969",
      backgroundColor: "#fff",
      color: "#021969",
      fontSize: "16px",
      fontWeight: 600,
      // textDecoration: "none",
      // textAlign: "center",
    },
    button2: {
      backgroundColor: "#021969",
      color: "#fff",
      fontSize: "20px",
      fontWeight: 600,
      height: "40px",
      width: "100%",
      borderRadius: "10px",
      marginRight: "30px",
    },
    h2: {
      color: "#021969",
      fontSize:"30px"
    },
    h3: {
      fontSize: "20px",
      color: "#021969",
    },
    p: {
      color: "#5E5E5E",
      fontSize: "16px",
    },
    p2: {
      color: "#5E5E5E",
      fontSize: "16px",
    },
    p3: { color: "#B0B0B0" },

    price: {
      height: "100%",
    },
    img: {
      height: "auto",
      width: "250px",
      objectFit: "cover",
    },
  };
  const token = localStorage.getItem("token");

  const { PostRequest } = useHttp();
  const [CartData, setCartData] = useState([]);
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
    }
  };
  const DeleteCart = async (item) => {
    const { data } = await PostRequest(
      API + "deleteCart",
      { cartId: item._id },
      {
        authorization: "Bearer " + token,
      }
    );
    if (data?.responseCode === 1) {
      toast.success(data?.responseText);
      getCartList();
    } else {
      toast.error(data?.responseText);
    }
  };
  useEffect(() => {
    getCartList();
  }, []);
  var subtotal = 0;
  if (CartData.length > 0) {
    subtotal = CartData.reduce((acc, item) => acc + item.CourseId.courseFee, 0);
  }
  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="row w-100 me-5">
        <div className="row border-bottom mx-2">
          <h3 className="p-0" style={myStyle.h2}>MY CART</h3>
        </div>
        <div className="row py-2">
          <p>{CartData && CartData.length} added to cart</p>
        </div>
        {CartData && CartData.length > 0 ? (
          <div className="row mt-3">
            <div className="col-md-9">
              {CartData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-md-12 mb-4  align-items-center justify-content-between"
                  >
                    <div className="row d-flex align-items-center justify-content-between">
                      <div className="col-md-4 ">
                        <div>
                          <img
                            style={myStyle.img}
                            src="../img/image23.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-5">
                        <h3 style={myStyle.h3}>{item.CourseId.title}</h3>
                        <div>
                          <i>
                            <img src="../img/instructor.png" alt="" />
                          </i>
                          <span style={myStyle.p} className="ms-2">
                            {item.userId.name}
                          </span>
                        </div>
                        <p style={myStyle.p2}>{item.CourseId.about}</p>
                        <div className="d-flex justify-content-start  mt-3 gap-1">
                          <button
                            onClick={() => DeleteCart(item)}
                            style={myStyle.button}
                            className="m-0 rounded-3 "
                          >
                            Remove
                          </button>
                          <button
                            onClick={() =>
                              navigate("/student-profile/stdWishlist")
                            }
                            style={myStyle.button}
                            className="m-0 rounded-3 "
                          >
                            Move To wishlist
                          </button>
                        </div>
                      </div>

                      <div style={myStyle.price} className="col-md-2 ">
                        <h2 style={myStyle.h2}> ${item.CourseId.courseFee}</h2>
                        <del style={myStyle.p3}>${item.CourseId.courseFee}</del>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-md-3 border rounded-3 checkout-box">
              <h3 className="p-3" style={myStyle.h2}>
                TOTAL
              </h3>
              <div className="mt-3 ms-3 mb-5">
                <h2> ${subtotal}</h2>
                <p style={myStyle.p3}>
                  <del>&#8377;0</del>
                  <br />
                  <del>00.00% OFF</del>
                </p>
              </div>

              <div>
                <button
                  onClick={() => navigate("/student-profile/stdCheckout")}
                  className="mb-3"
                  style={myStyle.button2}
                  type="submit"
                  name="searchcourses"
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        ) : (
          <h6 className="text-bold p-2 text-center">
            Your Cart is empty! Please add to cart
          </h6>
        )}
      </div>
    </>
  );
};

export default StdCart;
