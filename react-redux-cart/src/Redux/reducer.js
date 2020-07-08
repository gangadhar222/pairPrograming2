import { ADD_PRODUCT, ADD_TO_CART, EDIT_PRODUCT, ADD_TO_ORDER, INCREMENT, DECREMENT,LOGIN } from './actionTypes';
import data from '../Data';
import { v4 as uuidv4 } from 'uuid';

let initialState = {
    data: data,
    cartArray: [],
    orderArray: [],
    auth:false,
    user:{
        name:"user",
        password:"user"
    },
    adminAuth:false,
    admin:{
        name:"admin",
        password:"admin"
    }
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT:
            let item = {
                ...payload,
                id: uuidv4()
            }
            return {
                ...state,
                data: [...state.data, item]
            }
        case EDIT_PRODUCT:
            let editData = state.data.map(item =>
                item.id === payload.id ?
                    {
                        ...item,
                        name: payload.name,
                        cost: payload.price,
                        category: payload.category,
                    }
                    : item
            )
                return {
                    ...state,
                    data: editData
                }
        case ADD_TO_CART: {

            let item = state.data.find(item => item.id === payload)
            let arr = [...state.cartArray]
            let flag = false
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === payload) {
                    flag = true
                    arr[i].counter++
                    break
                }
            }
            if (!flag) {
                return {
                    ...state,
                    cartArray: [...arr, { ...item, counter: 1 }]
                }
            }
            return {
                ...state,
                cartArray: arr
            }
        }
        case ADD_TO_ORDER: {
            return {
                ...state,
                orderArray: [...state.orderArray, payload],
                cartArray:[]
            }
        }
        case INCREMENT:
            let data1 = state.cartArray.map(item => item.id === payload ? { ...item, counter: item.counter + 1 } : item)
            return {
                ...state,
                cartArray: data1
            }
        case DECREMENT:
            var data2 = state.cartArray.map(item => item.id === payload ? { ...item, counter: item.counter - 1 } : item)
            let data3 = data2.filter(item => item.counter === 0 ? null : item)
            return {
                ...state,
                cartArray: data3
            }
        case LOGIN:
            {
                const {name,password} =  payload
                if(name==state.user.name && password==state.user.password){
                    return{
                        ...state,
                        auth: true
                    }
                }
               if(name==state.admin.name && password==state.admin.password){
                   return{
                       ...state,
                       adminAuth: true
                   }
               }
            }
        default:
            return state
    }
}

export default reducer;