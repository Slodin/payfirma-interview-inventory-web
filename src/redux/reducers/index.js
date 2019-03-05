import { combineReducers } from 'redux';
import ProductReducer from './productReducer';
import CategoryReducer from './categoryReducer';
import UIReducer from './uiReducer';

const appReducers = combineReducers({
    ProductReducer,
    CategoryReducer,
    UIReducer
});

export default appReducers;