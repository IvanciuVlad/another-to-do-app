import {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE} from "../actions/types";

export default (state = [], action) => {
    switch(action.type) {
        case ADD_NOTE:
            console.log("Suntem in reducer", action, state)
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
            console.log("delete reducer", state);
            return state.filter((note, id) => id !== action.id)

        default:
            return state;
    }
}