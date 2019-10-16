import React, { Component } from 'react'
import FolderList from './FolderList';
import NoteList from './NoteList';
import './css/NoteView.css'

export default class NoteView extends Component {
  render() {
    return (
        <div>
          <FolderList selectedId={this.props.match.params.folderid} folders={this.props.folders} notes={this.props.notes} selectedNote={this.props.match.params.noteid}/>
          <NoteList selectedNote={this.props.match.params.noteid} folders={this.props.folders} notes={this.props.notes}/>
          <button onClick={() => this.props.history.goBack()}>Go Back</button>
        </div>
    )
  }
}