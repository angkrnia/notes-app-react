import React, { Component } from 'react';

class NoteInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.name]:
                e.target.value.length > 50
                    ? e.target.value.slice(0, 50)
                    : e.target.value,
        });
    }

    submitHandler(e) {
        e.preventDefault();
        this.props.addNote(this.state);
        this.setState({ title: '', body: '' });
    }

    render() {
        const { title, body } = this.state;
        const length = this.state.body.length;

        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    className="input-note"
                    value={title}
                    name="title"
                    onChange={this.onChangeHandler}
                    placeholder="Title"
                    required
                />
                <textarea
                    value={body}
                    name="body"
                    onChange={this.onChangeHandler}
                    className="input-note"
                    col={30}
                    rows={5}
                    placeholder="Body"
                    required
                ></textarea>
                <div className="flex justify-between">
                    <p>{length}/50</p>
                    <button type="submit" className="button-tambah">
                        Tambah
                    </button>
                </div>
            </form>
        );
    }
}

export default NoteInput;
