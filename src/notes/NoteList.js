import React from "react";
import {connect} from "react-redux";
import {updateNote} from "../actions";
import Note from "./Note";


const NoteList = ({filter, notes, updateNote}) => {
    if (!notes) {
        return <div />;
    }
    return notes.map(note => (
        <Note key={note.id} id={note.id} text={note.text} completed={note.completed} filter={filter}
              onClick={() => updateNote(note.id)}/>
    ))
}

const mapStateToProps = state => ({
    notes: state.reducers
})

const mapDispatchToProps = dispatch => ({
    updateNote: id => dispatch(updateNote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);