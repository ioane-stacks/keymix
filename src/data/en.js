import { AiOutlineCheck, AiFillLike } from "react-icons/ai";
import { FaGlobeEurope } from "react-icons/fa";

import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { IoIosWatch } from "react-icons/io";
import { TbSticker } from "react-icons/tb";
import { GiGemPendant } from "react-icons/gi";

import magneticStripe from "../icons/Production/PlasticCard.svg";

export const en = {
	navbar: {
		menubar: {
			productionName: "PRODUCTION",
			productionMenu: [
				{
					id: 1,
					productName: "CARDS",
				},
				{
					id: 2,
					productName: "BRACELET",
				},
				{
					id: 3,
					productName: "STICKERS",
				},
				{
					id: 4,
					productName: "KEYCHAIN",
				},
			],
		},
		service: "SERVICE",
		gallery: "GALLERY",
		information: "INFORMATION",
		prices: "PRICES",
	},
	bodyInformation: {
		productionName: "PRODUCTION",
		priority: [
			{
				priorityIcon: <AiOutlineCheck />,
				priorityDescription: "100% QUALITY GARANTY",
			},
			{
				priorityIcon: <AiFillLike />,
				priorityDescription: "72 HOURS DELIVERY",
			},
			{
				priorityIcon: <FaGlobeEurope />,
				priorityDescription: "MADE IN GEORGIA",
			},
		],
		productions: [
			{
				productName: "PLASTIC CARDS",
				productIcon: <BsFillCreditCard2BackFill />,
				productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita doloremque earum quia cumque nihil. Quasi est, vel debitis ex rem suscipit consequuntur inventore labore quis atque optio recusandae reiciendis sapiente, quod impedit laborum, saepe doloribus alias. Sit magnam ipsum cumque voluptatibus. Nemo autem odit sunt recusandae accusamus laboriosam eum.",
				more: "more...",
			},
			{
				productName: "BRACELETS",
				productIcon: <IoIosWatch />,
				productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita doloremque earum quia cumque nihil. Quasi est, vel debitis ex rem suscipit consequuntur inventore labore quis atque optio recusandae reiciendis sapiente, quod impedit laborum, saepe doloribus alias. Sit magnam ipsum cumque voluptatibus. Nemo autem odit sunt recusandae accusamus laboriosam eum.",
				more: "more...",
			},
			{
				productName: "STICKERS",
				productIcon: <TbSticker />,
				productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita doloremque earum quia cumque nihil. Quasi est, vel debitis ex rem suscipit consequuntur inventore labore quis atque optio recusandae reiciendis sapiente, quod impedit laborum, saepe doloribus alias. Sit magnam ipsum cumque voluptatibus. Nemo autem odit sunt recusandae accusamus laboriosam eum.",
				more: "more...",
			},
			{
				productName: "KEYFOBS",
				productIcon: <GiGemPendant />,
				productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita doloremque earum quia cumque nihil. Quasi est, vel debitis ex rem suscipit consequuntur inventore labore quis atque optio recusandae reiciendis sapiente, quod impedit laborum, saepe doloribus alias. Sit magnam ipsum cumque voluptatibus. Nemo autem odit sunt recusandae accusamus laboriosam eum.",
				more: "more...",
			},
		],
	},
	footer: {
		socialPages: {
			socialPageName: "SOCIAL PAGES",
			facebook: "facebook",
			instagram: "instagram",
			linkedin: "linkedin",
			youtube: "youtube",
		},
		aboutUs: {
			aboutUsName: "ABOUT US",
			termsAndConditions: "Terms and Conditions",
			termsOfUse: "Terms of Use",
			privacyPolicy: "Privacy Policy",
			siteMap: "Site Map",
		},
		contact: {
			contactName: "CONTACT",
			phoneNumber: "555 123 456",
			email: "youremail@example.com",
			address: "Some Address, Some Number 2",
			findUs: "Find on Map",
		},
	},

	// PRODUCTION PAGE

	productionPage: {
		productionName: "PRODUCTION",
		productionTypes: [
			{
				id: 1,
				productName: "PLASTIC CARDS",
				productType: [
					{
						id: 1,
						typeId: "contactlesscard",
						typeName: "CONTACTLESS SMART CARD",
						image: magneticStripe,
					},
					{
						id: 1,
						typeId: "magneticstripecard",
						typeName: "MAGNETIC STRIP CARD",
						image: magneticStripe,
					},
					{
						id: 1,
						typeId: "contactedcard",
						typeName: "CONTACT SMART CARD",
						image: magneticStripe,
					},
					{
						id: 1,
						typeId: "barcodecard",
						typeName: "BARCODE CARD",
						image: magneticStripe,
					},
					{
						id: 1,
						typeId: "qrcodecard",
						typeName: "QR CODE CARD",
						image: magneticStripe,
					},
					{
						id: 1,
						typeId: "simplecard",
						typeName: "SIMPLE CARD",
						image: magneticStripe,
					},
				],
			},
			{
				id: 2,
				productName: "BRACELETS",
				productType: [
					{
						id: 2,
						typeId: "contactlesscard",
						typeName: "CONTACTLESS SMART CARD",
						image: magneticStripe,
					},
					{
						id: 2,
						typeId: "magneticstripecard",
						typeName: "MAGNETIC STRIP CARD",
						image: magneticStripe,
					},
					{
						id: 2,
						typeId: "contactedcard",
						typeName: "CONTACT SMART CARD",
						image: magneticStripe,
					},
					{
						id: 2,
						typeId: "barcodecard",
						typeName: "BARCODE CARD",
						image: magneticStripe,
					},
					{
						id: 2,
						typeId: "qrcodecard",
						typeName: "QR CODE CARD",
						image: magneticStripe,
					},
					{
						id: 2,
						typeId: "simplecard",
						typeName: "SIMPLE CARD",
						image: magneticStripe,
					},
				],
			},
			{
				id: 3,
				productName: "STICKERS",
				productType: [
					{
						id: 3,
						typeId: "contactlesscard",
						typeName: "CONTACTLESS SMART CARD",
						image: magneticStripe,
					},
					{
						id: 3,
						typeId: "magneticstripecard",
						typeName: "MAGNETIC STRIP CARD",
						image: magneticStripe,
					},
					{
						id: 3,
						typeId: "contactedcard",
						typeName: "CONTACT SMART CARD",
						image: magneticStripe,
					},
					{
						id: 3,
						typeId: "barcodecard",
						typeName: "BARCODE CARD",
						image: magneticStripe,
					},
					{
						id: 3,
						typeId: "qrcodecard",
						typeName: "QR CODE CARD",
						image: magneticStripe,
					},
					{
						id: 3,
						typeId: "simplecard",
						typeName: "SIMPLE CARD",
						image: magneticStripe,
					},
				],
			},
			{
				id: 4,
				productName: "KEYFOGS",
				productType: [
					{
						id: 4,
						typeId: "contactlesscard",
						typeName: "CONTACTLESS SMART CARD",
						image: magneticStripe,
					},
					{
						id: 4,
						typeId: "magneticstripecard",
						typeName: "MAGNETIC STRIP CARD",
						image: magneticStripe,
					},
					{
						id: 4,
						typeId: "contactedcard",
						typeName: "CONTACT SMART CARD",
						image: magneticStripe,
					},
					{
						id: 4,
						typeId: "barcodecard",
						typeName: "BARCODE CARD",
						image: magneticStripe,
					},
					{
						id: 4,
						typeId: "qrcodecard",
						typeName: "QR CODE CARD",
						image: magneticStripe,
					},
					{
						id: 4,
						typeId: "simplecard",
						typeName: "SIMPLE CARD",
						image: magneticStripe,
					},
				],
			},
		],
	},
};
