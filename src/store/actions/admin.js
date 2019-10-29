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

const convertToNumber = (string) => {
    const number = Number(string);
    return !number ? string : number;
};

export const adminUpdatePhoneStart = () => {
    return {
        type: actionTypes.ADMIN_UPDATE_PHONE_START,
    }
};

export const adminUpdatePhoneSuccess = () => {
    return {
        type: actionTypes.ADMIN_UPDATE_PHONE_SUCCESS,
    }
};

export const adminUpdatePhoneFail = (message) => {
    return {
        type: actionTypes.ADMIN_UPDATE_PHONE_FAIL,
        errorRequest: message,
    }
};

export const adminUpdatePhone = (phoneData) => {
    return dispatch => {
        dispatch(adminUpdatePhoneStart());
        phoneData.price = convertToNumber(phoneData.price);
        phoneData.ram = convertToNumber(phoneData.ram);
        axios.put(`phones/${phoneData._id}`, phoneData)
            .then(res => {
                dispatch(adminUpdatePhoneSuccess());
            })
            .catch(err => {
                dispatch(adminUpdatePhoneFail('Sorry, your changes couldn\'t be saved'));
            })
    }
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
        phoneData.price = convertToNumber(phoneData.price);
        phoneData.ram = convertToNumber(phoneData.ram);
        phoneData.imageFileName = 'generic.png';
        axios.post('phones', phoneData)
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