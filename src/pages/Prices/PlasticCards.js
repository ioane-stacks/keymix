import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../BASE_URL";

function PlasticCards({ setProduct }) {
	const [data, setData] = useState([]);
	const [currentItems, setCurrentItems] = useState("");
	const [currentMenu, setCurrentMenu] = useState("");

	useEffect(() => {
		getPlasticCards();
	}, []);

	const getPlasticCards = async () => {
		const resp = await axios.get(`${BASE_URL}/pc`);
		if (resp.status === 200) {
			setData(await resp.data);
		}
	};

	const expandMenu = (itemId, menuId) => {
		showList(itemId);
		showMenu(menuId);
	};

	const showList = (itemId) => {
		if (currentItems === itemId) document.getElementById(itemId).classList.toggle("show-item");
		else {
			document.querySelectorAll(".item-list").forEach((item) => {
				if (item.className.includes("show-item")) item.classList.remove("show-item");
				document.getElementById(itemId).classList.add("show-item");
				setCurrentItems(itemId);
			});
		}
	};

	const showMenu = (menuId) => {
		if (currentMenu === menuId) document.getElementById(menuId).classList.toggle("menu-expanded");
		else {
			document.querySelectorAll(".prices-listhead").forEach((item) => {
				if (item.className.includes("menu-expanded")) item.classList.remove("menu-expanded");
				document.getElementById(menuId).classList.add("menu-expanded");
				setCurrentMenu(menuId);
			});
		}
	};

	const menuList = ["card dimension", "card style", "barcode", "contacted chip", "magnetic strip", "rfid"];

	return (
		<div className="prices w-93">
			<div className="prices-sidebar">
				<div className="prices-listbox">
					{data.map((item, i) => {
						return (
							<div className="items-listbox">
								<p key={i} id={`menu${i}`} className="prices-listhead" onClick={() => expandMenu(`item${i}`, `menu${i}`)}>
									{menuList[i]}
								</p>
								<div id={`item${i}`} className="item-list">
									{item[menuList[i].split(" ").join("")].map((subitem) => {
										return (
											<p key={subitem.Id} className="prices-item">
												{subitem.name}
											</p>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
				<button className="btn btn-blue" onClick={() => setProduct(0)}>
					Back...
				</button>
			</div>
		</div>
	);
}

export default PlasticCards;
