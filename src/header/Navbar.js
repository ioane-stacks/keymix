import hlogo from "../icons/mixid.svg";
import { defaultContent } from "../data/defaultContent.js";
import { NavLink } from "react-router-dom";

function Navbar() {
    const { menubar, service, gallery, information, prices } = defaultContent.navbar;
    return (
        <div className="header">
            <div className="header-logo">
                <NavLink to="/" end>
                    <img src={hlogo} alt="logo"></img>
                    <p>
                        <span>ID</span>entify your <span>ID</span>ea
                    </p>
                </NavLink>
            </div>
            <nav className="navbar">
                <ul>
                    <li className="dropdown">
                        <NavLink to="production/">
                            <span>{menubar.production}</span>
                        </NavLink>
                        <div className="dropdown-menu">
                            <ul>
                                {menubar.productionMenu.map((product) => {
                                    return (
                                        <NavLink to={"production/" + product.id} key={product.id}>
                                            <li>{product.productName}</li>
                                        </NavLink>
                                    );
                                })}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/service">{service}</NavLink>
                    </li>
                    <li>{gallery}</li>
                    <li>{information}</li>
                    <li>{prices}</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
