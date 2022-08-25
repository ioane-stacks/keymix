import { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import { defaultContent } from "../data/defaultContent.js";

import cards from "../icons/Production/cards.png";

export function Production() {
    const params = useParams();
    const icons = [cards, cards, cards, cards];
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
