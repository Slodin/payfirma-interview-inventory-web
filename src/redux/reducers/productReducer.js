import {Product} from '../../constants/types'

const INITIAL_STATE = {
    products: [],
    loading: false,
    error: null,
    selectedCategoryId: 0
}

const ProductReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case Product.FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case Product.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                error: null
            };
        case Product.FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                products: []
            };
        case Product.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.response.product_id)
            }
        default:
            return state;
    }
}

export default ProductReducer;