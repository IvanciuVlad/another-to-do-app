import React from "react";

const Note = ({onClick, completed, text}) => (
    <div onClick={onClick}
         style={{
             textDecoration: completed ? 'line-through' : 'none'
         }}>
        {text}
    </div>
)


export default Note;