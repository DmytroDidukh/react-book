const initialState = {
    searchQuery: '',
    sortBy: 'all'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            };
        case 'SET_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };
        default:
            return state;
    }
}
