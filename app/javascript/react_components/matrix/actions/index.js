const FETCH_TASKS = 'FETCH_TASKS';
const CREATE_TASK = 'CREATE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CLOSE_MODAL = 'CLOSE_MODAL';
const OPEN_MODAL = 'OPEN_MODAL';
const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
const CREATE_CATEGORY = 'CREATE_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const DOM_TASK_COLORS_UPDATE = 'DOM_TASK_COLORS_UPDATE';
const FETCH_MATRICES = 'FETCH_MATRICES';
const CREATE_MATRIX = 'CREATE_MATRIX';
const UPDATE_MATRIX = 'UPDATE_MATRIX';
const DELETE_MATRIX = 'DELETE_MATRIX';
const SEARCH_TASKS = 'SEARCH_TASKS';

const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;

const handleError = () => {
    alert("Sorry, an error occurred. The page is going to be refreshed.");
    document.location.reload()
};

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
    )
        .then(response => response.json())
        .catch(handleError);

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

const openModal = (modalType, modalProps) => {
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
    ).then(response => response.json())
     .catch(handleError);

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
    ).catch(handleError);

    return {
        type: DELETE_TASK,
        payload: promise,
        taskId: taskId
    }
};

const fetchCategories = (matrixId) => {
    const promise = fetch(`/api/v1/matrices/${matrixId}/categories`, { credentials: 'same-origin' })
        .then(response => response.json())
        .catch(handleError);

    return {
        type: FETCH_CATEGORIES,
        payload: promise
    }
};

const createCategory = (body, matrixId) => {
    const promise = fetch(
        `/api/v1/matrices/${matrixId}/categories`,
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
    ).then(response => response.json())
    .catch(handleError);

    return {
        type: CREATE_CATEGORY,
        payload: promise
    }
};

const updateCategory = (matrixId, categoryId, body) => {
    const promise = fetch(
        `/api/v1/matrices/${matrixId}/categories/${categoryId}`,
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
    ).then(response => response.json())
    .catch(handleError);

    return {
        type: UPDATE_CATEGORY,
        payload: promise
    }
};

const domTaskColorsUpdate = (categoryId, color) => {
    return {
        type: DOM_TASK_COLORS_UPDATE,
        payload: {
            categoryId: categoryId,
            color: color
        }
    }
};

const fetchMatrices = (matrixId) => {
    const promise = fetch(`/api/v1/matrices`, { credentials: 'same-origin' })
        .then(response => response.json());

    return {
        type: FETCH_MATRICES,
        payload: promise
    }
};

const createMatrix = (body) => {
    const promise = fetch(
        `/api/v1/matrices`,
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
    ).then(response => response.json())
        .catch(handleError);

    return {
        type: CREATE_MATRIX,
        payload: promise
    }
};

const updateMatrix = (matrixId, body) => {
    const promise = fetch(
        `/api/v1/matrices/${matrixId}`,
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
    ).then(response => response.json())
        .catch(handleError);

    return {
        type: UPDATE_MATRIX,
        payload: promise
    }
};

const deleteMatrix = (matrixId) => {
    const promise = fetch(
        `/api/v1/matrices/${matrixId}`,
        {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'X-CSRF-Token': csrfToken
            },
            credentials: 'same-origin'
        }
    ).catch(handleError);

    return {
        type: DELETE_MATRIX,
        payload: promise,
        matrixId: matrixId
    }
};

const searchTasks = (matrixId, query) => {
    const promise = fetch(`/api/v1/matrices/${matrixId}/tasks?query=${query}`, { credentials: 'same-origin' })
        .then(response => response.json());

    return {
        type: SEARCH_TASKS,
        payload: promise
    }
}

export {
    fetchTasks, FETCH_TASKS,
    createTask, CREATE_TASK,
    updateTask, UPDATE_TASK,
    deleteTask, DELETE_TASK,
    closeModal, CLOSE_MODAL,
    openModal, OPEN_MODAL,
    fetchCategories, FETCH_CATEGORIES,
    createCategory, CREATE_CATEGORY,
    updateCategory, UPDATE_CATEGORY,
    domTaskColorsUpdate, DOM_TASK_COLORS_UPDATE,
    fetchMatrices, FETCH_MATRICES,
    createMatrix, CREATE_MATRIX,
    updateMatrix, UPDATE_MATRIX,
    deleteMatrix, DELETE_MATRIX,
    searchTasks, SEARCH_TASKS
}
