import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as sortActions from '../actions/sort';
import Cort from '../components/SortPanel'



const mapStateToProps = ({cart: {sortBy, searchQuery}}) => {
    return {sortBy: sortBy, searchQuery: searchQuery}
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(sortActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);
