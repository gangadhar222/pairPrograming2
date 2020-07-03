import { ADD_PRODUCT, ADD_TO_CART, EDIT_PRODUCT, ADD_TO_ORDER } from './actionTypes';
import data from '../Data.js'

let initialState = {
    data: data,
    cartArray:[],
    orderArray:[],
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
        case ADD_TO_CART:{
                let item=state.data.find(item=>item.id==payload)

                return {
                    ...state,
                    cartArray:[...state.cartArray,item]
                }
            }
        case ADD_TO_ORDER:{
            console.log(payload)
            return {
                ...state,
                orderArray:[...state.orderArray,payload]
            }
        }
        default:
            return state
    }
}

export default reducer;