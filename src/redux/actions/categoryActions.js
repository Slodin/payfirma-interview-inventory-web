import {Category} from '../../constants/types';

export const fetchCategoriesSuccess = categories => ({
    type: Category.FETCH_CATEGORIES_SUCCESS,
    payload: {categories}
});

export const fetchCategoriesFailed = error => ({
    type: Category.FETCH_CATEGORIES_FAILED,
    payload: {error}
});