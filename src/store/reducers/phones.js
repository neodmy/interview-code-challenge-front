import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../util';

const initialState = {
    phones: [],
    loading: false,
    error: null,
    changes: false,
};

const fetchPhonesStart = (state, action) => {
    return updateObject(state, { loading: true });
}

const fecthPhonesSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        phones: action.phones,
    }
}

const fetchPhonesFail = (state, action) => {
    return updateObject(state, { loading: false });
}

const reducer = (state = initialState, action) => {
    const actions = {
        [actionTypes.FETCH_PHONES_START]: () => fetchPhonesStart(state, action),
        [actionTypes.FETCH_PHONES_SUCCESS]: () => fecthPhonesSuccess(state, action),
        [actionTypes.FETCH_PHONES_FAIL]: () => fetchPhonesFail(state, action),
    }
    const dispatchedAction = actions[action.type];
    return !dispatchedAction ? state : dispatchedAction();
};

export default reducer;