import "./style/mixid.css";

import "../node_modules/bpg-banner/css/bpg-banner.min.css";
import "../node_modules/bpg-banner-caps/css/bpg-banner-caps.min.css";
import "../node_modules/bpg-glaho-web-caps/css/bpg-glaho-web-caps.min.css";

import Home from "./home/Home";

import { Production } from "./pages/Production";
import ProductType from "./pages/ProductType";
import Product from "./pages/Product";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Information from "./pages/Information";
import Prices from "./pages/Prices/Prices";

import { ka } from "./data/ka.js";
import { en } from "./data/en.js";
import { contentka } from "./data/contentka.js";
import { contenten } from "./data/contenten.js";
import { defaultContent } from "./data/defaultContent.js";
import { defaultContent2 } from "./data/defaultContent2.js";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
	const [defLang, setDefLang] = useState(ka);
	const [defLang2, setDefLang2] = useState(contentka);
	defaultContent = defLang;
	defaultContent2 = defLang2;

	function changeLanguage() {
		if (defLang === ka) {
			setDefLang(en);
			setDefLang2(contenten);
		} else {
			setDefLang(ka);
			setDefLang2(contentka);
		}
	}

	useEffect(() => {
		defaultContent = defLang;
		defaultContent2 = defLang2;
	});

	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout changeLanguage={changeLanguage} />}>
					<Route index element={<Home />} />
					<Route path="production" element={<Production />}>
						<Route path=":productId" element={<ProductType />}>
							<Route path=":typeId" element={<Product />} />
						</Route>
					</Route>
					<Route path="service" element={<Service />} />
					<Route path="gallery" element={<Gallery />} />
					<Route path="information" element={<Information />} />
					<Route path="prices" element={<Prices />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
