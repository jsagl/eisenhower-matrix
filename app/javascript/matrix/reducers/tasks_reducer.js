import { FETCH_TASKS } from '../actions/index'

const tasksReducer = (state, action) => {
    if (state === undefined) {
        return [];
    }

    switch (action.type) {
        case FETCH_TASKS:
            return action.payload;
        default:
            return state;
    }
};
export default tasksReducer;