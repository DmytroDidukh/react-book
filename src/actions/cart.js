export const addToCart = (book) => {
    return {
        type: 'ADD_TO_BOOK',
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
