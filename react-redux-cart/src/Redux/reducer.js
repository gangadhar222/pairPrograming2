import { ADD_PRODUCT, ADD_TO_CART, EDIT_PRODUCT, ADD_TO_ORDER, INCREMENT, DECREMENT } from './actionTypes';
import data from '../Data.js'

let initialState = {
    data: data,
    cartArray: [],
    orderArray: []
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
            console.log(payload)
            let editData = state.data.map(item =>
                item.id == payload.id ?
                    {
                        ...item,
                        name: payload.name,
                        cost: payload.price,
                        category: payload.category,
                    }
                    : item
            )
            console.log(editData)
            {
                return {
                    ...state,
                    data: editData
                }
            }
        case ADD_TO_CART: {
            let item = state.data.find(item => item.id == payload)

            return {
                ...state,
                cartArray: [...state.cartArray, item]
            }
        }
        case ADD_TO_ORDER: {
            console.log(payload)
            return {
                ...state,
                orderArray: [...state.orderArray, payload]
            }
        }
        case INCREMENT:
            let data = state.data.map(item =>
                item.id === payload ?
                {
                    ...item,
                    counter:item.counter++
                }
                : item
                )
                console.log(data)
                console.log(state.data)
            return {
                ...state,
                data: data
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

export default reducer;