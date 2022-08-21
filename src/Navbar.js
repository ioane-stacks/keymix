import hlogo from './icons/cardprintlogo.png';


function Navbar(data) {
    const {menubar, service, gallery, information, prices} = data.data;
    return (
        <div className="header">
            <div className="header-logo">
                <a href='/'><img src={hlogo} alt='logo'></img></a>
            </div>
            <div className='navbar'>
                <ul>
                    <li className='dropdown'>
                        <span>{menubar.production}</span>
                        <div className='dropdown-menu'>
                            <ul>
                                {menubar.productionMenu.map((product, i) => {
                                    return (
                                        <div className='dropdown-sub' key={i}>
                                            <li key={i}>{product.productName}</li>
                                            <div className='dropdown-submenu'>
                                                <ul>
                                                    {product.productTypes.map((type, j) => {
                                                        return <li key={j}>{type}</li>
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })}
                            </ul>
                        </div>
                    </li>
                    <li>{service}</li>
                    <li>{gallery}</li>
                    <li>{information}</li>
                    <li>{prices}</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;