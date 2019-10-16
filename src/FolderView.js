import React, { Component } from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';
import './dummy-store';
import './css/FolderView.css'

export default class FolderView extends Component {


  render() {
    return (
      
      <div>
        <FolderList folders = {this.props.folders} selectedId={this.props.match.params.folderid}/>
        <NoteList notes = {this.props.notes} selectedId={this.props.match.params.folderid} />
        <div className="folder-view"></div>
      </div>
    )
  }
}
// props.match.params.folderSelected