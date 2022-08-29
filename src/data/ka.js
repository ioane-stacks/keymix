import { AiOutlineCheck, AiFillLike } from "react-icons/ai";
import { FaGlobeEurope } from "react-icons/fa";

import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { IoIosWatch } from "react-icons/io";
import { TbSticker } from "react-icons/tb";
import { GiGemPendant } from "react-icons/gi";

import magneticStripe from "../icons/Production/PlasticCard.svg";

export const ka = {
	navbar: {
		menubar: {
			productionName: "პროდუქცია",
			productionMenu: [
				{
					id: 1,
					productName: "პლასტიკური ბარათები",
				},
				{
					id: 2,
					productName: "სამაჯურები",
				},
				{
					id: 3,
					productName: "სტიკერები",
				},
				{
					id: 4,
					productName: "ბრელოკები",
				},
			],
		},
		service: "სერვისი",
		gallery: "გალერეა",
		information: "ინფორმაცია",
		prices: "ფასები",
	},
	bodyInformation: {
		productionName: "პროდუქცია",
		priority: [
			{
				priorityIcon: <AiOutlineCheck />,
				priorityDescription: "100% ხარისხის გარანტია",
			},
			{
				priorityIcon: <AiFillLike />,
				priorityDescription: "72 საათის მანძილზე ხელმისაწვდომია",
			},
			{
				priorityIcon: <FaGlobeEurope />,
				priorityDescription: "დამზადებულია საქართველოში",
			},
		],
		productions: [
			{
				id: 1,
				productName: "პლასტიკური ბარათები",
				productIcon: <BsFillCreditCard2BackFill />,
				productDescription: "ლორემ იპსუმ გაიციმციმა ჩაატარეთო გონიერ პრორექტორს მოსდოს ჯავრიანი გვსურს იტირებდა სიბნელეა გაემგზავროთ, ბრმები ინტელიგენტურობა. დოლარით დაწყებულიყო ბარხანას, აუღელვებლად, მიაყარა, დაუბრუნდეს, განდეგილები ჯაგრის. ჩაფლულიყო იკლაკნებიან თასები მოსმაზე როლები კრიტიკული წარმოიდგენთ დაჟანგული დაწყებულიყო მიაყარა ბადებდა.",
				more: "მეტი...",
			},
			{
				id: 2,
				productName: "სამაჯურები",
				productIcon: <IoIosWatch />,
				productDescription: "ლორემ იპსუმ გაიციმციმა ჩაატარეთო გონიერ პრორექტორს მოსდოს ჯავრიანი გვსურს იტირებდა სიბნელეა გაემგზავროთ, ბრმები ინტელიგენტურობა. დოლარით დაწყებულიყო ბარხანას, აუღელვებლად, მიაყარა, დაუბრუნდეს, განდეგილები ჯაგრის. ჩაფლულიყო იკლაკნებიან თასები მოსმაზე როლები კრიტიკული წარმოიდგენთ დაჟანგული დაწყებულიყო მიაყარა ბადებდა.",
				more: "მეტი...",
			},
			{
				id: 3,
				productName: "სტიკერები",
				productIcon: <TbSticker />,
				productDescription: "ლორემ იპსუმ გაიციმციმა ჩაატარეთო გონიერ პრორექტორს მოსდოს ჯავრიანი გვსურს იტირებდა სიბნელეა გაემგზავროთ, ბრმები ინტელიგენტურობა. დოლარით დაწყებულიყო ბარხანას, აუღელვებლად, მიაყარა, დაუბრუნდეს, განდეგილები ჯაგრის. ჩაფლულიყო იკლაკნებიან თასები მოსმაზე როლები კრიტიკული წარმოიდგენთ დაჟანგული დაწყებულიყო მიაყარა ბადებდა.",
				more: "მეტი...",
			},
			{
				id: 4,
				productName: "ბრელოკები",
				productIcon: <GiGemPendant />,
				productDescription: "ლორემ იპსუმ გაიციმციმა ჩაატარეთო გონიერ პრორექტორს მოსდოს ჯავრიანი გვსურს იტირებდა სიბნელეა გაემგზავროთ, ბრმები ინტელიგენტურობა. დოლარით დაწყებულიყო ბარხანას, აუღელვებლად, მიაყარა, დაუბრუნდეს, განდეგილები ჯაგრის. ჩაფლულიყო იკლაკნებიან თასები მოსმაზე როლები კრიტიკული წარმოიდგენთ დაჟანგული დაწყებულიყო მიაყარა ბადებდა.",
				more: "მეტი...",
			},
		],
	},
	footer: {
		socialPages: {
			socialPageName: "სოციალური გვერდები",
			facebook: "ფეისბუქი",
			instagram: "ინსტაგრამი",
			linkedin: "ლინკდინი",
			youtube: "იუთუბი",
		},
		aboutUs: {
			aboutUsName: "ჩვენს შესახებ",
			termsAndConditions: "ვადები და პირობები",
			termsOfUse: "მოხმარების პირობები",
			privacyPolicy: "კონფიდენციალურობის პოლიტიკა",
			siteMap: "საიტის რუკა",
		},
		contact: {
			contactName: "კონტაქტი",
			phoneNumber: "555 123 456",
			email: "youremail@example.com",
			address: "რაღაც მისამართი, რაღაც ნომერი 2",
			findUs: "გვიპოვეთ რუკაზე",
		},
	},
	// PRODUCTION PAGE

	productionPage: {
		productionName: "პროდუქცია",
		productionTypes: [
			{
				id: 1,
				productName: "პლასტიკური ბარათები",
				productType: [
					{
						id: 1,
						typeId: "contactlesscard",
						typeName: "უკონტაქტო სმარტ ბარათი",
						image: magneticStripe,
					},
					{
						id: 1,
						typeId: "magneticstripecard",
						typeName: "მაგნიტურ-ზოლიანი ბარათი",
						image: magneticStripe,
					},
					{
						id: 1,
						typeId: "contactedcard",
						typeName: "კონტაქტური სმარტ ბარათი",
						image: magneticStripe,
					},
					{
						id: 1,
						typeId: "barcodecard",
						typeName: "შტრიხკოდიანი ბარათი",
						image: magneticStripe,
					},
					{
						id: 1,
						typeId: "qrcodecard",
						typeName: "QR კოდიანი ბარათი",
						image: magneticStripe,
					},
					{
						id: 1,
						typeId: "simplecard",
						typeName: "მარტივი ბარათი",
						image: magneticStripe,
					},
				],
			},
			{
				id: 2,
				productName: "სამაჯურები",
				productType: [
					{
						id: 2,
						typeId: "noncontactcard",
						typeName: "უკონტაქტო სმარტ ბარათი",
						image: magneticStripe,
					},
					{
						id: 2,
						typeId: "magneticstripecard",
						typeName: "მაგნიტურ-ზოლიანი ბარათი",
						image: magneticStripe,
					},
					{
						id: 2,
						typeId: "contactedcard",
						typeName: "კონტაქტური სმარტ ბარათი",
						image: magneticStripe,
					},
					{
						id: 2,
						typeId: "barcodecard",
						typeName: "შტრიხკოდიანი ბარათი",
						image: magneticStripe,
					},
					{
						id: 2,
						typeId: "qrcodecard",
						typeName: "QR კოდიანი ბარათი",
						image: magneticStripe,
					},
					{
						id: 2,
						typeId: "simplecard",
						typeName: "მარტივი ბარათი",
						image: magneticStripe,
					},
				],
			},
			{
				id: 3,
				productName: "სტიკერები",
				productType: [
					{
						id: 3,
						typeId: "noncontactcard",
						typeName: "უკონტაქტო სმარტ ბარათი",
						image: magneticStripe,
					},
					{
						id: 3,
						typeId: "magneticstripecard",
						typeName: "მაგნიტურ-ზოლიანი ბარათი",
						image: magneticStripe,
					},
					{
						id: 3,
						typeId: "contactedcard",
						typeName: "კონტაქტური სმარტ ბარათი",
						image: magneticStripe,
					},
					{
						id: 3,
						typeId: "barcodecard",
						typeName: "შტრიხკოდიანი ბარათი",
						image: magneticStripe,
					},
					{
						id: 3,
						typeId: "qrcodecard",
						typeName: "QR კოდიანი ბარათი",
						image: magneticStripe,
					},
					{
						id: 3,
						typeId: "simplecard",
						typeName: "მარტივი ბარათი",
						image: magneticStripe,
					},
				],
			},
			{
				id: 4,
				productName: "ბრელოკები",
				productType: [
					{
						id: 4,
						typeId: "noncontactcard",
						typeName: "უკონტაქტო სმარტ ბარათი",
						image: magneticStripe,
					},
					{
						id: 4,
						typeId: "magneticstripecard",
						typeName: "მაგნიტურ-ზოლიანი ბარათი",
						image: magneticStripe,
					},
					{
						id: 4,
						typeId: "contactedcard",
						typeName: "კონტაქტური სმარტ ბარათი",
						image: magneticStripe,
					},
					{
						id: 4,
						typeId: "barcodecard",
						typeName: "შტრიხკოდიანი ბარათი",
						image: magneticStripe,
					},
					{
						id: 4,
						typeId: "qrcodecard",
						typeName: "QR კოდიანი ბარათი",
						image: magneticStripe,
					},
					{
						id: 4,
						typeId: "simplecard",
						typeName: "მარტივი ბარათი",
						image: magneticStripe,
					},
				],
			},
		],
	},
};
