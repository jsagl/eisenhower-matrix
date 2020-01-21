import { CLOSE_TASK_MODAL, OPEN_TASK_MODAL } from '../actions/index'

const taskModalReducer = (state, action) => {
    if (state === undefined) {
        return {};
    }

    let newModalState = Object.assign({}, state);

    switch (action.type) {
        case CLOSE_TASK_MODAL:
            newModalState.display = action.payload.display;
            return newModalState;
        case OPEN_TASK_MODAL:
            newModalState = action.payload;
            return newModalState;
        default:
            return state;
    }
};
export default taskModalReducer;