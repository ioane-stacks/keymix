import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { ReactDOM } from "react";
import { render } from "@testing-library/react";

import { defaultContent2 } from "../data/defaultContent2.js";

function Information() {
	const information = defaultContent2.information;

	function InformationList() {
		return (
			<div className="listbox">
				<div className="listbox-items">
					<ul>
						{information.map((inf, i) => {
							return (
								<li className="listbox-menu" key={inf.menuName}>
									<div className="listbox-menu-name">
										<ul>
											<li>- {inf.menuName}</li>
										</ul>
									</div>
									<div className="listbox-menu-items">
										<ul>
											<li className="listbox-submenu">
												{inf.menu.map((item, j) => {
													if (item.subMenu) {
														return (
															<div key={item.menuName}>
																<div className="listbox-submenu-name">
																	<ul>
																		<li>- {item.menuName}</li>
																	</ul>
																</div>
																<div className="listbox-submenu-items">
																	<ul>
																		{item.subMenu.map((subItem, k) => {
																			if (subItem.subMenu) {
																				return (
																					<div key={subItem.menuName}>
																						<div className="listbox-submenu-name">
																							<ul>
																								<li>- {subItem.menuName}</li>
																							</ul>
																						</div>
																						<div className="listbox-submenu-items">
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
