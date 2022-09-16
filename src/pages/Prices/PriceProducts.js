import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../BASE_URL";
import PlasticCards from "./PlasticCards";

const PriceProducts = () => {
	const [product, setProduct] = useState(0);

	if (product === 0) return <Products setProduct={setProduct} />;
	if (product === 1) return <PlasticCards setProduct={setProduct} />;
};

const Products = ({ setProduct }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		const resp = await axios.get(`${BASE_URL}/products`);
		if (resp.status === 200) {
			setData(await resp.data);
		}
	};

	return (
		<section className="product-pick">
			{data &&
				data.map((p) => {
					const { productId, productName, imageUrl } = p;
					return (
						<article key={productId} onClick={() => setProduct(productId)}>
							<h3>{productName}</h3>
							<img src={"/keymix" + imageUrl} alt={productName} />
						</article>
					);
				})}
		</section>
	);
};

export default PriceProducts;
