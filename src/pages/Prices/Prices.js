import PriceProducts from "./PriceProducts";
import "./prices.css";

function Prices({ sectionId }) {
	return (
		<div className="container w-93">
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
