import { connect } from 'react-redux';
import CountComponent from '../components/CountComponent';
import { increaseAction, decreaseAction } from '../actions';

const mapStateToProps = (state) => {
    return {
        times: state.counterReducer ? state.counterReducer : 0
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: (step) => {
            dispatch(decreaseAction(step));
        },
        onIncrement: (step) => {
            dispatch(increaseAction(step));
        }
    };
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CountComponent);
export default CounterContainer; 
