import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE
} from '../actions/smurfActions';

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false,
    isAddingSmurf: false
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: '',
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_SMURF_START:
            return {
                ...state,
                isAddingSmurf: true,
                error: ''
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isAddingSmurf: false,
                error: ''
            }
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                isAddingSmurf: false,
                error: action.payload
            }
        default:
            return state;
    }
}