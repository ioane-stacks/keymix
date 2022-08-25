import { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import { defaultContent } from "../data/defaultContent.js";

import ProductionSection from "../home/ProductionSection.js";

import cards from "../icons/Production/cards.svg";

export function Production() {
    const params = useParams();

    if (params.productId) {
        return <Outlet />;
    } else {
        return (
            <div className="container">
                <div className="productions-page">
                    <h1>პროდუცია</h1>
                    <div className="pp-products">
                        <Link to="/production/1" key={1}>
                            <article>
                                <h3>პლასტიკური ბარათები</h3>
                                <img src={cards} alt="cards" />
                            </article>
                        </Link>
                        <Link to="/production/1" key={1}>
                            <article>
                                <h3>სამაჯურები</h3>
                                <img src={cards} alt="cards" />
                            </article>
                        </Link>
                        <Link to="/production/1" key={1}>
                            <article>
                                <h3>სტიკერები</h3>
                                <img src={cards} alt="cards" />
                            </article>
                        </Link>
                        <Link to="/production/1" key={1}>
                            <article>
                                <h3>ბრელოკები</h3>
                                <img src={cards} alt="cards" />
                            </article>
                        </Link>
                    </div>
                </div>
            </div>
            // <div className="container">
            //     <ProductionSection />
            // </div>
        );
    }
}
