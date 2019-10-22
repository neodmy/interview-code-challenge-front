import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../util';

const initialState = {
    isAdmin: false,
};

const reducer = (state = initialState, action) => {
    return action.type === actionTypes.SWITCH_ADMIN ? updateObject(state, { isAdmin: !state.isAdmin }) : state;

};

export default reducer;