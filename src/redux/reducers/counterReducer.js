import { counterAction } from '../actions';

const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case counterAction.INCREMENT:
            return { ...state, count: state.count + 1 };
        case counterAction.SUBTRACT:
            return { ...state, count: state.count - 1 };
        case counterAction.RESET:
            return { ...state, count: 0 };
        default:
            return state;
    }
}

export default counterReducer;
