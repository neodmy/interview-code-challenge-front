import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../util';

const initialState = {
    isAdmin: false,
    loadingPhone: false,
    requestResult: null,
    phoneModified: false,
    errorRequest: null,
    successRequest: false,
};

const switchAdmin = (state, action) => {
    return updateObject(state, { isAdmin: !state.isAdmin });
};

const resetAdminRequestStatus = (state, action) => {
    return updateObject(state, { errorRequest: null, successRequest: false });
};

const adminSavePhoneStart = (state, action) => {
    return updateObject(state, { loadingPhone: true, errorRequest: null, successRequest: false });
};

const adminSavePhoneSuccess = (state, action) => {
    return updateObject(state, { loadingPhone: false, errorRequest: null, successRequest: true });
};

const adminSavePhoneFail = (state, action) => {
    return updateObject(state, { loadingPhone: false, errorRequest: action.errorRequest });
};

const adminDeletePhoneStart = (state, action) => {
    return updateObject(state, { loadingPhone: true, errorRequest: null, successRequest: false });
}

const adminDeletePhoneSuccess = (state, action) => {
    return updateObject(state, { loadingPhone: false, errorRequest: null, successRequest: true })
}

const adminDeletePhoneFail = (state, action) => {
    return updateObject(state, { loadingPhone: false, errorRequest: action.errorRequest });
}

const reducer = (state = initialState, action) => {
    const actions = {
        [actionTypes.SWITCH_ADMIN]: () => switchAdmin(state, action),
        [actionTypes.RESET_ADMIN_REQUEST_STATUS]: () => resetAdminRequestStatus(state, action),
        [actionTypes.ADMIN_SAVE_PHONE_START]: () => adminSavePhoneStart(state, action),
        [actionTypes.ADMIN_SAVE_PHONE_SUCCESS]: () => adminSavePhoneSuccess(state, action),
        [actionTypes.ADMIN_SAVE_PHONE_FAIL]: () => adminSavePhoneFail(state, action),
        [actionTypes.ADMIN_DELETE_PHONE_START]: () => adminDeletePhoneStart(state, action),
        [actionTypes.ADMIN_DELETE_PHONE_SUCCESS]: () => adminDeletePhoneSuccess(state, action),
        [actionTypes.ADMIN_DELETE_PHONE_FAIL]: () => adminDeletePhoneFail(state, action),
    }
    const dispatchedAction = actions[action.type];
    return !dispatchedAction ? state : dispatchedAction();
};

export default reducer;