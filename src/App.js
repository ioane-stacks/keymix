import "./style/mixid.css";
import "../node_modules/bpg-banner/css/bpg-banner.min.css";
import "../node_modules/bpg-banner-caps/css/bpg-banner-caps.min.css";
import "../node_modules/bpg-glaho-web-caps/css/bpg-glaho-web-caps.min.css";


import Navbar from "./header/Navbar";
import TopHeader from "./header/TopHeader";
import Footer from "./footer/Footer";
import Home from "./home/Home";

import Production from "./pages/Production";
import Product from "./pages/Product";
import Service from "./pages/Service";


import { ka } from "./data/ka.js";
import { en } from "./data/en.js";
import { defaultContent } from "./data/defaultContent.js";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
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
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
