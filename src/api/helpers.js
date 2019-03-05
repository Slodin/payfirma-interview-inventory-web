import axios from "axios";
import { fetchProductsSuccess, fetchProductsFailed, fetchProductsBegin, deleteProductSuccess } from "../redux/actions/productActions";
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "../redux/actions/categoryActions";

const apiProtocal = "http://"
const apiBaseUrl = process.env.REACT_APP_BASE_URL;
const apiPort = process.env.REACT_APP_PORT;


// Did not fully test error handling

export const GetAllCategory = () => async dispatch =>{
    try{
        let res = await axios.get(apiProtocal + apiBaseUrl + ":" + apiPort + "/product/get_all_categories");
        dispatch(fetchCategoriesSuccess(res.data));
        return res.data;
    } catch (err) {
        dispatch(fetchCategoriesFailed(err));
        console.error(err);
    }
}

export const GetProducts = (categoryId = 0) => async dispatch => {
    dispatch(fetchProductsBegin);
    try {
        let res = await axios.get(apiProtocal + apiBaseUrl + ":" + apiPort + "/product/get_product_by_category", {params: {category_id: categoryId}});
        dispatch(fetchProductsSuccess(res.data));
        return res.data;
    } catch (err) {
        dispatch(fetchProductsFailed(err.response.status));
        console.error(err.response.status);
    }
}

export const DeleteProductById = (productId) => async dispatch => {
    try{
        let res = await axios.delete(apiProtocal + apiBaseUrl + ":" + apiPort + "/product/delete_product", {params: {product_id: productId}});
        dispatch(deleteProductSuccess(res.data));
        return res;
    } catch (err){
        console.error(err);
    }
}