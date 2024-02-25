import React from "react";
import { useNavigate } from "react-router-dom";

const StdWishlistLiveContent = () => {
	const navigate = useNavigate();
	const myStyle = {
		button: {
			width: "200px",
			height: "40px",
			border: "1px solid #021969",
			backgroundColor: "#fff",
			color: "#021969",
			fontSize: "18px",
			fontWeight: 600,
		},
		h3: {
			fontSize: "20px",
			color: "#021969",
		},
		p: {
			color: "#5E5E5E",
			fontSize: "16px",
		},
	};
	return (
		<>
			<div className="row mt-5">
				<div className="col-4 ">
					<div className="row ps-3 pt-3 pb-2 pe-0 border me-3  rounded-3">
						<h3 style={myStyle.h3}>
							Learn PHP Programming <br /> From Scratch
						</h3>
						<p style={myStyle.p} className="pt-3 ">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Inventore, ducimus!
						</p>
						<div className="pt-3">
							<i>
								<img
									className="align-middle"
									src="../img/duration.png"
									alt=""
								/>
							</i>
							<span className="ms-2 align-middle">Course Duration</span>
						</div>
						<div className="pt-2">
							<i>
								<img className="align-middle" src="../img/fees.png" alt="" />
							</i>
							<span className="ms-2 align-middle">Course Fees</span>
						</div>
						<div className="d-flex justify-content-center mt-3 mb-2">
						<button
							onClick={() => navigate("/student-profile/stdCart")}
							id="addtocartbtn"
							style={myStyle.button}
							className=" rounded-3"
						>
							Add To Cart
						</button>
					</div>
					</div>

					
				</div>
				<div className="col-4 ">
					<div className="row ps-3 pt-3 pb-2 pe-0 border me-3  rounded-3">
						<h3 style={myStyle.h3}>
							Learn PHP Programming <br /> From Scratch
						</h3>
						<p style={myStyle.p} className="pt-3 ">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Inventore, ducimus!
						</p>
						<div className="pt-3">
							<i>
								<img
									className="align-middle"
									src="../img/duration.png"
									alt=""
								/>
							</i>
							<span className="ms-2 align-middle">Course Duration</span>
						</div>
						<div className="pt-2">
							<i>
								<img className="align-middle" src="../img/fees.png" alt="" />
							</i>
							<span className="ms-2 align-middle">Course Fees</span>
						</div>
						<div className="d-flex justify-content-center mt-3 mb-2">
						<button
							onClick={() => navigate("/student-profile/stdCart")}
							id="addtocartbtn"
							style={myStyle.button}
							className=" rounded-3"
						>
							Add To Cart
						</button>
					</div>
					</div>

					
				</div>
				<div className="col-4 ">
					<div className="row ps-3 pt-3 pb-2 pe-0 border me-3  rounded-3">
						<h3 style={myStyle.h3}>
							Learn PHP Programming <br /> From Scratch
						</h3>
						<p style={myStyle.p} className="pt-3 ">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Inventore, ducimus!
						</p>
						<div className="pt-3">
							<i>
								<img
									className="align-middle"
									src="../img/duration.png"
									alt=""
								/>
							</i>
							<span className="ms-2 align-middle">Course Duration</span>
						</div>
						<div className="pt-2">
							<i>
								<img className="align-middle" src="../img/fees.png" alt="" />
							</i>
							<span className="ms-2 align-middle">Course Fees</span>
						</div>
						<div className="d-flex justify-content-center mt-3 mb-2">
						<button
							onClick={() => navigate("/student-profile/stdCart")}
							id="addtocartbtn"
							style={myStyle.button}
							className=" rounded-3"
						>
							Add To Cart
						</button>
					</div>
					</div>

					
				</div>
			</div>
		</>
	);
};

export default StdWishlistLiveContent;
