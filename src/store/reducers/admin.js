import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../util';

const initialState = {
    isAdmin: false,
    loadingPhone: false,
    phoneError: null,
    phoneModified: false,
};

const switchAdmin = (state, action) => {
    return updateObject(state, { isAdmin: !state.isAdmin });
};

const adminModifyPhone = (state, action) => {
    return updateObject(state, { phoneModified: true });
};

const adminSavePhoneStart = (state, action) => {
    return updateObject(state, { loadingPhone: true, error: null });
};

const adminSavePhoneSuccess = (state, action) => {
    return updateObject(state, { loadingPhone: false, }); //TODO
};

const adminSavePhoneFail = (state, action) => {
    return updateObject(state, { loadingPhone: false, error: action.error });
};

const adminDeletePhoneStart = (state, action) => {
    return updateObject(state, { loadingPhone: true });
}

const adminDeletePhoneSuccess = (state, action) => {
    return updateObject(state, { loadingPhone: false })
}

const adminDeletePhoneFail = (state, action) => {
    return updateObject(state, { loadingPhone: false, phoneError: action.phoneError });
}

const reducer = (state = initialState, action) => {
    const actions = {
        [actionTypes.SWITCH_ADMIN]: () => switchAdmin(state, action),
        [actionTypes.ADMIN_MODIFY_PHONE]: () => adminModifyPhone(state, action),
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