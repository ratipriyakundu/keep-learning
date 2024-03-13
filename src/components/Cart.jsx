import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useHttp from "../Hooks/useHttp";
import Loader from "./Loader/Loader";

const HOME = process.env.REACT_APP_HOME;
const API = process.env.REACT_APP_API_URL;

const Cart = () => {

  const dataObject = useOutletContext();
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
      borderRadius: "6px",
      marginRight: "30px",
    },
    h2: {
      color: "#021969",
      fontSize: "30px"
    },
    h3: {
      fontSize: "20px",
      color: "#021969",
      lineHeight: "25px"
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
    checkoutBox: {
      border: "1px solid #021969",
      height: "300px"
    }
  };
  const token = localStorage.getItem("token");

  const { PostRequest } = useHttp();
  const [CartData, setCartData] = useState([]);
  const [isReLoadingCartList, setIsReLoadingCartList] = useState(true);

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
      reLoadCartList();
    } else {
      toast.error(data?.responseText);
    }
  };

  //Reload Cart List
  const reLoadCartList = async () => {
    setIsReLoadingCartList(true);
    const { data } = await PostRequest(
      API + "CartList",
      {},
      {
        authorization: "Bearer " + token,
      }
    );
    setCartData(data && data?.responseCode && data?.responseData ? data?.responseData : []);
    setTimeout(() => {
      setIsReLoadingCartList(false);
    }, 1000);
  }

  useEffect(() => {
    setCartData(dataObject.cart_list);
    setIsReLoadingCartList(false);
  },[]);

  console.log(dataObject)

  var subtotal = 0;
  if (CartData.length > 0) {
    subtotal = CartData.reduce((acc, item) => acc + item.CourseId.courseFee, 0);
  }
  return isReLoadingCartList === true ? <Loader /> : (
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
                            src={item && item.CourseId.image !== null ? process.env.REACT_APP_HOME + item.CourseId.image : "../img/profile.png"}
                            alt={item.CourseId.title}
                          />
                        </div>
                      </div>
                      <div className="col-md-5">
                        <h3 style={myStyle.h3} className="mx-0 mb-3">{item.CourseId.title}</h3>
                        <div className="d-flex">
                          <span className="icon-instructors ms-0 mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="#021969"
                              className="bi bi-person-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>
                          </span>
                          <span className="dl"> {item.userId.name} </span>
                        </div>
                        <p className="text-1 mx-0">{item.CourseId.about}</p>
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
                        <h2 style={myStyle.h2}> ₹ {item.CourseId.courseFee}</h2>
                        <del style={myStyle.p3}>₹ {item.CourseId.courseFee}</del>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-md-3 rounded-2 checkout-box" style={myStyle.checkoutBox}>
              <h3 className="p-3" style={myStyle.h2}>
                TOTAL
              </h3>
              <div className="mt-3 ms-3 mb-5">
                <h2> ₹ {subtotal}</h2>
                <p style={myStyle.p3}>
                  <del>&#8377;0</del>
                  <br />
                  <del>00.00% OFF</del>
                </p>
              </div>

              <div>
                <button
                  onClick={() => navigate("/student-profile/checkout")}
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
          <>
            <img src="../img/no-data.svg" alt="No Data Found" style={{ width: "40%", margin: "auto" }} />
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
