import { FETCH_TASKS, CREATE_TASK, UPDATE_TASK } from '../actions/index'

const tasksReducer = (state, action) => {
    if (state === undefined) {
        return [];
    }

    const updatedTasksList = [...state];

    switch (action.type) {
        case FETCH_TASKS:
            return action.payload;
        case CREATE_TASK:
            updatedTasksList.push(action.payload);
            return updatedTasksList;
        case UPDATE_TASK:
            const updatedTask = action.payload
            updatedTasksList.find((task, i, updatedTasksList) => {
               if (task.id === updatedTask.id) {
                   updatedTasksList[i] = updatedTask;
                   return true
               }
            });
            return updatedTasksList;
        default:
            return state;
    }
};
export default tasksReducer;