import React, {Component} from 'react';
import '../App/App.css';
// import {Link} from "react-router-dom";
import DataContext from '../DataContext';
import { withRouter } from 'react-router-dom'


class DetailedNote extends Component {
    static contextType = DataContext
    render() {
        const note = {...this.props.note};
        return (
            <div className='Note'>
                <h3>{note.name}</h3>
                <p>Date modified on {(new Date(note.modified)).toDateString()}</p>
                <p>{note.content}</p>
                <button onClick={
                    () => {
                        this.context.deleteNote(this.props.note.id)
                        this.props.history.push('/')
                     }}>
                    Delete Note</button>
            </div>
        );
    }
}

export default withRouter(DetailedNote);
