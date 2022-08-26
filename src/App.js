import "./style/mixid.css";
import "../node_modules/bpg-banner/css/bpg-banner.min.css";
import "../node_modules/bpg-banner-caps/css/bpg-banner-caps.min.css";
import "../node_modules/bpg-glaho-web-caps/css/bpg-glaho-web-caps.min.css";

import Home from "./home/Home";

import { Production } from "./pages/Production";
import Product from "./pages/Product";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Information from "./pages/Information";
import Prices from "./pages/Prices";

import { ka } from "./data/ka.js";
import { en } from "./data/en.js";
import { defaultContent } from "./data/defaultContent.js";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
	const [defLang, setDefLang] = useState(ka);
	defaultContent = defLang;

	function changeLanguage() {
		if (defLang === ka) {
			setDefLang(en);
		} else {
			setDefLang(ka);
		}
		defaultContent = defLang;
	}

	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout changeLanguage={changeLanguage} />}>
					<Route index element={<Home />} />
					<Route path="production" element={<Production />}>
						<Route path=":productId" element={<Product />} />
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
