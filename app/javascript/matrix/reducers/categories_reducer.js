// import {CLOSE_MODAL, OPEN_MODAL} from "../actions";

import { FETCH_CATEGORIES } from "../actions";

const categoriesReducer = (state, action) => {
    if (state === undefined) {
        return {};
    }

    switch (action.type) {
        case FETCH_CATEGORIES:
            return action.payload;
        default:
            return state;
    }
};

export default categoriesReducer;