import React, {useState} from "react";
import {Container, Typography, AppBar, Toolbar, Button, TextField, Paper, List} from '@material-ui/core';
import NoteList from "./notes/NoteList";
import {connect} from "react-redux";
import {addNote, updateNote} from "./actions";

const App = ({notes, addNote}) => {
    console.log("Notes: ", notes);
    const [input, setInput] = useState("");

    const sendInput = (e) => {
        e.preventDefault();
        const note = {
            text: input
        }
        console.log("App js");
        console.log(input);
        addNote(note);
    }

    const handleOnInputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            <Container>
                <Typography align="center" variant="h2">
                    Another To Do List
                </Typography>
            </Container>
            <Container id="menu">
                <AppBar position="static">
                    <Toolbar>
                        <Button variant="contained" color="secondary" onClick={sendInput}>
                            Create a Note
                        </Button>
                        <form noValidate autoComplete="off">
                            <div>
                                <TextField
                                           defaultValue="Add your task here"
                                           onChange={handleOnInputChange}/>
                            </div>
                        </form>
                    </Toolbar>
                </AppBar>
            </Container>

            <Container>
                <NoteList />
            </Container>
        </div>
    );
}

const mapStateToProps = state => ({
    notes: state.reducers
})


export default connect(mapStateToProps, {addNote})(App);