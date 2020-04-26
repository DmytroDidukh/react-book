const initialState = {
    delivery: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        city: '',
        address: '',
    },
    payment: {
        card: '',
        cvv: '',
        expires: '',
        cardOwner: ''
    }
};

export default (state = initialState, action) => {


    switch (action.type) {
        case 'SET_USER_DELIVERY_FIELD':
            state.delivery[action.payload] = action.value;
            localStorage.setItem(action.payload, action.value);

            return {...state};
        case 'SET_USER_PAYMENT_FIELD':
            state.payment[action.payload] = action.value;
            localStorage.setItem(action.payload, action.value);

            return {...state};
        default:
            return {...state}
    }
}
