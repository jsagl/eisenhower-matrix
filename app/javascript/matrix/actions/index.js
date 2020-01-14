const FETCH_TASKS = 'FETCH_TASKS';

const fetchTasks = (matrixId) => {
    const promise = fetch(`/api/v1/matrices/${matrixId}/tasks`, { credentials: 'same-origin' })
        .then(response => response.json());

    return {
        type: FETCH_TASKS,
        payload: promise
    }
};

export {
    fetchTasks, FETCH_TASKS,
}