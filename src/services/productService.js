import { httpService } from './httpService'


function getProducts(limit) {
	return httpService.get(`products/?limit=${limit}`);
}

function getProductsCat(cat) {
	return httpService.get(`products/category/${cat}`);
}


export const productService = {
	getProducts,
	getProductsCat
};