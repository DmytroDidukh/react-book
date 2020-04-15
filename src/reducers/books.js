const initialState = {
    isReady: false,
    items: null,
};

export default (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                items: action.payload,
                isReady: true,
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
