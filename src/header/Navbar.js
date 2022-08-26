import hlogo from "../icons/mixid.svg";
import { defaultContent } from "../data/defaultContent.js";
import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";

function Navbar() {
	const { menubar, service, gallery, information, prices } = defaultContent.navbar;

	const [isOpenMenu, setIsOpenMenu] = useState(false);

	function MenuIcon() {
		if (!isOpenMenu) {
			return <GiHamburgerMenu />;
		} else {
			return <GrClose />;
		}
	}

	function handleChangeMenuIcon() {
		!isOpenMenu ? setIsOpenMenu(true) : setIsOpenMenu(false);
	}

	function closeMenu() {
		document.querySelector(".dropdown-mob").classList.remove("dropdown-open");
		setIsOpenMenu(false);
	}

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
							<span>{menubar.productionName}</span>
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
			<div className="navbar-container">
				<nav className="navbar-mob">
					<div className="burger-icon" onClick={handleChangeMenuIcon}>
						<MenuIcon />
					</div>
				</nav>
				<div className={`dropdown-mob ${isOpenMenu ? "dropdown-open" : ""}`}>
					<ul>
						<NavLink to="/production">
							<li onClick={closeMenu}>{menubar.productionName}</li>
						</NavLink>
						<NavLink to="/service">
							<li onClick={closeMenu}>{service}</li>
						</NavLink>
						<NavLink to="/service">
							<li onClick={closeMenu}>{gallery}</li>
						</NavLink>
						<NavLink to="/service">
							<li onClick={closeMenu}>{information}</li>
						</NavLink>
						<NavLink to="/service">
							<li onClick={closeMenu}>{prices}</li>
						</NavLink>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
