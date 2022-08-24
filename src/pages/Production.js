import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { defaultContent } from '../data/defaultContent.js';
import Product from './Product.js';

function Production() {
    const { productionMenu } = defaultContent.navbar.menubar;
    let params = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData(productionMenu.filter(prod => params.id == prod.id))
        }, 300);
    }, [params])

    return (
        <div>
            <h1>PRODUCTION</h1>
            {data !== null ? <Product data={data} /> : ''}
        </div>
    )
}

export default Production;