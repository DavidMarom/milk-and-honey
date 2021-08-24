import React from "react";

export const ProdCard = ({prod}) => {

	return (
		<div>
			<p>{prod.id}</p>
			<p>{prod.title}</p>
			<p>{prod.price}</p>
			<p>{prod.description}</p>

		</div>
	);
};
