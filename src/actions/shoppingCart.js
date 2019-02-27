import * as actionType from './type'

export const addToCart = (product, quantity) => ({
    type: actionType.SC_ADD_TO_CART,
    payload: {
        product, quantity
    }
})

export const removeFromCart = productId => ({
    type: actionType.SC_REMOVE_FROM_CART,
    payload: {
        productId
    }
})