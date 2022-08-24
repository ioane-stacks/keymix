import { useParams } from 'react-router-dom';

function Product({ data }) {

    const params = useParams();

    return (
        <div>
            <h1>PRODUCT {params.productId}</h1>
        </div>
    )
}

export default Product;