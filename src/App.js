import React, { Component } from 'react';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import NoteSearch from './components/NoteSearch';
import { getInitialData } from './utils';

class App extends Component {
    constructor() {
        super();

        this.state = {
            searchQuery: '',
            notes: getInitialData(),
        };

        this.addNoteHandler = this.addNoteHandler.bind(this);
        this.searchNoteHandler = this.searchNoteHandler.bind(this);
        this.noteList = this.noteList.bind(this);
        this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
        this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
    }

    addNoteHandler = ({ title, body }) => {
        this.setState({
            notes: [
                ...this.state.notes,
                {
                    id: this.state.notes.length + 1,
                    title,
                    body,
                    createdAt: new Date().toISOString(),
                    archived: false,
                },
            ],
        });
    };

    deleteNoteHandler = (id) => {
        this.setState({
            notes: this.state.notes.filter((note) => note.id !== id),
        });
    };

    archiveNoteHandler = (id) => {
        this.setState({
            notes: this.state.notes.map((note) =>
                note.id === id ? { ...note, archived: !note.archived } : note
            ),
        });
    };

    searchNoteHandler = (searchQuery) => {
        this.setState({
            searchQuery,
        });
    };

    noteList() {
        const { searchQuery, notes } = this.state;

        const list = searchQuery.trim().length
            ? notes.filter(
                  (note) =>
                      note.title
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()) ||
                      note.body
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
              )
            : notes;

        return list.sort((a, b) => a.date - b.date).reverse();
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Notes App</h1>
                <div className="flex">
                    <div className="card">
                        <h1>Add Note</h1>
                        <NoteInput addNote={this.addNoteHandler} />
                    </div>
                </div>

                <h1>Notes</h1>
                <NoteSearch onSearch={this.searchNoteHandler} />
                <div className="flex">
                    <NoteList
                        onDelete={this.deleteNoteHandler}
                        onArchive={this.archiveNoteHandler}
                        list={this.noteList().filter((note) => !note.archived)}
                    />
                </div>

                <h1>Archieved</h1>
                <NoteList
                    onDelete={this.deleteNoteHandler}
                    onArchive={this.archiveNoteHandler}
                    list={this.noteList().filter((note) => note.archived)}
                />
            </div>
        );
    }
}

export default App;
