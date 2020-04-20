const initialState = {
    items: [],
    isHidden: false,
    totalPrice: 0,
};

export default (state = initialState, action) => {
    function reducer() {
        return state.items.reduce((sum, {price, count = 1}) => sum + price * count, 0)
    }

    switch (action.type) {
        case 'ADD_TO_CART':
            action.payload.count = 1;

            return {
                ...state,
                items: [...state.items, action.payload],
                totalPrice: reducer() + action.payload.price
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(book => book.id !== action.payload.id),
                totalPrice: reducer() - action.payload.price * action.payload.count
            };
        case 'SHOW_HIDE_CART':
            return {
                ...state,
                isHidden: !action.payload
            };
        case 'TOTAL_PRICE':
            state.items = state.items.map(book => book.id === action.payload.id ? action.payload : book);

            return {
                ...state,
                totalPrice: reducer()
            };
        default:
            return state;
    }
}
