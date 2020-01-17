const FETCH_TASKS = 'FETCH_TASKS';
const CREATE_TASK = 'CREATE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CLOSE_TASK_MODAL = 'CLOSE_TASK_MODAL';
const OPEN_TASK_MODAL = 'OPEN_TASK_MODAL';
const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
const CREATE_CATEGORY = 'CREATE_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const OPEN_CATEGORY_MODAL = 'OPEN_CATEGORY_MODAL';
const CLOSE_CATEGORY_MODAL = 'CLOSE_CATEGORY_MODAL';
const DOM_TASK_COLORS_UPDATE = 'DOM_TASK_COLORS_UPDATE';

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

const closeTaskModal = () => {
    return {
        type: CLOSE_TASK_MODAL,
        payload: {
            display: false,
        }
    }
};

const openTaskModal = (modalType, modalProps = {title: 'Create task'}) => {
    return {
        type: OPEN_TASK_MODAL,
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
    ).then(response => response.json());

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
    ).then(response => response.json());

    return {
        type: UPDATE_CATEGORY,
        payload: promise
    }
};

const closeCategoryModal = () => {
    return {
        type: CLOSE_CATEGORY_MODAL,
        payload: {
            display: false,
        }
    }
};

const openCategoryModal = (modalType, modalProps = {title: 'Create category'}) => {
    return {
        type: OPEN_CATEGORY_MODAL,
        payload: {
            display: true,
            modalType: modalType,
            modalProps: modalProps
        }
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



export {
    fetchTasks, FETCH_TASKS,
    createTask, CREATE_TASK,
    updateTask, UPDATE_TASK,
    deleteTask, DELETE_TASK,
    closeTaskModal, CLOSE_TASK_MODAL,
    openTaskModal, OPEN_TASK_MODAL,
    fetchCategories, FETCH_CATEGORIES,
    createCategory, CREATE_CATEGORY,
    updateCategory, UPDATE_CATEGORY,
    openCategoryModal, OPEN_CATEGORY_MODAL,
    closeCategoryModal, CLOSE_CATEGORY_MODAL,
    domTaskColorsUpdate, DOM_TASK_COLORS_UPDATE
}
