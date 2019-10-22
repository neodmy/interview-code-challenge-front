import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../util';

const initialState = {
    admin: false,
};

const reducer = (state = initialState, action) => {
    return action.type === actionTypes.SWITCH_ADMIN ? updateObject(state, { admin: !state.admin }) : state;

};

export default reducer;