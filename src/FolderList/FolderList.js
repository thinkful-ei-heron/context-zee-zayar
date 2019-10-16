import React, {Component} from 'react';
import '../App/App.css';
import './FolderList.css';
import { Link } from "react-router-dom";
import DataContext from '../DataContext'

class FolderList extends Component {
    static contextType = DataContext
    render() {
        return (
            <>
                {this.context.folders.map((folder) => {
                    return (<div key={folder.id} className={(folder.id === this.props.id) ? 'background' : ''}><Link to={'/folders/' + folder.id}>{folder.name}</Link></div>);
                })
                }
                <button> Add Folder</button>
            </>);
    }
}

export default FolderList;
