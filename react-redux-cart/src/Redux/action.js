import {ADD_PRODUCT,ADD_TO_CART,EDIT_PRODUCT,ADD_TO_ORDER,INCREMENT,DECREMENT} from './actionTypes';

export const addProduct = payload => ({
    type: ADD_PRODUCT,
    payload
})

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
})

export const editProduct = payload => ({
    type:EDIT_PRODUCT,
    payload
})

export const addToOrder = payload => ({
    type:ADD_TO_ORDER,
    payload
})

export const increment = payload => ({
    type:INCREMENT,
    payload
})

export const decrement = payload => ({
    type:DECREMENT,
    payload
})