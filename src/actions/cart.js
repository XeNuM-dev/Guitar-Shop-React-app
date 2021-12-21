export const addToCart = obj => ({
    type: 'ADD_GUITAR_TO_CART',
    payload: obj
})

export const removeToCart = id => ({
    type: 'REMOVE_GUITAR_FROM_CART',
    payload: id
})