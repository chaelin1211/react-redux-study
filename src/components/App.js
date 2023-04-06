// App.js
import React from 'react';
import { connect } from 'react-redux';
import {counterAction} from '../redux/actions';

function App(props) {
    return (
        <div>
            <h1>Count: {props.count}</h1>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.subtract}>Subtract</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        count: state.counter.count,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(counterAction.increment()),
        subtract: () => dispatch(counterAction.subtract()),
        reset: () => dispatch(counterAction.reset()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);