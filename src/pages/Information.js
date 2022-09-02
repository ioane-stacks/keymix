import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { ReactDOM } from "react";
import { render } from "@testing-library/react";

function Information() {
	function expandMenu(dropid) {
		const dropD = document.getElementById(`dropD${dropid}`);
		const drop = document.getElementById(`drop${dropid}`);
		const icon = document.getElementById(`icon${dropid}`);
		drop.classList.toggle("d-block");
		// if (drop.className.includes("d-block")) {
		// 	icon.children[0].remove();
		// 	// icon.insertAdjacentHTML("afterbegin", `${}`);
		// }

		// console.log(ReactDOM.findDOMNode(<MdOutlineExpandLess />));
	}

	return (
		<div className="container">
			<section className="page-section">
				<div className="ps-header">
					<h1>ინფორმაცია</h1>
				</div>
				<div className="information-listbox">
					<div className="information-items">
						<ul>
							<li className="ii-prod">
								<p className="ii-prod-name">- RFID</p>
								<div className="ii-prod-dropdown">
									<ul>
										<li className="ii-prod-name">ტექნიკური მიმოხილვა</li>
										<li className="iipd-type">
											<p className="iipd-type-name">- MIFARE FAMILY</p>
											<div className="ii-prod-dropdown">
												<ul>
													<li className="iipd-type-name">RAGAC 1</li>
													<li className="iipd-type-name">RAGAC 2</li>
												</ul>
											</div>
										</li>
										<li className="iipd-type">
											<p className="iipd-type-name">- FUDAN FAMILY</p>
											<div className="ii-prod-dropdown">
												<ul>
													<li className="iipd-type">
														<ul>
															<li className="iipd-type">
																<p className="iipd-type-name">- RAGAC FAMILY 1</p>
																<div className="ii-prod-dropdown">
																	<ul>
																		<li className="iipd-type-name">FAMILY 1</li>
																		<li className="iipd-type-name">FAMILY 2</li>
																	</ul>
																</div>
															</li>
															<li className="iipd-type">
																<p className="iipd-type-name">- RAGAC FAMILY 2</p>
																<div className="ii-prod-dropdown">
																	<ul>
																		<li className="iipd-type-name">FAMILY 1</li>
																		<li className="iipd-type-name">FAMILY 2</li>
																	</ul>
																</div>
															</li>
														</ul>
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Information;
