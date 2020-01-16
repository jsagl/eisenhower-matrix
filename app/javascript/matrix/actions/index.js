const FETCH_TASKS = 'FETCH_TASKS';
const CREATE_TASK = 'CREATE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';

const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;

const fetchTasks = (matrixId) => {
    const promise = fetch(`/api/v1/matrices/${matrixId}/tasks`, { credentials: 'same-origin' })
        .then(response => response.json());

    return {
        type: FETCH_TASKS,
        payload: promise
    }
};

const createTask = (body, matrixId) => {
    const promise = fetch(
        `/api/v1/matrices/${matrixId}/tasks`,
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'X-CSRF-Token': csrfToken
            },
            credentials: 'same-origin',
            body: JSON.stringify(body),
        }
    ).then(response => response.json());

    return {
        type: CREATE_TASK,
        payload: promise
    }
};

const updateTask = (matrixId, taskId, body) => {
    const promise = fetch(
        `/api/v1/matrices/${matrixId}/tasks/${taskId}`,
        {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'X-CSRF-Token': csrfToken
            },
            credentials: 'same-origin',
            body: JSON.stringify(body),
        }
    ).then(response => response.json());

    return {
        type: UPDATE_TASK,
        payload: promise
    }
}

export {
    fetchTasks, FETCH_TASKS,
    createTask, CREATE_TASK,
    updateTask, UPDATE_TASK,
}