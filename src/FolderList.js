import React, { Component } from 'react'
import Folder from './Folder'
import './dummy-store'
import './css/FolderList.css'

export default class FolderList extends Component {  
  render() {
    let folders = this.props.folders;

    if(this.props.selectedNote){

      folders = folders.filter(folder => folder.id === this.props.selectedId)
  
    }
    return (
      <div className="folderlist">
        {folders.map(folder =>
          <Folder id={folder.id} key={folder.id} name={folder.name}/>
        )}
        {this.props.selectedNote ? <></> : <button className="add-folder">Add Folder</button>}
      </div>
    )
  }
}
