import hlogo from '../icons/cardprintlogo.png';
import { defaultContent } from '../data/defaultContent.js';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
    const { menubar, service, gallery, information, prices } = defaultContent.navbar;
    return (
        <div className="header">
            <div className="header-logo">
                <NavLink to="/" end><img src={hlogo} alt='logo'></img></NavLink>
            </div>
            <div className='navbar'>
                <ul>
                    <li className='dropdown'>
                        <NavLink to="production"><span>{menubar.production}</span></NavLink>
                        <div className='dropdown-menu'>
                            <ul>
                                {menubar.productionMenu.map((product) => {
                                    return (
                                        <li key={product.id}><Link to={'production/' + product.id} key={product.id}>{product.productName}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </li>
                    <li><NavLink to="/service">{service}</NavLink></li>
                    <li>{gallery}</li>
                    <li>{information}</li>
                    <li>{prices}</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;