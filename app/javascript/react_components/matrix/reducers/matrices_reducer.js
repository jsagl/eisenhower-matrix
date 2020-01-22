import {FETCH_MATRICES} from "../actions";

const matricesReducer = (state, action) => {
    if (state === undefined) {
        return {};
    }

    switch (action.type) {
        case FETCH_MATRICES:
            return action.payload;
        default:
            return state;
    }
};

export default matricesReducer;