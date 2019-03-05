import {Category} from '../../constants/types';

const INITIAL_STATE = {
    categories: [],
    error: null
}

const CategoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case Category.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload.categories,
                error: null
            }
        case Category.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                error: action.payload.error,
                categories: []
            };
        default:
            return state;
    }
}

export default CategoryReducer;