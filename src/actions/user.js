export const setDeliveryField = (fieldName, value) => ({
    type: 'SET_USER_DELIVERY_FIELD',
    payload: fieldName,
    value: value
});

export const setPaymentField = (fieldName, value) => ({
    type: 'SET_USER_PAYMENT_FIELD',
    payload: fieldName,
    value: value
});
