export const addToCart = (book) => {
    return {
        type: 'ADD_TO_CART',
        payload: book
    }
};

export const removeFromCart = (book) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: book
    }
};

export const onCartClick = (boolean) => {
    return {
        type: 'SHOW_HIDE_CART',
        payload: boolean
    }
};

export const changeTotalPrice = (book) => {
    return {
        type: 'TOTAL_PRICE',
        payload: book
    }
};

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
};


