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
        axios.get('phones')
            .then(res => {
                dispatch(fetchPhonesSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchPhonesFail('Sorry, our catalogue is not available. Please, visit us later'));
            });
    }
};

export const selectPhone = (phone) => {
    return {
        type: actionTypes.SELECT_PHONE,
        selectedPhone: phone,
    }
};
