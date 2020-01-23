import {CREATE_MATRIX, DELETE_MATRIX, FETCH_MATRICES, UPDATE_MATRIX} from "../actions";

const matricesReducer = (state, action) => {
    if (state === undefined) {
        return {};
    }

    const updatedMatricesList = [...state];

    switch (action.type) {
        case FETCH_MATRICES:
            return action.payload;
        case CREATE_MATRIX:
            updatedMatricesList.push(action.payload);
            updatedMatricesList.sort();

            return updatedMatricesList;
        case UPDATE_MATRIX:
            const updatedMatrix = action.payload;

            updatedMatricesList.find((matrix, i, updatedMatricesList) => {
                if (matrix.id === updatedMatrix.id) {
                    updatedMatricesList[i] = updatedMatrix;
                    return true
                }
            });

            updatedMatricesList.sort();

            return updatedMatricesList;
        case DELETE_MATRIX:
            updatedMatricesList.find((matrix, i, updatedMatricesList) => {
                if (matrix.id === action.matrixId) {
                    updatedMatricesList.splice(i,1);
                    return true
                }
            });

            updatedMatricesList.sort();

            return updatedMatricesList;
        default:
            return state;
    }
};

export default matricesReducer;