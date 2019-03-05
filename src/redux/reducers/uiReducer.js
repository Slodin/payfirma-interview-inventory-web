import {UI} from '../../constants/types'

const INITIAL_STATE = {
    selectedCategoryId: 0
}

const UIReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case UI.CHANGE_CATEGORY_SELECTOR:
            return {
                ...state,
                selectedCategoryId: action.payload
            }
        default:
            return state;
    }
}

export default UIReducer;