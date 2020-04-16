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
        {
            "id": 1,
            "title": "Martin Eden",
            "author": "Jack London",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/MartinEden.jpg/220px-MartinEden.jpg",
            "price": 30,
            "rating": 5
        },
        {
            "id": 2,
            "title": "1984",
            "author": "George Orwell",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/1984first.jpg/220px-1984first.jpg",
            "price": 27,
            "rating": 5
        },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'REMOVE_BOOK':
            return {
                ...state,
                items: state.items.filter(book => book.id !== action.payload)
            };
        default:
            return state;
    }
}
