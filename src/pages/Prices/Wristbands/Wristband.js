import React, { useState, useEffect } from "react";
import axios from "axios";

import "./wristband.css";
import { BASE_URL } from "../../../BASE_URL";

import { checkQuantity } from "../ExtendedComponents";
import { TooltipBottom, TooltipTop, TooltipLeft } from "../Tooltip";

function Bracelet({ setProduct }) {
	const [data, setData] = useState([]);
	const [menu, setMenu] = useState(null);
	const [currentListName, setCurrentListName] = useState(null);
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [menuList, setMenuList] = useState([
		{
			name: "wristband material",
			limit: 1,
			selected: [],
			price: 0,
			mhz: [],
			section: "default",
			type: "wristband",
		},
		{
			name: "wristband fastener type",
			limit: 1,
			selected: [],
			price: 0,
			mhz: [],
			section: "default",
			type: "wristband",
		},
		{
			name: "wristband diameter",
			limit: 1,
			selected: [],
			price: 0,
			mhz: [],
			section: "default",
			type: "wristband",
		},
		{
			name: "rfid",
			limit: 1,
			selected: [],
			price: 0,
			mhz: [],
			section: "default",
			type: "wristband",
		},
		{
			name: "print",
			limit: 4,
			selected: [],
			price: 0,
			mhz: [],
			section: "print",
			type: "wristband",
		},
		{
			name: "barcode",
			limit: 5,
			selected: [],
			price: 0,
			mhz: [],
			section: "print-in",
			type: "wristband",
		},
	]);

	const getBracelets = async () => {
		const resp = await axios.get(`${BASE_URL}/bracelets`);
		if (resp.status === 200) {
			setData(await resp.data);
		}
	};

	useEffect(() => {
		getBracelets();
	}, []);

	const singleSelection = (iData, itemId, menuname) => {
		const item = document.getElementById(`item-${itemId.split(" ").join("-")}`);
		const parentList = document.getElementById(item?.parentNode.id);
		const _itemlist = menuList.find((x) => x.name.split(" ").join("") === menuname);
		if (menuname === "rfid") {
			if (_itemlist.selected.includes(itemId) && item?.className.includes("selected-item")) {
				item?.classList.remove("selected-item");
				_itemlist?.selected.pop();
				removeItemStyle(menuname, _itemlist);
			} else {
				item?.classList.add("selected-item");
				_itemlist?.selected.pop();
				_itemlist?.selected.push(itemId);
			}
		} else {
			parentList?.childNodes.forEach((x) => {
				if (x.className.includes("selected-item")) {
					x.classList.remove("selected-item");
				}
			});
			item?.classList.add("selected-item");
			_itemlist?.selected.pop();
			_itemlist?.selected.push(itemId);
		}
		checkSelectedItems();
	};

	const autoSingleSelect = () => {
		singleSelectedItems.map((item) => {
			if (item !== "rfid") {
				const _menu = menuList.find((x) => x.name.split(" ").join("") === item);
				data.map((item2) => {
					if (item2[item]) {
						_menu.price = item2[item][0]["price_1_10"];
						saveAfterAdd(item2[item][0].name, _menu);
						singleSelection(null, item2[item][0].name, _menu.name.split(" ").join(""), _menu, item2[item][0].name);
						checkSelectedItems();
					}
				});
			}
		});
	};

	useEffect(() => {
		autoSingleSelect();
	}, [data]);

	let arr = [];
	const checkSelectedItems = () => {
		menuList.map((x) => {
			x.price = 0;
		});
		arr = [];
		data.map((item, i) => {
			menuList.map((item2) => {
				const joinedName = item2.name.split(" ").join("");
				if (item[joinedName]) {
					if (item2.selected.length > 0) {
						item2.selected.map((innerItem) => {
							const currentItem = item[joinedName].find((x) => x.name === innerItem);
							displayItemStyle(item2, currentItem.name, checkQuantity(currentItem, quantity));
							if (!singleSelectedItems.includes(joinedName)) {
								item2.price += checkQuantity(currentItem, quantity);
							} else {
								item2.price = checkQuantity(currentItem, quantity);
							}
						});
						arr.push(item2.price);
					}
				}
			});
		});
		const totalPrice = arr.reduce((a, b) => a + b, 0);
		setPrice(totalPrice * quantity);
	};

	const saveAfterAdd = (itemname, menulist) => {
		if (!menulist.selected.includes(itemname)) {
			menulist.selected.push(itemname);
		}
		menuList.map((x) => {
			if (x.name === menulist.name) {
				x = menulist;
			}
		});
	};

	const multipleSelection = (iData, itemId, menulist, itemType, itemname) => {
		const item = document.getElementById(`item-${itemId.split(" ").join("-")}`);
		const parentList = document.getElementById(item?.parentNode.id);
		let counter = 0;
		parentList?.childNodes.forEach((x) => {
			if (x.className.includes("selected-item")) {
				counter++;
			}
		});

		if (item?.className.includes("selected-item")) {
			item?.classList.remove("selected-item");
			menulist.selected = menulist.selected.filter((x) => x !== itemname);
			removeItemStyle(itemname, menulist);
		} else {
			if (counter < menulist.limit) {
				item?.classList.add("selected-item");
				saveAfterAdd(itemname, menulist);
			}
		}
		checkSelectedItems();
	};

	const showMenu = (menuId, menulist) => {
		const _menu = document.getElementById(menuId);
		const _menulistname = menulist.name.split(" ").join("");

		if (_menu.className.includes("menu-expanded")) {
			document.getElementById(menuId).classList.remove("menu-expanded");
			setMenu(null);
			setCurrentListName(null);
		} else {
			document.querySelectorAll(".prices-listhead").forEach((item) => {
				if (item.className.includes("menu-expanded")) item.classList.remove("menu-expanded");
			});

			_menu.classList.add("menu-expanded");
			setMenu(_menulistname);
			setCurrentListName(menulist.name);
		}
	};

	const showList = () => {
		const _currentmenu = menuList.find((y) => y.name === currentListName);
		if (_currentmenu?.selected.length > 0) {
			const _itemlist = document.getElementById(menu);
			_itemlist?.childNodes.forEach((x) => {
				if (_currentmenu.selected.includes(x.innerHTML)) {
					x.classList.add("selected-item");
				}
			});
		}
	};

	useEffect(() => {
		checkSelectedItems();
	}, [quantity]);

	useEffect(() => {
		showList();
	});

	const singleSelectedItems = ["wristbandmaterial", "wristbandfastenertype", "wristbanddiameter", "rfid"];

	const displayItemStyle = (item, itemName, itemPrice) => {
		const dataItem = data.find((x) => x["rfid"])["rfid"].find((x) => x.name === itemName);
		if (item.name === "wristband diameter") setWristbandDiameter({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (item.name === "wristband material") setWristbandMaterial({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (item.name === "wristband fastener type") setWristbandFastener({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (itemName === "logo") setLogo({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (itemName === "qr-code") setQrCode({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (item.name === "barcode") setBarCode({ display: true, itemName: itemName, itemPrice: itemPrice, itemList: item });
		if (itemName === "text") setText({ display: true, itemName: itemName, itemPrice: itemPrice, itemList: item });
		if (itemName === "chip number") setChipNumber({ display: true, itemName: itemName, itemPrice: itemPrice, itemList: item });
		if (item.name === "rfid") setRfid({ display: true, itemName: itemName, itemPrice: itemPrice, itemList: item });
	};

	const removeItemStyle = (itemName, menulist) => {
		if (itemName === "logo") setLogo({});
		if (itemName === "qr-code") setQrCode({});
		if (menulist.name === "barcode") setBarCode({});
		if (itemName === "text") setText({});
		if (itemName === "chip number") setChipNumber({});
		if (menulist.name === "rfid") setRfid({});
	};

	const WristbandStyle = () => {
		return (
			<div className="wristband">
				{wristbandDiameter.display && <WristbandDiameterStyle />}
				{wristbandMaterial.display && <WristbandMaterialStyle />}
				{wristbandFastener.display && <WristbandFastenerStyle />}
				{rfid.display && <RfidStyle />}
				{logo.display && <LogoStyle />}
				{qrCode.display && <QrcodeStyle />}
				{barCode.display && <BarCodeStyle />}
				{text.display && <TextStyle />}
				{chipNumber.display && <ChipNumberStyle />}
			</div>
		);
	};

	const [wristbandDiameter, setWristbandDiameter] = useState({});
	const WristbandDiameterStyle = () => {
		return (
			<div className="wristband-border">
				<TooltipLeft toolTipStyle={{ left: 220, top: 66 }} tooltipStickStyle={{ width: 41 }} item={wristbandDiameter} quantity={quantity} />
			</div>
		);
	};

	const [wristbandMaterial, setWristbandMaterial] = useState({});
	const WristbandMaterialStyle = () => {
		return (
			<div className="wristband-material">
				<TooltipLeft toolTipStyle={{ left: 193, top: -13 }} tooltipStickStyle={{ width: 57 }} item={wristbandMaterial} quantity={quantity} />
			</div>
		);
	};

	const [wristbandFastener, setWristbandFastener] = useState({});
	const WristbandFastenerStyle = () => {
		return (
			<div className="wristband-fastener">
				<TooltipLeft toolTipStyle={{ left: 220, top: 80 }} tooltipStickStyle={{ width: 43 }} item={wristbandFastener} quantity={quantity} />
			</div>
		);
	};

	const [logo, setLogo] = useState({});
	const LogoStyle = () => {
		return (
			<div className="wlogo">
				<div className="wlogo-style"></div>
				<TooltipTop toolTipStyle={{ left: 13, top: 154 }} tooltipStickStyle={{ height: 205 }} item={logo} quantity={quantity} />
			</div>
		);
	};

	const [qrCode, setQrCode] = useState({});
	const QrcodeStyle = () => {
		return (
			<div className="qr-code">
				<div className="qrcode-style"></div>
				<TooltipBottom toolTipStyle={{ top: -83, left: 39 }} tooltipStickStyle={{ height: 120 }} item={qrCode} quantity={quantity} />
			</div>
		);
	};

	const [barCode, setBarCode] = useState({});
	const BarCodeStyle = () => {
		const _barCodeShortNames = barCode.itemList.selected
			.map((x) => {
				if (x.length > 7) return x.slice(0, 7) + "...";
				else return x;
			})
			.join(" | ");
		return (
			<div id="bar-code-wr" className="bar-code-wr">
				<div className="bar-code-style-wr"></div>
				<TooltipTop toolTipStyle={{ left: 39, top: 182 }} tooltipStickStyle={{ height: 123 }} item={{ ...barCode, itemName: _barCodeShortNames }} quantity={quantity * barCode.itemList.selected.length} />
			</div>
		);
	};

	const [text, setText] = useState({});
	const TextStyle = () => {
		return (
			<div className="text-wr">
				<p className="text-style">TEXT</p>
				<TooltipBottom toolTipStyle={{ top: -41, left: 78 }} tooltipStickStyle={{ height: 33 }} item={text} quantity={quantity} />
			</div>
		);
	};

	const [chipNumber, setChipNumber] = useState({});
	const ChipNumberStyle = () => {
		return (
			<div className="chip-number-wr">
				<p className="chip-number-style-wr">123-456</p>
				<TooltipLeft toolTipStyle={{ left: 71, top: 237 }} tooltipStickStyle={{ width: 172 }} item={chipNumber} quantity={quantity} />
			</div>
		);
	};

	const [rfid, setRfid] = useState({});
	const RfidStyle = () => {
		return (
			<div className="rfid">
				<div className="rfid-style">
					<div className="rfid-chip"></div>
					<div className="rfid-chip-stick-1"></div>
					<div className="rfid-chip-stick-2"></div>
				</div>
				<TooltipLeft toolTipStyle={{ left: 70, top: 109 }} tooltipStickStyle={{ width: 180 }} item={rfid} quantity={quantity} />
			</div>
		);
	};

	const ShowItemsList = () => {
		if (menu) {
			const menuItems = data.find((x) => x[menu])[menu];
			const menulist = menuList.find((x) => x.name.split(" ").join("") === menu);
			return (
				<div id={menu} className="item-list">
					{menuItems.map((item, i) => {
						const nameId = item.name.split(" ").join("-");
						if (singleSelectedItems.includes(menu)) {
							return (
								<p key={`ss-${nameId}`} id={`item-${nameId}`} className="prices-item" onClick={() => singleSelection(item, item.name, menu, menulist, item.name)}>
									{item.name}
								</p>
							);
						} else {
							return (
								<p key={`ms-${nameId}`} id={`item-${nameId}`} className="prices-item" onClick={() => multipleSelection(item, `item-${nameId}`, menulist, menu, item.name)}>
									{item.name}
								</p>
							);
						}
					})}
				</div>
			);
		}
	};

	return (
		<>
			<div className="prices w-93">
				<div className="prices-sidebar">
					<div className="prices-listbox">
						{data.map((item, i) => {
							const unitedListName = menuList[i].name.split(" ").join("");
							if (menuList[i].section === "default") {
								return (
									<div key={unitedListName} className="menu-listbox">
										<p id={`menu${i}`} className="prices-listhead" onClick={() => showMenu(`menu${i}`, menuList[i], unitedListName)}>
											{menuList[i].name}
										</p>
									</div>
								);
							}
						})}
						<div className="extended-menu">
							<h3>PRINTING</h3>
							{data.map((item, i) => {
								const unitedListName = menuList[i].name.split(" ").join("");
								if (menuList[i].section === "print-in") {
									return (
										<div key={unitedListName} className="menu-listbox">
											<p id={`menu${i}`} className="prices-listhead" onClick={() => showMenu(`menu${i}`, menuList[i], unitedListName)}>
												{menuList[i].name}
											</p>
										</div>
									);
								}

								if (menuList[i].section === "print") {
									const menuItems = data.find((x) => x["print"])["print"];
									const menulist = menuList.find((x) => x.name.split(" ").join("") === "print");
									return (
										<div id={"print"} className="item-list">
											{menuItems.map((item, i) => {
												const nameId = item.name.split(" ").join("-");
												if (item.type.includes(menulist.type)) {
													return (
														<p key={`ua-${nameId}`} id={`item-${nameId}`} className="prices-item" onClick={() => multipleSelection(item, item.name, menulist, "print", item.name)}>
															{item.name}
														</p>
													);
												}
											})}
										</div>
									);
								}
							})}
						</div>
					</div>
					<div className="items-listbox">
						<ShowItemsList />
					</div>
					<div className="items-listbox">
						<div className="board">
							<WristbandStyle />
							<div className="board-footer">
								<div className="board-quantity-container">
									<label className="quantity-label" htmlFor="quantity">
										რაოდენობა
									</label>
									<input id="quantity" className="quantity" type="number" min={1} max={5000} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
								</div>
								<h3 className="price">ჯამი: {price} ლარი</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button className="btn btn-blue" onClick={() => setProduct(0)}>
				Back...
			</button>
		</>
	);
}

export default Bracelet;
