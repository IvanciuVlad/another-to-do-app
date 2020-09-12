import {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE} from "./actiontypes";
import _ from "lodash";

export default (state = {}, action) => {
    switch(action.type) {
        case ADD_NOTE:
            return {...state, [action.payload.id]: action.payload}
        case UPDATE_NOTE:
            return {...state, [action.payload.id]: action.payload}
        case DELETE_NOTE:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}