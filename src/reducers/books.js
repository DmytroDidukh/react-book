const initialState = {
    isReady: false,
    items: null,
    sortBy: 'all'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                items: action.payload,
                isReady: true,
            };
        case 'SORT_BY':
            return {
                ...state,
                items: state.items.sort( (a,b)=> a.price - b.price),
                sortBy: action.payload
            };
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
}
