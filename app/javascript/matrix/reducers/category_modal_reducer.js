import {CLOSE_CATEGORY_MODAL, OPEN_CATEGORY_MODAL} from '../actions/index'

const categoryModalReducer = (state, action) => {
    if (state === undefined) {
        return {};
    }

    let newModalState = Object.assign({}, state);

    switch (action.type) {
        case CLOSE_CATEGORY_MODAL:
            newModalState.display = action.payload.display;
            return newModalState;
        case OPEN_CATEGORY_MODAL:
            newModalState = action.payload;
            return newModalState;
        default:
            return state;
    }
};
export default categoryModalReducer;