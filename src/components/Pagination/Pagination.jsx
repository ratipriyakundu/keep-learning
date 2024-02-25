import React from "react";
import "./pagination.css";

const Pagination = () => {
	return (
		<>
			<div className="pagination">
				<img src="../img/pagination_prev_arrow.png" alt="" />
				<span className="active">1</span>
				<span>2</span>
				<span>3</span>
				<span>...</span>
				<span>100</span>
				<img src="../img/pagination_next_arrow.png" alt="" />
			</div>
		</>
	);
};

export default Pagination;
