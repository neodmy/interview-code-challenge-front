import * as actionTypes from './actionTypes';
import axios from '../../axios-phones';

export const switchAdmin = () => {
    return {
        type: actionTypes.SWITCH_ADMIN
    };
};

export const resetAdminRequestStatus = () => {
    return {
        type: actionTypes.RESET_ADMIN_REQUEST_STATUS
    };
};

export const adminSavePhoneStart = () => {
    return {
        type: actionTypes.ADMIN_SAVE_PHONE_START,
    }
};

export const adminSavePhoneSuccess = () => {
    return {
        type: actionTypes.ADMIN_SAVE_PHONE_SUCCESS,
    }
};

export const adminSavePhoneFail = (message) => {
    return {
        type: actionTypes.ADMIN_SAVE_PHONE_FAIL,
        errorRequest: message,
    }
};

export const adminSavePhone = (phoneData) => {
    return dispatch => {
        dispatch(adminSavePhoneStart());
        axios.put(`phones/${phoneData._id}`, phoneData)
            .then(res => {
                dispatch(adminSavePhoneSuccess());
            })
            .catch(err => {
                dispatch(adminSavePhoneFail('Sorry, your changes couldn\'t be saved'));
            })
    }
};

export const adminDeletePhoneStart = () => {
    return {
        type: actionTypes.ADMIN_DELETE_PHONE_START,
    };
};

export const adminDeletePhoneSuccess = () => {
    return {
        type: actionTypes.ADMIN_DELETE_PHONE_SUCCESS,
    };
};

export const adminDeletePhoneFail = (message) => {
    return {
        type: actionTypes.ADMIN_DELETE_PHONE_FAIL,
        errorRequest: message,
    };
};

export const adminDeletePhone = (id) => {
    return dispatch => {
        dispatch(adminDeletePhoneStart());
        axios.delete(`phones/${id}`)
            .then(res => dispatch(adminDeletePhoneSuccess()))
            .catch(
                err => dispatch(adminDeletePhoneFail("Sorry, selected phone couldn't be removed"))
            );
    }
};