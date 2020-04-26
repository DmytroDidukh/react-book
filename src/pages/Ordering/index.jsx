import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import {Button, Container, Header} from "semantic-ui-react";

import {HeaderMenu, OrderSteps} from "../../containers";

import Delivery from "../../components/Ordering/Delivery";
import Payment from "../../components/Ordering/Payment";
import Confirm from "../../components/Ordering/Confirm";

import '../../components/Ordering/styles.scss'


const Ordering = ({user, items: booksInCart, totalPrice, setDeliveryField, setPaymentField, clearCart,
                      isDeliveryFormComplete, isPaymentFormComplete, toPayment, toConfirm, toThanks}) => {

    return (
        <Container>
            <HeaderMenu/>
            <OrderSteps/>
            <Switch>
                <Route path={"/checkout/shipping"}>
                    <Delivery user={user} setUserField={setDeliveryField}/>
                    <div className={"form-buttons"}>
                        <Button id={"next"} disabled={!isDeliveryFormComplete}
                                className={"ui green basic button"}>
                            <Link className={'button-link'} to={"/checkout/payment"} onClick={toPayment}>Next</Link>
                        </Button>
                    </div>
                </Route>

                <Route path={'/checkout/payment'}>
                    <Payment user={user} setUserField={setPaymentField}/>
                    <div className={"form-buttons"}>
                        <Button id={"back"} className={"ui red basic button"}>
                            <Link className={'button-link'} to={"/checkout/shipping"}>Back </Link>
                        </Button>
                        <Button id={"next"} disabled={!isPaymentFormComplete}
                                className={"ui green basic button"}>
                            <Link className={'button-link'} to={"/checkout/confirm"} onClick={toConfirm}>Next</Link>
                        </Button>
                    </div>
                </Route>

                <Route path={'/checkout/confirm'}>
                    <Confirm user={user} booksInCart={booksInCart} totalPrice={totalPrice}/>
                    <div className={"form-buttons"}>
                        <Button id={"back"} className={"ui red basic button"}>
                            <Link className={'button-link'} to={"/checkout/payment"}>Back </Link>
                        </Button>
                        <Button disabled={!booksInCart.length} id={"next"}
                                className={"ui green basic button"}>
                            <Link className={'button-link'} to={"/checkout/thanks-window"}
                                  onClick={() =>{localStorage.clear(); toThanks(); clearCart()}}>Confirm
                            </Link>
                        </Button>
                    </div>
                </Route>

                <Route path={'/checkout/thanks-window'}>
                    <div id={'thanks'}>
                        <Header size='huge'>Thanks for choosing us!</Header>
                        <Link to={"/shop"}>
                            <button >go back to shop</button>
                        </Link>
                    </div>
                </Route>
            </Switch>
        </Container>
    )
};

export default Ordering;
