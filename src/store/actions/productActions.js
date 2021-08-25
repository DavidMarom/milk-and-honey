import { productService } from '../../services/productService';

export function loadProducts(limit) {
	return async dispatch => {
		try {
			const products = await productService.getProducts(limit);
			dispatch({ type: 'SET_PRODUCTS', products });
		} catch (err) {
			console.log('Products Actions: err in loadProducts', err);
		}
	};
}

export function loadProductsOfCategory(cat) {
	return async dispatch => {
		try {
			const products = await productService.getProductsCat(cat);
			dispatch({ type: 'SET_PRODUCTS', products });
		} catch (err) {
			console.log('Products Actions: err in loadProducts', err);
		}
	};
}

