function getApiCatNameByTitle(title) {

	switch (title) {
		case 'Men':
			return "men's clothing"

		case 'Women':
			return "women's clothing"

		case 'Electronics':
			return "electronics"

		case 'Jewelery':
			return "jewelery"

		default:
			return "jewelery"
	}
}





export const utils = {
	getApiCatNameByTitle
}