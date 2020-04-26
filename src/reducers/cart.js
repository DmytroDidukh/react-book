const initialState = {
    items: [
  /*      {
            author: "Jack London",
            count: 1,
            id: 1,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/MartinEden.jpg/220px-MartinEden.jpg",
            price: 30,
            rating: 5,
            title: "Martin Eden",
        },
        {
            author: "Harper Lee",
            count: 2,
            id: 0,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
            price: 25,
            rating: 5,
            title: "To Kill a Mockingbird",
        }*/
    ],
    isHidden: false,
    totalPrice: 0,
};

export default (state = initialState, action) => {
    function reducer() {
        return state.items.reduce((sum, {price, count = 1}) => sum + price * count, 0)
    }

    state.totalPrice = reducer();

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
        case 'CLEAR_CART':

            return {
                ...state,
                items: [],
                totalPrice: reducer()
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
