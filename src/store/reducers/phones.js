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
    return updateObject(state, {
        orders: action.orders,
        loading: false,
    });
}

const fetchPhonesFail = (state, action) => {
    return updateObject(state, { loading: false });
}

const reducer = (state = initialState, action) => {
    const actions = {
        [actionTypes.FETCH_PHONES_START]: () => fetchPhonesStart(state, action),
        [actionTypes.FETCH_INDIVIDUAL_PHONE_SUCCESS]: () => fecthPhonesSuccess(state, action),
        [actionTypes.FETCH_INDIVIDUAL_PHONE_FAIL]: () => fetchPhonesFail(state, action),
    }
    const dispatchedAction = actions[action];
    return !dispatchedAction ? state : dispatchedAction();
};

export default reducer;