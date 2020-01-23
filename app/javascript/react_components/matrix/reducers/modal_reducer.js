import { CLOSE_MODAL, OPEN_MODAL } from '../actions/index'

const modalReducer = (state, action) => {
    if (state === undefined) {
        return {};
    }

    let newModalState = Object.assign({}, state);

    switch (action.type) {
        case CLOSE_MODAL:
            newModalState.display = action.payload.display;
            return newModalState;
        case OPEN_MODAL:
            newModalState = action.payload;
            return newModalState;
        default:
            return state;
    }
};
export default modalReducer;