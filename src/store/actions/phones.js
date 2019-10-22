import * as actionTypes from './actionTypes';
import axios from '../../axios-phones';

export const fetchPhonesStart = () => {
    return {
        type: actionTypes.FETCH_PHONES_START,
    }
};

export const fetchPhonesSuccess = (phones) => {
    return {
        type: actionTypes.FETCH_PHONES_SUCCESS,
        phones,
    }
};

export const fetchPhonesFail = (message) => {
    return {
        type: actionTypes.FETCH_PHONES_FAIL,
        error: message,
    }
};

export const fetchPhones = () => {
    return dispatch => {
        dispatch(fetchPhonesStart());
        axios.get('/phones')
            .then(res => {
                dispatch(fetchPhonesSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchPhonesFail('Sorry, our catalogue is not available. Please, visit us later'));
            })
    }
};

export const selectPhone = (phoneId) => {
    return {
        type: actionTypes.SELECT_PHONE,
        selectedPhone: phoneId,
    }
};

export const modifyPhone = () => {
    return {
        type: actionTypes.MODIFY_PHONE,
    }
}

export const savePhoneStart = () => {
    return {
        type: actionTypes.SAVE_PHONE_START,
    }
}

export const savePhoneSuccess = () => {
    return {
        type: actionTypes.SAVE_PHONE_SUCCESS,
    }
}

export const savePhoneFail = (message) => {
    return {
        type: actionTypes.SAVE_PHONE_FAIL,
        error: message,
    }
}

export const savePhone = (phoneData) => {
    return dispatch => {
        dispatch(savePhoneStart());
        axios.put('/phone/' + phoneData._id, { phoneData })
            .then(res => {
                dispatch(savePhoneSuccess());
            })
            .catch(err => {
                dispatch(savePhoneFail('Sorry, your changes couldn\'t be saved'));
            })
    }
}
