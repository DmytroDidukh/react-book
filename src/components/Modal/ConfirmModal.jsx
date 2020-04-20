import React, {useState} from "react";
import {Confirm} from 'semantic-ui-react';


const ConfirmModal = ({book, removeFromCart, setShowConfirm, isShowConfirm}) => {


    function confirmedDelete(book) {
        console.log(book.id)
        removeFromCart(book);
        setShowConfirm(false)
    }

    function canceledDelete() {
        removeFromCart(false)
    }

    return (
        <Confirm id={"confirm"}
                      open={isShowConfirm}
                      header={book.title}
                      onCancel={canceledDelete}
                      onConfirm={() => confirmedDelete(book)}
        />
    )
};

export default ConfirmModal;
