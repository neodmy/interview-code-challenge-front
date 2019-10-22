import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../util';

const initialState = {
    isAdmin: false,
};

const switchAdmin = (state, action) => {
    return updateObject(state, { isAdmin: !state.isAdmin });
}

const reducer = (state = initialState, action) => {
    const actions = {
        [actionTypes.SWITCH_ADMIN]: () => switchAdmin(state, action),
    }
    const dispatchedAction = actions[action.type];
    return !dispatchedAction ? state : dispatchedAction();
};

export default reducer;