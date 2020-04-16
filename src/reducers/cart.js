const initialState = {
    items: [
        {
            "id": 0,
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
            "price": 25,
            "rating": 5
        },
    ],
    isHidden: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_BOOK':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(book => book.id !== action.payload),
            };
        case 'SHOW_HIDE_CART':
            return {
                ...state,
                isHidden: !action.payload
            };
        default:
            return state;
    }
}
