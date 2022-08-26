import { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import { defaultContent } from "../data/defaultContent.js";

import cards from "../icons/Production/PlasticCard.svg";
import Bracelet from "../icons/Production/Bracelet.svg";
import Sticker from "../icons/Production/Sticker.svg";
import Keyfog from "../icons/Production/Keyfog.svg";

export function Production() {
    const params = useParams();
    const icons = [cards, Bracelet, Sticker, Keyfog];
    const { production, productionMenu } = defaultContent.navbar.menubar;

    if (params.productId) {
        return <Outlet />;
    }

    return (
        <div className="container">
            <div className="productions-page">
                <h1>{production}</h1>
                <div className="pp-products">
                    {productionMenu.map((product, i) => {
                        return (
                            <Link to={`/production/${product.id}`} key={product.id}>
                                <article>
                                    <h3>{product.productName}</h3>
                                    <img src={icons[i]} alt={product.productName} />
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
