import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { defaultContent } from "../data/defaultContent.js";

import { Link } from "react-router-dom";

function ProductType() {
	const { productionPage } = defaultContent;
	const { productionTypes } = productionPage;

	const params = useParams();

	const [production, setProduction] = useState(productionTypes.filter((prod) => prod.productType.filter((x) => x.id.toString() === params.productId).length > 0)[0].productType);
	const [products, setProducts] = useState(production);

	useEffect(() => {
		setProduction(productionTypes.filter((prod) => prod.productType.filter((x) => x.id.toString() === params.productId).length > 0)[0].productType);
		setProducts(production);
	}, [defaultContent, production]);

	if (params.typeId) {
		return <Outlet />;
	}

	return (
		<div className="container">
			<section className="pp-producttype">
				{products.map((product) => {
					const { id, typeId, typeName, image } = product;
					return (
						<Link to={`/production/${params.productId}/${typeId}`} key={typeId}>
							<article>
								<h1>{typeName}</h1>
								<img src={image} alt={typeName} />
							</article>
						</Link>
					);
				})}
			</section>
		</div>
	);
}

export default ProductType;
