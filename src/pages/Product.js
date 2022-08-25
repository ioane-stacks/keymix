import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { defaultContent } from "../data/defaultContent.js";

function Product() {
    const { productionMenu } = defaultContent.navbar.menubar;
    const params = useParams();

    let product = productionMenu.filter((prod) => prod.id.toString() === params.productId);

    const { id, productName } = product[0];

    return (
        <div>
            <h1>PRODUCT ID: {id}</h1>
            <h1>PRODUCT NANE: {productName}</h1>
        </div>
    );
}

export default Product;
