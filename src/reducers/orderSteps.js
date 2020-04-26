const initialState = {
    delivery: {
        active: true,
        completed: false,
        disabled: false,
    },
    payment: {
        active: false,
        completed: false,
        disabled: true,
    },
    confirm: {
        active: false,
        completed: false,
        disabled: true,
    },
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'TO_SHIPPING':
            return {
                ...initialState,
            };
        case 'TO_PAYMENT':
            return {
                delivery: {
                    active: false,
                    completed: true,
                    disabled: true,
                },
                payment: {
                    active: true,
                    completed: false,
                    disabled: false,
                },
                confirm: {
                    active: false,
                    completed: false,
                    disabled: true,
                },
            };
        case 'TO_CONFIRM':
            return {
                delivery: {
                    active: false,
                    completed: true,
                    disabled: true,
                },
                payment: {
                    active: false,
                    completed: true,
                    disabled: true,
                },
                confirm: {
                    active: true,
                    completed: false,
                    disabled: false,
                }
            };
        case 'TO_THANKS':
            return {
                delivery: {
                    active: false,
                    completed: true,
                    disabled: true,
                },
                payment: {
                    active: false,
                    completed: true,
                    disabled: true,
                },
                confirm: {
                    active: false,
                    completed: true,
                    disabled: true,
                }
            };
        default:
            return state;
    }
}
