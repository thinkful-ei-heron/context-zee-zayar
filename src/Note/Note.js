import React, {Component} from 'react';
import '../App/App.css';
import './Note.css';
import { Link } from "react-router-dom";
import DataContext from '../DataContext'

class Note extends Component {
    static contextType = DataContext
    render() {
        return (
            <div className='Note'>
                <Link to={'/notes/' + this.props.id}>
                <h3>{this.props.name}</h3>
                <p>Date modified on {(new Date(this.props.content)).toDateString()}</p>
                </Link>
                <button onClick={() => this.context.deleteNote(this.props.id)}>Delete Note</button>
            </div>
        );
    }
}

export default Note;
