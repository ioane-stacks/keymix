export const checkQuantity = (iData, quantity) => {
	try {
		if (quantity < 11) {
			return iData["price_1_10"];
		}
		if (quantity >= 11 && quantity <= 20) {
			return iData["price_11_20"];
		}
		if (quantity >= 21 && quantity <= 50) {
			return iData["price_21_50"];
		}
		if (quantity >= 51 && quantity <= 100) {
			return iData["price_51_100"];
		}
		if (quantity >= 101 && quantity <= 200) {
			return iData["price_101_200"];
		}
		if (quantity >= 201 && quantity <= 500) {
			return iData["price_201_500"];
		}
		if (quantity >= 501 && quantity <= 1000) {
			return iData["price_501_1000"];
		}
		if (quantity >= 1001 && quantity <= 2000) {
			return iData["price_1001_2000"];
		}
		if (quantity >= 2001 && quantity <= 5000) {
			return iData["price_2001_5000"];
		}
	} catch {
		console.log("could not find item");
	}
};
