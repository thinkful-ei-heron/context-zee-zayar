import React, { Component } from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';
import './css/Mainpage.css'

export default class Mainpage extends Component {
  render() {
    return (
      <div>
        <FolderList folders={this.props.folders}/>
        <NoteList notes={this.props.notes}/>
      </div>
    )
  }
}
