import { ADD_PRODUCT, ADD_TO_CART, EDIT_PRODUCT } from './actionTypes';
import data from '../Data.js'

let initialState = {
    data: data
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT:
            {
                return {
                    ...state
                }
            }
        case EDIT_PRODUCT:
            {
                return {
                    ...state
                }
            }
        case ADD_TO_CART:
            {
                return {
                    ...state
                }
            }
        default:
            return state
    }
}

export default reducer;