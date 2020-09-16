import {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE} from "./types";

let idIncrement = 0;

export const addNote = (note) => {
    console.log(note);
    return ({
        type: ADD_NOTE,
        id: idIncrement++,
        text: note.text
    })
}

export const updateNote = (id) => {
    return ({
       type: UPDATE_NOTE,
       id
    });
}

export const deleteNote = (id) => {
    console.log("Stergem");
    return ({
       type: DELETE_NOTE,
       id
    });
}