import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../BASE_URL";

const PriceProducts = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		const resp = await axios.get(`http://10.127.3.22:5000/products`);
		if (resp.status === 200) {
			setData(await resp.data);
		}
	};

	return (
		<section className="product-pick">
			{data &&
				data.map((p) => {
					const { productId, productName, imageUrl } = p;
					console.log(imageUrl);
					return (
						<article>
							<h3>{productName}</h3>
							<img src={"/keymix" + imageUrl} alt={productName} />
						</article>
					);
				})}
		</section>
	);
};

export default PriceProducts;
