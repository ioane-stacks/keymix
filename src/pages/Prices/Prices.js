import PriceProducts from "./PriceProducts";
import "./prices.css";

function Prices() {
	return (
		<div className="container">
			<section className="page-section">
				<div className="ps-header">
					<h1>ფასები</h1>
				</div>
				<div className="price-container">
					<PriceProducts />
				</div>
			</section>
		</div>
	);
}

export default Prices;
