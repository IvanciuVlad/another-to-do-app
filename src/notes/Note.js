import React from "react";
import {ListItem, ListItemText} from "@material-ui/core";
import '../index.css';

const Note = ({onClick, completed, text}) => (
    <ListItem id="todo-note">
        <div onClick={onClick}
             style={{
                 textDecoration: completed ? "line-through" : 'none'
             }}>
            <ListItemText primary={text} />
        </div>
    </ListItem>
)


export default Note;