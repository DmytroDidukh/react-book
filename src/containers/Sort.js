import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as sortActions from '../actions/sort';
import SortPanel from '../components/SortPanel'


const mapStateToProps = ({books: {sortBy}}) => {
    return {sortBy: sortBy}
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(sortActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);
