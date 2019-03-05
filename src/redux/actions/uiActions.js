import {UI} from '../../constants/types';

export const changeCategorySelector = value => ({
    type: UI.CHANGE_CATEGORY_SELECTOR,
    payload: value
})
