import React from "react";
import { connect }  from "react-redux";
import {updateNote} from "../actions";
import Note from "./Note";


const NoteList = ({notes, updateNote}) => {
    console.log(notes, updateNote)
    if(!notes) {
        return <div></div>;
    }
    return notes.map(note => (
        <Note key={ note.id } id={note.id} text={note.text} completed={note.completed} onClick={() => updateNote(note.id)} />
    ))
}

const mapStateToProps = state => ({
    notes: state.reducers
})

const mapDispatchToProps = dispatch => ({
    updateNote: id => dispatch(updateNote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);

/*

class NoteList extends React.Component {
    componentDidMount() {
        this.props.fetchNotes();
    }

    renderNotes() {
        return (
            <div>
                <i className="" />
                <div>
                    {notes.title}
                    {notes.description}
                </div>
            </div>
        );
    }

    render() {
        console.log(this.props.notes);
        return (
          <div>
              <Container id="list" maxWidth={"md"}>
                  <Paper>
                      <List>{this.renderNotes()}</List>
                  </Paper>
              </Container>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notes: Object.values(state.notes),
    };
};

export default connect(mapStateToProps, {fetchNotes})(NoteList);*/
