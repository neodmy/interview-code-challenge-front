import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../util';

const initialState = {
    phones: [],
    loading: false,
    error: null,
    phoneModified: false,
    selectedPhone: null,
};

const fetchPhonesStart = (state, action) => {
    return updateObject(state, { loading: true, error: null, selectedPhone: null });
};

const fecthPhonesSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        phones: action.phones,
    }
};

const fetchPhonesFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error });
};

const selectPhone = (state, action) => {
    return updateObject(state, { selectedPhone: action.selectedPhone });
};

const modifyPhone = (state, action) => {
    return updateObject(state, { phoneModified: true });
};

const savePhoneStart = (state, action) => {
    return updateObject(state, { loading: true, error: null });
}

const savePhoneSuccess = (state, action) => {
    return updateObject(state, { loading: false, }); //TODO
}

const savePhoneFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error });
}

const reducer = (state = initialState, action) => {
    const actions = {
        [actionTypes.FETCH_PHONES_START]: () => fetchPhonesStart(state, action),
        [actionTypes.FETCH_PHONES_SUCCESS]: () => fecthPhonesSuccess(state, action),
        [actionTypes.FETCH_PHONES_FAIL]: () => fetchPhonesFail(state, action),
        [actionTypes.SELECT_PHONE]: () => selectPhone(state, action),
        [actionTypes.MODIFY_PHONE]: () => modifyPhone(state, action),
        [actionTypes.SAVE_PHONE_START]: () => savePhoneStart(state, action),
        [actionTypes.SAVE_PHONE_SUCCESS]: () => savePhoneSuccess(state, action),
        [actionTypes.SAVE_PHONE_FAIL]: () => savePhoneFail(state, action),
    }
    const dispatchedAction = actions[action.type];
    return !dispatchedAction ? state : dispatchedAction();
};

export default reducer;