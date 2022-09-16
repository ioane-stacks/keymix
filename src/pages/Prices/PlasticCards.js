import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../BASE_URL";

function PlasticCards({ setProduct }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		getPlasticCards();
	}, []);

	const getPlasticCards = async () => {
		const resp = await axios.get(`${BASE_URL}/pc`);
		if (resp.status === 200) {
			setData(await resp.data);
		}
	};

	const menuList = ["barcode", "card dimension", "card style", "contacted chip", "magnetic strip", "rfid"];

	return (
		<div className="prices w-93">
			<div className="prices-sidebar">
				<div className="prices-listbox">
					{data.map((item, i) => {
						return (
							<div className="items-listbox">
								<p key={i} className="prices-listhead">
									{menuList[i]}
								</p>
								{item[menuList[i].split(" ").join("")].map((subitem) => {
									return <p className="prices-item">{subitem.name}</p>;
								})}
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
