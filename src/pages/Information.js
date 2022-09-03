import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { ReactDOM } from "react";
import { render } from "@testing-library/react";

import { defaultContent2 } from "../data/defaultContent2.js";

function Information() {
	const information = defaultContent2.information;

	function showSubMenu(itemId) {
		const item = document.getElementById(itemId);
		const item2 = document.getElementById(itemId + "-a");
		item2.classList.toggle("d-block");
		item.children[0].children[0].classList.toggle("expanded");
	}

	function InformationList() {
		return (
			<div className="listbox">
				<div className="listbox-items">
					<ul>
						{information.map((inf, i) => {
							return (
								<li className="listbox-menu" key={inf.menuName}>
									<div className="listbox-menu-name" id={`lm${i}`} onClick={() => showSubMenu(`lm${i}`)}>
										<ul>
											<li className="collapsed">{inf.menuName}</li>
										</ul>
									</div>
									<div className="listbox-menu-items" id={`lm${i}-a`}>
										<ul>
											<li className="listbox-submenu">
												{inf.menu.map((item, j) => {
													if (item.subMenu) {
														return (
															<div key={item.menuName}>
																<div className="listbox-submenu-name" id={`ls${j}`} onClick={() => showSubMenu(`ls${j}`)}>
																	<ul>
																		<li className="collapsed">{item.menuName}</li>
																	</ul>
																</div>
																<div className="listbox-submenu-items" id={`ls${j}-a`}>
																	<ul>
																		{item.subMenu.map((subItem, k) => {
																			if (subItem.subMenu) {
																				return (
																					<div key={subItem.menuName}>
																						<div className="listbox-submenu-name" id={`ls${k}`} onClick={() => showSubMenu(`ls${k}`)}>
																							<ul>
																								<li className="collapsed">{subItem.menuName}</li>
																							</ul>
																						</div>
																						<div className="listbox-submenu-items" id={`ls${k}-a`}>
																							<ul>
																								{subItem.subMenu.map((itm, o) => {
																									return (
																										<li className="single-item" key={itm.menuName}>
																											{itm.menuName}
																										</li>
																									);
																								})}
																							</ul>
																						</div>
																					</div>
																				);
																			} else {
																				return (
																					<li className="single-item" key={subItem.menuName + k}>
																						{subItem.menuName}
																					</li>
																				);
																			}
																		})}
																	</ul>
																</div>
															</div>
														);
													} else {
														return (
															<div className="listbox-submenu-name" key={item.menuName + j}>
																<ul>
																	<li>{item.menuName}</li>
																</ul>
															</div>
														);
													}
												})}
											</li>
										</ul>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}

	return (
		<div className="container">
			<section className="page-section">
				<div className="ps-header">
					<h1>ინფორმაცია</h1>
				</div>
				<InformationList />
			</section>
		</div>
	);
}

export default Information;
