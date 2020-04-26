import {combineReducers} from "redux";

import books from './books'
import cart from './cart'
import sort from './sort'
import orderSteps from './orderSteps'
import user from './user'

export default combineReducers({books, sort, cart, orderSteps, user})
