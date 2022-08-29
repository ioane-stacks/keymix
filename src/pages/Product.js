import { Outlet, useParams, useNavigate } from "react-router-dom";
import { defaultContent2 } from "../data/defaultContent2.js";

function Product() {
	const params = useParams();
	const navigate = useNavigate();
	const production = defaultContent2.production.filter((x) => x.id.toString() === params.productId)[0].product;
	const products = production.filter((x) => x.typeId === params.typeId)[0];

	console.log(products);

	function DisplayInformation() {
		return (
			<div style={{ display: "flex" }}>
				<div className="product-image">asdasd</div>
				<div className="product-description">PRODUCT DESCRIPTION</div>
			</div>
		);
	}

	return (
		<div className="container">
			<section className="pp-description">
				<div className="page-listbox">
					<ul>
						{products.type.map((product) => {
							const { typeName } = product;
							return <li>{typeName}</li>;
						})}
					</ul>
				</div>
				<DisplayInformation />
			</section>

			<button className="btn btn-blue" onClick={() => navigate(-1)}>
				უკან
			</button>
		</div>
	);
}

export default Product;
