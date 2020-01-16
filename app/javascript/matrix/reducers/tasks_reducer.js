import { FETCH_TASKS, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from '../actions/index'

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
        case DELETE_TASK:
            updatedTasksList.find((task, i, updatedTasksList) => {
                if (task.id === action.taskId) {
                    updatedTasksList.splice(i,1);
                    return true
                }
            });
            return updatedTasksList;
        default:
            return state;
    }
};
export default tasksReducer;