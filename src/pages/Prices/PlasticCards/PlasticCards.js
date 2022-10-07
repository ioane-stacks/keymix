import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../BASE_URL";
import "./plasticcard.css";

import { TooltipTop, TooltipLeft, TooltipBottom } from "../Tooltip";

import { checkQuantity } from "../ExtendedComponents";

function PlasticCards({ setProduct }) {
	const [data, setData] = useState([]);
	const [menu, setMenu] = useState(null);
	const [currentListName, setCurrentListName] = useState(null);
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [menuList, setMenuList] = useState([
		{
			name: "card dimension",
			limit: 1,
			selected: [],
			price: 0,
			section: "default",
			type: "plasticcard",
		},
		{
			name: "card style",
			limit: 1,
			selected: [],
			price: 0,
			section: "default",
			type: "plasticcard",
		},
		{
			name: "card cutting",
			limit: 1,
			selected: [],
			price: 0,
			section: "default",
			type: "plasticcard",
		},
		{
			name: "print",
			limit: 5,
			selected: [],
			price: 0,
			section: "print",
			type: "plasticcard",
		},
		{
			name: "barcode",
			limit: 5,
			selected: [],
			price: 0,
			section: "print-in",
			type: "plasticcard",
		},
		{
			name: "contacted chip",
			limit: 1,
			selected: [],
			price: 0,
			section: "default",
			type: "plasticcard",
		},
		{
			name: "magnetic strip",
			limit: 1,
			selected: [],
			price: 0,
			section: "default",
			type: "plasticcard",
		},
		{
			name: "embossing",
			limit: 1,
			selected: [],
			price: 0,
			section: "default",
			type: "plasticcard",
		},
		{
			name: "rfid",
			limit: 2,
			selected: [],
			price: 0,
			mhz: [],
			section: "default",
			type: "plasticcard",
		},
	]);

	//CARD STYLE
	const [rfid13, setRfid13] = useState({});
	const [rfid125, setRfid125] = useState({});
	const [magneticstr, setMagneticstr] = useState({});
	const [contactedChip, setContactedChip] = useState({});
	const [cardCutting, setCardCutting] = useState({});
	const [cardDimension, setCardDimension] = useState({});
	const [cardStyle, setCardStyle] = useState({});
	const [qrCode, setQrCode] = useState({});
	const [barCode, setBarCode] = useState({});
	const [backgroundImage, setBackgroundImage] = useState({});
	const [fullName, setFullName] = useState({});
	const [avatar, setAvatar] = useState({});
	const [chipNumber, setChipNumber] = useState({});
	const [embossing, setEmbossing] = useState({});
	//END CARD STYLE

	const getPlasticCards = async () => {
		const resp = await axios.get(`${BASE_URL}/plasticcard`);
		if (resp.status === 200) {
			setData(await resp.data);
		}
	};

	useEffect(() => {
		getPlasticCards();
	}, []);

	useEffect(() => {
		checkSelectedItems();
	}, [quantity]);

	const singleSelection = (iData, itemId, menuname) => {
		const item = document.getElementById(itemId);
		const parentList = document.getElementById(item?.parentNode.id);
		const _itemlist = menuList.find((x) => x.name.split(" ").join("") === menuname);
		parentList?.childNodes.forEach((x) => {
			if (x.className.includes("selected-item")) {
				x.classList.remove("selected-item");
			}
		});

		item?.classList.add("selected-item");
		_itemlist?.selected.pop();
		_itemlist?.selected.push(itemId.replace("item-", ""));
		checkSelectedItems();
	};

	const autoSingleSelect = () => {
		singleSelectedItems.map((item) => {
			const _menu = menuList.find((x) => x.name.split(" ").join("") === item);
			data.map((item2) => {
				if (item2[item]) {
					_menu.price = item2[item][0]["price_1_10"];
					saveAfterAdd(item2[item][0].name, _menu);
					singleSelection(null, `item-${item2[item][0].name}`, _menu.name.split(" ").join(""), _menu, item2[item][0].name);
					checkSelectedItems();
				}
			});
		});
	};

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
		showList();
	});

	const multipleSelection = (iData, itemId, menulist, itemType, itemname) => {
		const item = document.getElementById(itemId);
		const parentList = document.getElementById(item?.parentNode.id);
		let counter = 0;
		parentList?.childNodes.forEach((x) => {
			if (x.className.includes("selected-item")) {
				counter++;
			}
		});

		if (item?.className.includes("selected-item")) {
			const mhz = item?.getAttribute("data-mhz");
			if (mhz) {
				removeItemStyle(mhz, menulist);
				menulist.mhz = menulist.mhz.filter((x) => x !== mhz);
			}
			item?.classList.remove("selected-item");
			menulist.selected = menulist.selected.filter((x) => x !== itemname);
			removeItemStyle(itemname, menulist);
		} else {
			if (counter < menulist.limit) {
				if (itemType === "rfid") {
					checkRFIDMhz(item, parentList, iData, itemname, menulist, itemType);
				} else {
					item?.classList.add("selected-item");
					saveAfterAdd(itemname, menulist);
				}
			}
		}
		checkSelectedItems();
	};

	useEffect(() => {
		autoSingleSelect();
	}, [data]);

	const checkRFIDMhz = (item, parentList, iData, itemname, menulist, itemType) => {
		let mhz;
		let currentMhz = item.getAttribute("data-mhz");
		parentList?.childNodes.forEach((x) => {
			if (x.className.includes("selected-item")) {
				mhz = x.getAttribute("data-mhz");
			}
		});
		if (mhz) {
			if (currentMhz !== mhz) {
				item.classList.add("selected-item");
				saveAfterAdd(itemname, menulist, currentMhz);
			}
		} else {
			item.classList.add("selected-item");
			saveAfterAdd(itemname, menulist, currentMhz);
		}
	};

	const saveAfterAdd = (itemname, menulist, currentMhz) => {
		if (!menulist.selected.includes(itemname)) {
			menulist.selected.push(itemname);
			if (currentMhz && menulist.mhz) {
				menulist.mhz.push(currentMhz);
			}
		}
		menuList.map((x) => {
			if (x.name === menulist.name) {
				x = menulist;
			}
		});
	};

	const displayItemStyle = (item, itemName, itemPrice) => {
		const dataItem = data.find((x) => x["rfid"])["rfid"].find((x) => x.name === itemName);
		if (dataItem?.tagFreaquency === "13.56 MHz") setRfid13({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (dataItem?.tagFreaquency === "125 KHz") setRfid125({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (itemName === "high coe." || itemName === "low coe.") setMagneticstr({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (item.name === "contacted chip") setContactedChip({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (itemName === "holed" || itemName === "cutting") setCardCutting({ display: true, itemName: itemName, itemPrice: itemPrice, cuttingSize: itemName === "holed" ? 15 : 35 });
		if (itemName === "60mm" || itemName === "70mm") setCardDimension({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (itemName === "smooth" || itemName === "faded") setCardStyle({ display: true, itemName: itemName, itemPrice: itemPrice, blured: itemName === "smooth" ? 0 : 2 });
		if (itemName === "qr-code") setQrCode({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (item.name === "barcode") setBarCode({ display: true, itemName: itemName, itemPrice: itemPrice, itemList: item });
		if (itemName === "background") setBackgroundImage({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (itemName === "avatar") setAvatar({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (itemName === "chip number") setChipNumber({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (itemName === "text") setFullName({ display: true, itemName: itemName, itemPrice: itemPrice });
		if (item.name === "embossing") setEmbossing({ display: true, itemName: itemName, itemPrice: itemPrice, itemColor: itemName.includes("simple") ? "#rgb(16 42 87)" : itemName.includes("gilded") ? "rgb(255 177 0)" : "rgb(78 78 78)" });
	};

	const removeItemStyle = (itemName, menulist) => {
		if (itemName === "13.56 MHz") setRfid13({});
		if (itemName === "125 KHz") setRfid125({});
		if (itemName === "high coe." || itemName === "low coe.") setMagneticstr({});
		if (menulist.name === "contacted chip" && !menulist.selected.includes(itemName)) setContactedChip({});
		if (itemName === "holed" || itemName === "cutting") setCardCutting({});
		if (itemName === "qr-code") setQrCode({});
		if (menulist.name === "barcode") setBarCode({});
		if (itemName === "background") setBackgroundImage({});
		if (itemName === "avatar") setAvatar({});
		if (itemName === "chip number") setChipNumber({});
		if (itemName === "text") setFullName({});
		if (menulist.name === "embossing") setEmbossing({});
	};
	const singleSelectedItems = ["carddimension", "cardstyle"];

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
								<p key={nameId} id={`item-${nameId}`} className="prices-item" onClick={() => singleSelection(item, `item-${nameId}`, menu, menulist, nameId)}>
									{item.name}
								</p>
							);
						} else {
							return (
								<p key={nameId} data-mhz={menu === "rfid" ? item.tagFreaquency : ""} id={`item-${nameId}`} className="prices-item" onClick={() => multipleSelection(item, `item-${nameId}`, menulist, menu, item.name)}>
									{item.name}
								</p>
							);
						}
					})}
				</div>
			);
		}
	};

	const PlasticCardStyle = () => {
		return (
			<div id="" className="plastic-card">
				{rfid13.display && <Rfid13 />}
				{rfid125.display && <Rfid125 />}
				{backgroundImage.display && <BackgroundImageStyle />}
				{avatar.display && <AvatarStyle />}
				{chipNumber.display && <ChipNumberStyle />}
				{cardCutting.display && <CardCuttingStyle />}
				{fullName.display && <FullNameStyle />}
				{cardDimension.display && <CardDimensionStyle />}
				{qrCode.display && <QrCodeStyle />}
				{barCode.display && <BarCodeStyle />}
				{magneticstr.display && <MagneticStripStyle />}
				{contactedChip.display && <ContactedChipStyle />}
				{embossing.display && <EmbossingStyle />}
			</div>
		);
	};

	const Rfid13 = () => {
		return (
			<div id="rfid-13" className="rfid-13">
				<div className="rfid-13-chip"></div>
				<div className="rfid-13-antena"></div>
				<div className="rfid-13-antena-stick-1"></div>
				<div className="rfid-13-antena-stick-2"></div>
				<TooltipBottom toolTipStyle={{ left: 48, top: -53 }} tooltipStickStyle={{ height: 71 }} item={rfid13} quantity={quantity} />
			</div>
		);
	};

	const Rfid125 = () => {
		return (
			<div id="rfid-125" className="rfid-125">
				<div className="rfid-125-chip"></div>
				<div className="rfid-125-antena"></div>
				<div className="rfid-125-antena-stick-1"></div>
				<div className="rfid-125-antena-stick-2"></div>
				<TooltipBottom toolTipStyle={{ left: 283, top: -77 }} tooltipStickStyle={{ height: 119 }} item={rfid125} quantity={quantity} />
			</div>
		);
	};

	const MagneticStripStyle = () => {
		return (
			<div id="magnetic-strip" className="magnetic-strip">
				<div className="magnetic-strip-boxlight">
					<div className="magnetic-strip-lighting"></div>
				</div>
				<TooltipTop toolTipStyle={{ top: 40, left: 324 }} tooltipStickStyle={{ height: 45 }} item={magneticstr} quantity={quantity} />
			</div>
		);
	};

	const ContactedChipStyle = () => {
		return (
			<div id="contacted-chip" className="contacted-chip">
				<div className="contacted-chip-border"></div>
				<TooltipTop toolTipStyle={{ left: 45, top: 115 }} tooltipStickStyle={{ height: 145 }} item={contactedChip} quantity={quantity} />
			</div>
		);
	};

	const CardCuttingStyle = () => {
		return (
			<div id="card-cutting" className="card-cutting">
				<div className="card-cutting-cut" style={cardCutting.itemName === "holed" ? { height: cardCutting.cuttingSize } : { height: cardCutting.cuttingSize, top: 95 }}></div>
				<TooltipLeft item={cardCutting} toolTipStyle={{ top: cardCutting.itemName === "holed" ? 1 : 90, left: 374 }} quantity={quantity} />
			</div>
		);
	};

	const CardDimensionStyle = () => {
		return (
			<div id="card-dimension" className="card-dimension">
				<div className="card-dimension-border"></div>
				<TooltipLeft toolTipStyle={{ left: 374, top: 43 }} item={cardDimension} quantity={quantity} />
			</div>
		);
	};

	const CardStyle = () => {
		return (
			<div id="card-style" className="card-style">
				<div className="card-style-card">
					<p style={{ filter: `blur(${cardStyle.blured}px)` }}>{cardStyle.itemName}</p>
				</div>
				<TooltipLeft toolTipStyle={{ left: 87, top: -39 }} item={cardStyle} quantity={quantity} />
			</div>
		);
	};

	const QrCodeStyle = () => {
		return (
			<div id="qr-code" className="qr-code">
				<div className="qr-code-style"></div>
				<TooltipLeft toolTipStyle={{ left: 337, top: 131 }} tooltipStickStyle={{ width: 76 }} item={qrCode} quantity={quantity} />
			</div>
		);
	};

	const BarCodeStyle = () => {
		const _barCodeShortNames = barCode.itemList.selected
			.map((x) => {
				if (x.length > 7) return x.slice(0, 7) + "...";
				else return x;
			})
			.join(" | ");
		return (
			<div id="bar-code" className="bar-code">
				<div className="bar-code-style"></div>
				<TooltipTop toolTipStyle={{ left: 217, top: 143 }} tooltipStickStyle={{ height: 153 }} item={{ ...barCode, itemName: _barCodeShortNames }} quantity={quantity} />
			</div>
		);
	};

	const BackgroundImageStyle = () => {
		return (
			<div id="back-image" className="back-image">
				<div className="back-image-style"></div>
				<TooltipLeft toolTipStyle={{ left: 371, top: -32 }} tooltipStickStyle={{ width: 34 }} item={backgroundImage} quantity={quantity} />
			</div>
		);
	};

	//SCHEMATIC
	const FullNameStyle = () => {
		return (
			<div id="full-name" className="full-name">
				<p className="full-name-style">მაგ.:სახელი გვარი</p>
				<div className="tooltip" style={{ left: 402, top: 172 }}>
					<div className="tooltip-stick-schematic">
						<div className="tooltip-stick-left" style={{ width: 116, left: -112 }}></div>
						<div className="tooltip-stick-top" style={{ height: 90, top: -101, left: -112 }}></div>
					</div>
					<div className="tooltip-info">
						<p>{fullName.itemName}</p>
						<div className="horisont"></div>
						<p>
							ფასი: {fullName.itemPrice}ლ. | საერთო: {fullName.itemPrice * quantity}ლ.
						</p>
					</div>
				</div>
			</div>
		);
	};

	const AvatarStyle = () => {
		return (
			<div id="avatar" className="avatar">
				<div className="avatar-style">
					<div className="human-head"></div>
					<div className="human-body"></div>
				</div>
				<div className="tooltip" style={{ left: 445, top: -38 }}>
					<div className="tooltip-stick-schematic">
						<div className="tooltip-stick-left" style={{ width: 27, left: -26 }}></div>
						<div className="tooltip-stick-top" style={{ height: 28, top: -11, left: -27 }}></div>
						<div className="tooltip-stick-left" style={{ width: 277, left: -302, top: 15 }}></div>
						<div className="tooltip-stick-top" style={{ height: 71, top: 15, left: -302 }}></div>
					</div>
					<div className="tooltip-info">
						<p>{avatar.itemName}</p>
						<div className="horisont"></div>
						<p>
							ფასი: {avatar.itemPrice}ლ. | საერთო: {avatar.itemPrice * quantity}ლ.
						</p>
					</div>
				</div>
			</div>
		);
	};
	//ENDSCHEMATIC

	const ChipNumberStyle = () => {
		return (
			<div id="chip-number" className="chip-number">
				<p className="chip-number-style">123-4567</p>
				<TooltipTop toolTipStyle={{ left: 306, top: 213 }} tooltipStickStyle={{ height: 112 }} item={chipNumber} quantity={quantity} />
			</div>
		);
	};

	const EmbossingStyle = () => {
		return (
			<div className="embossing" id="embossing">
				<p className="embossing-style" style={{ backgroundColor: embossing.itemColor }}>
					ემბოსირება
				</p>
				<TooltipBottom toolTipStyle={{ left: 242, top: -39 }} tooltipStickStyle={{ height: 36 }} item={embossing} quantity={quantity} />
			</div>
		);
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
														<p key={nameId} id={`item-${nameId}`} className="prices-item" onClick={() => multipleSelection(item, `item-${nameId}`, menulist, "print", item.name)}>
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
							<PlasticCardStyle />
							<CardStyle />
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

export default PlasticCards;
