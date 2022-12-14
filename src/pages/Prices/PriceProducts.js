import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../BASE_URL";
import Wristband from "./Wristbands/Wristband";
import PlasticCards from "./PlasticCards/PlasticCards";
import Sticker from "./Stickers/Sticker";
import Keyfob from "./Keyfob/Keyfob";

const PriceProducts = () => {
	const [product, setProduct] = useState(0);

	switch (product) {
		case 1:
			return <PlasticCards setProduct={setProduct} />;
		case 2:
			return <Wristband setProduct={setProduct} />;
		case 3:
			return <Keyfob setProduct={{ setProduct }} />;
		case 4:
			return <Sticker setProduct={setProduct} />;
		default:
			return <Products setProduct={setProduct} />;
	}
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
					const { Id, productName, imageUrl } = p;
					return (
						<article key={productName} onClick={() => setProduct(Id)}>
							<h3>{productName}</h3>
							<img src={imageUrl} alt={productName} />
						</article>
					);
				})}
		</section>
	);
};

export default PriceProducts;
