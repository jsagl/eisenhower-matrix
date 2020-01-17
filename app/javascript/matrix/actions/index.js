const FETCH_TASKS = 'FETCH_TASKS';
const CREATE_TASK = 'CREATE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CLOSE_MODAL = 'CLOSE_MODAL';
const OPEN_MODAL = 'OPEN_MODAL';
const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

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

const closeModal = () => {
    return {
        type: CLOSE_MODAL,
        payload: {
            display: false,
        }
    }
};

const openModal = (modalType, modalProps = {title: 'Create task'}) => {
    return {
        type: OPEN_MODAL,
        payload: {
            display: true,
            modalType: modalType,
            modalProps: modalProps
        }
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
};

const deleteTask = (matrixId, taskId) => {
    const promise = fetch(
        `/api/v1/matrices/${matrixId}/tasks/${taskId}`,
        {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'X-CSRF-Token': csrfToken
            },
            credentials: 'same-origin'
        }
    );

    return {
        type: DELETE_TASK,
        payload: promise,
        taskId: taskId
    }
};

const fetchCategories = (matrixId) => {
    const promise = fetch(`/api/v1/matrices/${matrixId}/categories`, { credentials: 'same-origin' })
        .then(response => response.json());

    return {
        type: FETCH_CATEGORIES,
        payload: promise
    }
};

export {
    fetchTasks, FETCH_TASKS,
    createTask, CREATE_TASK,
    updateTask, UPDATE_TASK,
    deleteTask, DELETE_TASK,
    closeModal, CLOSE_MODAL,
    openModal, OPEN_MODAL,
    fetchCategories, FETCH_CATEGORIES
}