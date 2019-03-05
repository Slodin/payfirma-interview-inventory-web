import {Product} from '../../constants/types';

export const fetchProductsBegin = () => ({
    type: Product.FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
    type: Product.FETCH_PRODUCTS_SUCCESS,
    payload: {products}
});

export const fetchProductsFailed = error => ({
    type: Product.FETCH_PRODUCTS_FAILED,
    payload: {error}
});

export const deleteProductSuccess = response => ({
    type: Product.DELETE_PRODUCT_SUCCESS,
    payload: {response}
});

