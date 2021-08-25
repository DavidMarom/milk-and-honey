import { NavLink, useParams } from "react-router-dom";
import React from "react";


export const ProdCard = ({ prod }) => {



	return (

		<div className="prod-card">


			<NavLink to={{ pathname: "/product", state: { prod: prod } }}>

				<div className="img-container">
					<img src={prod.image} alt="product" />
				</div>
			</NavLink>



			<div className="center-element title-text">
				<h3>{prod.title}</h3>
			</div>

			<div className="center-element category-text">
				<p>{prod.category}</p>
			</div>

			<div className="center-element category-text">
				<p>{prod.price} $</p>
			</div>

			<div className="center-element category-text">
				<button className="add-to-cart"><i className="fas fa-cart-plus"></i>‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ADD TO CART</button>
			</div>


		</div>
	);
};
