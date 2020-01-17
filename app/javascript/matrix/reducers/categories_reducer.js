import {CREATE_CATEGORY, FETCH_CATEGORIES, UPDATE_CATEGORY} from "../actions";

const categoriesReducer = (state, action) => {
    if (state === undefined) {
        return {};
    }

    const updatedCategoryList = [...state];

    switch (action.type) {
        case FETCH_CATEGORIES:
            return action.payload;
        case CREATE_CATEGORY:
            updatedCategoryList.push(action.payload);
            return updatedCategoryList;
        case UPDATE_CATEGORY:
            const updatedTask = action.payload
            updatedCategoryList.find((task, i, updatedCategoryList) => {
                if (task.id === updatedTask.id) {
                    updatedCategoryList[i] = updatedTask;
                    return true
                }
            });
            return updatedCategoryList;
        default:
            return state;
    }
};

export default categoriesReducer;