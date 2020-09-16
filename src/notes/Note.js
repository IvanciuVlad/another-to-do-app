import React from "react";
import {ListItem, ListItemText, Button} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteNote} from "../actions";
import '../index.css';
import {connect} from "react-redux";

const Note = ({onClick, id, completed, text, deleteNote}) => (
    <ListItem id="todo-note" className="todo-listitem">
        <div onClick={onClick} className="todo-listitem-text"
             style={{
                 textDecoration: completed ? "line-through" : 'none'
             }}>
            <ListItemText primary={text} />
        </div>
        <Button size="small" align="right" onClick={() => deleteNote(id)} >
            <DeleteIcon />
        </Button>
    </ListItem>
)

const mapStateToProps = state => ({
    notes: state.reducers
})

const mapDispatchToProps = dispatch => ({
    deleteNote: id => dispatch(deleteNote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note);


//export default Note;