import {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE} from "../actions/types";

export default (state = [], action) => {
    switch(action.type) {
        case ADD_NOTE:
            return [...state, {
                id: action.id,
                text: action.text,
                completed: false
            }]
        case UPDATE_NOTE:
            return state.map(note =>
                note.id === action.id ? { ...note, completed: !note.completed } : note
            )
        case DELETE_NOTE:
            return state.filter((note, id) => id !== action.id)
        default:
            return state;
    }
}