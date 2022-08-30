import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { defaultContent2 } from "../data/defaultContent2.js";

function Product() {
	const params = useParams();
	const navigate = useNavigate();
	const production = defaultContent2.production.filter((x) => x.id.toString() === params.productId)[0].product;
	const products = production.filter((x) => x.typeId === params.typeId)[0];

	const [detailedInfo, setDetailedInfo] = useState(products.type[0]);

	function changeDescription(typeName) {
		setDetailedInfo(products.type.filter((product) => product.typeName === typeName)[0]);
	}

	function DisplayDescription() {
		const { typeName, descriptionName, description, usingFor, usingForDescription, image } = detailedInfo;
		return (
			<div style={{ display: "flex" }}>
				<div className="product-image">
					<img src={image} alt={typeName} />
				</div>
				<div className="product-description">
					<h3>{descriptionName}</h3>
					<p>{description}</p>
					<h3>{usingFor}</h3>
					<p>{usingForDescription}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="container" style={{ backgroundColor: "white", userSelect: "none" }}>
			<h1 style={{ textAlign: "center", padding: "20px" }}>{products.typeName}</h1>
			<section className="pp-description">
				<div className="page-listbox">
					<ul>
						{products.type.map((product, i) => {
							const { typeName } = product;
							return (
								<li className={i === 0 ? "item-selected" : ""} key={i} onClick={() => changeDescription(typeName)}>
									{typeName}
								</li>
							);
						})}
					</ul>
				</div>
				<DisplayDescription />
			</section>

			<button style={{ marginLeft: "40px" }} className="btn btn-blue" onClick={() => navigate(-1)}>
				უკან
			</button>
		</div>
	);
}

export default Product;
