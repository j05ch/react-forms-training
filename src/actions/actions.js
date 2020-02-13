import * as ACTION_TYPES from './actionTypes';

export const login_success = () => ({type: ACTION_TYPES.LOGIN_SUCCESS});

export const login_failure = () => ({type: ACTION_TYPES.LOGIN_FAILURE});

// export const SUCCESS = {
//     type: ACTION_TYPES.SUCCESS
// };
//
// export const FAILURE = {
//     type: ACTION_TYPES.FAILURE
// };
//
// export const success = () => ({type: ACTION_TYPES.SUCCESS});
//
// export const failure = () => ({type: ACTION_TYPES.FAILURE});


// export const add_profile = profile => ({
//     type: ACTION_TYPES.ADD_PROFILE,
//     payload: profile
// });
//
// export const remove_profile = () => ({type: ACTION_TYPES.REMOVE_PROFILE});
//
// export const user_input_change = text => ({
//     type: ACTION_TYPES.USER_INPUT_CHANGE,
//     payload: text
// });
//
// export const user_input_submit = text => ({
//     type: ACTION_TYPES.USER_INPUT_SUBMIT,
//     payload: text
// });