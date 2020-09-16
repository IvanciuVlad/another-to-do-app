import React, {useState} from "react";
import {
    Container,
    Typography,
    AppBar,
    Toolbar,
    Button,
    TextField,
    Paper,
    List,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@material-ui/core';
import NoteList from "./notes/NoteList";
import {connect} from "react-redux";
import {addNote} from "./actions";
import './index.css';

const App = ({notes, addNote}) => {
    console.log("Notes: ", notes);
    const [input, setInput] = useState("");
    const [value, setValue] = React.useState('all');

    const sendInput = (e) => {
        e.preventDefault();
        if (input !== "") {
            const note = {
                text: input
            }
            addNote(note);
        }
    }

    const handleOnInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <Container>
                <Typography id="todo-title" variant="h2">
                    Another To Do List
                </Typography>
            </Container>
            <Container id="menu">
                <AppBar position="static" id="todo-appbar">
                    <Toolbar id="todo-toolbar">
                        <Button variant="contained" color="secondary" onClick={sendInput}>
                            Create a Note
                        </Button>
                        <form noValidate autoComplete="off" id="todo-input">
                            <div>
                                <TextField required
                                           id="filled-required"
                                           label="Required"
                                           defaultValue=""
                                           onChange={handleOnInputChange}/>
                            </div>
                        </form>

                        <FormControl className="todo-radiobuttons">
                            <div>
                                <FormLabel component="legend">Filter</FormLabel>
                                <RadioGroup row value={value}  onChange={handleChange}>
                                    <FormControlLabel value="all" control={<Radio/>} label="All"/>
                                    <FormControlLabel value="completed" control={<Radio/>} label="Completed"/>
                                    <FormControlLabel value="available" control={<Radio/>} label="Available"/>
                                </RadioGroup>
                            </div>
                        </FormControl>
                    </Toolbar>
                </AppBar>
            </Container>

            <Container>
                <Paper>
                    <List>
                        <NoteList filter={value} />
                    </List>
                </Paper>
            </Container>
        </div>
    );
}

const mapStateToProps = state => ({
    notes: state.reducers
})

export default connect(mapStateToProps, {addNote})(App);