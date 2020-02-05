import * as ACTION_TYPES from '../actions/actionTypes';

export const initialState = {
    isAuthenticated: false
};

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            };
        case ACTION_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
};
