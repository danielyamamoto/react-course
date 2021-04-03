import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = authData => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFailed = error => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error 
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        const url = isSignup ? 
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdIWW8FUAJAGg2cy1YRmYWVPEuLVq7-sk' :
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdIWW8FUAJAGg2cy1YRmYWVPEuLVq7-sk';

        axios.post(url, authData)
            .then(res => {
                dispatch(authSuccess(res.data));
            })
            .catch(err => {
                dispatch(authFailed(err));
            });
    };
};