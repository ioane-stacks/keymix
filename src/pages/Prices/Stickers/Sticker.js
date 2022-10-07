import React, { useState, useEffect } from "react";
import axios from "axios";

import "./sticker.css";
import { BASE_URL } from "../../../BASE_URL";

import { checkQuantity } from "../ExtendedComponents";
import { TooltipBottom, TooltipTop, TooltipLeft } from "../Tooltip";

function Sticker({ setProduct }) {
	const [data, setData] = useState([]);
	const [menu, setMenu] = useState(null);
	const [currentListName, setCurrentListName] = useState(null);
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [menuList, setMenuList] = useState([
		{
			name: "sticker material",
			limit: 1,
			selected: [],
			price: 0,
			mhz: [],
			section: "default",
			type: "sticker",
		},
		{
			name: "sticker shape",
			limit: 1,
			selected: [],
			price: 0,
			mhz: [],
			section: "default",
			type: "sticker",
		},
		{
			name: "sticker thickness",
			limit: 1,
			selected: [],
			price: 0,
			mhz: [],
			section: "default",
			type: "sticker",
		},
		{
			name: "rfid",
			limit: 1,
			selected: [],
			price: 0,
			mhz: [],
			section: "default",
			type: "sticker",
		},
		{
			name: "print",
			limit: 5,
			selected: [],
			price: 0,
			mhz: [],
			section: "print",
			type: "sticker",
		},
		{
			name: "barcode",
			limit: 5,
			selected: [],
			price: 0,
			mhz: [],
			section: "print-in",
			type: "sticker",
		},
	]);

	const getBracelets = async () => {
		const resp = await axios.get(`${BASE_URL}/sticker`);
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

	const singleSelectedItems = ["stickermaterial", "stickershape", "stickerthickness", "rfid"];

	const displayItemStyle = (item, itemName, itemPrice) => {
		if (item.name === "sticker material") setStickerMaterial({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (item.name === "sticker shape") setStickerShape({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (item.name === "sticker thickness") setStickerThickness({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (itemName === "logo") setLogo({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (itemName === "qr-code") setQrCode({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (item.name === "barcode") setBarCode({ display: true, itemName: itemName, itemPrice: itemPrice, itemList: item });
		if (itemName === "text") setText({ display: true, itemName: itemName, itemPrice: itemPrice, itemList: item });
		if (itemName === "chip number") setChipNumber({ display: true, itemName: itemName, itemPrice: itemPrice, itemList: item });
		if (item.name === "rfid") setRfid({ display: true, itemName: itemName, itemPrice: itemPrice, itemList: item });
		if (itemName === "background") setbackgroundImage({ display: true, itemName: itemName, itemPrice: itemPrice, itemList: item });
	};

	const removeItemStyle = (itemName, menulist) => {
		if (itemName === "logo") setLogo({});
		if (itemName === "qr-code") setQrCode({});
		if (menulist.name === "barcode") setBarCode({});
		if (itemName === "text") setText({});
		if (itemName === "chip number") setChipNumber({});
		if (menulist.name === "rfid") setRfid({});
		if (itemName === "background") setbackgroundImage({});
	};

	const StickerStyle = () => {
		return (
			<div className="sticker-style">
				{stickerMaterial.display && <StickerMaterialStyle />}
				{stickerShape.display && <StickerShapeStyle />}
				{stickerThickness.display && <StickerThicknessStyle />}
				{backgroundImage.display && <BackgroundImageStyle />}
				{rfid.display && <RfidStyle />}
				{logo.display && <LogoStyle />}
				{qrCode.display && <QrcodeStyle />}
				{barCode.display && <BarCodeStyle />}
				{text.display && <TextStyle />}
				{chipNumber.display && <ChipNumberStyle />}
			</div>
		);
	};

	const [stickerMaterial, setStickerMaterial] = useState({});
	const StickerMaterialStyle = () => {
		return (
			<div className="sticker-material">
				<TooltipLeft toolTipStyle={{ left: 220, top: 0 }} tooltipStickStyle={{ width: 41 }} item={stickerMaterial} quantity={quantity} />
			</div>
		);
	};

	const [stickerShape, setStickerShape] = useState({});
	const StickerShapeStyle = () => {
		return (
			<div className="sticker-shape">
				<TooltipLeft toolTipStyle={{ left: 220, top: 40 }} tooltipStickStyle={{ width: 41 }} item={stickerShape} quantity={quantity} />
			</div>
		);
	};

	const [stickerThickness, setStickerThickness] = useState({});
	const StickerThicknessStyle = () => {
		return (
			<div className="sticker-thickness">
				<TooltipLeft toolTipStyle={{ left: 220, top: 45 }} tooltipStickStyle={{ width: 43 }} item={stickerThickness} quantity={quantity} />
			</div>
		);
	};

	const [logo, setLogo] = useState({});
	const LogoStyle = () => {
		return (
			<div className="sticker-wlogo">
				<div className="sticker-wlogo-style"></div>
				<TooltipBottom toolTipStyle={{ left: 13, top: -47 }} tooltipStickStyle={{ height: 37 }} item={logo} quantity={quantity} />
			</div>
		);
	};

	const [qrCode, setQrCode] = useState({});
	const QrcodeStyle = () => {
		return (
			<div className="sticker-qr-code">
				<div className="sticker-qrcode-style"></div>
				<TooltipTop toolTipStyle={{ top: 133, left: 12 }} tooltipStickStyle={{ height: 65 }} item={qrCode} quantity={quantity} />
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
			<div id="sticker-bar-code" className="sticker-bar-code">
				<div className="sticker-bar-code-style"></div>
				<TooltipTop toolTipStyle={{ left: 70, top: 137 }} tooltipStickStyle={{ height: 22 }} item={{ ...barCode, itemName: _barCodeShortNames }} quantity={quantity * barCode.itemList.selected.length} />
			</div>
		);
	};

	const [text, setText] = useState({});
	const TextStyle = () => {
		return (
			<div className="sticker-text">
				<p className="sticker-text-style">სახელი გვარი</p>
				<TooltipBottom toolTipStyle={{ top: -47, left: 177 }} tooltipStickStyle={{ height: 34 }} item={text} quantity={quantity} />
			</div>
		);
	};

	const [chipNumber, setChipNumber] = useState({});
	const ChipNumberStyle = () => {
		return (
			<div className="sticker-chip-number">
				<p className="sticker-chip-number-style">ID: 123-456</p>
				<TooltipBottom toolTipStyle={{ left: 82, top: -91 }} tooltipStickStyle={{ height: 100 }} item={chipNumber} quantity={quantity} />
			</div>
		);
	};

	const [rfid, setRfid] = useState({});
	const RfidStyle = () => {
		return (
			<div className="sticker-rfid">
				<div className="sticker-rfid-style">
					<div className="sticker-rfid-chip"></div>
					<div className="sticker-rfid-chip-stick-1"></div>
					<div className="sticker-rfid-chip-stick-2"></div>
				</div>
				<div className="tooltip" style={{ left: 167, top: 223 }}>
					<div className="tooltip-stick-schematic">
						<div className="tooltip-stick-left" style={{ width: 53, left: -52 }}></div>
						<div className="tooltip-stick-top" style={{ height: 166, top: -178, left: -52 }}></div>
					</div>
					<div className="tooltip-info">
						<p>{rfid.itemName}</p>
						<div className="horisont"></div>
						<p>
							ფასი: {rfid.itemPrice}ლ. | საერთო: {rfid.itemPrice * quantity}ლ.
						</p>
					</div>
				</div>
			</div>
		);
	};

	const [backgroundImage, setbackgroundImage] = useState({});
	const BackgroundImageStyle = () => {
		return (
			<div id="sticker-back-image" className="sticker-back-image">
				<div className="sticker-back-image-style"></div>
				<TooltipLeft toolTipStyle={{ left: 222, top: -29 }} tooltipStickStyle={{ width: 40 }} item={backgroundImage} quantity={quantity} />
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
								<p key={`ms-${nameId}`} id={`item-${nameId}`} className="prices-item" onClick={() => multipleSelection(item, item.name, menulist, menu, item.name)}>
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
							<StickerStyle />
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

export default Sticker;
