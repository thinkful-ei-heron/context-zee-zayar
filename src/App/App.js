import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import './App.css';
// import dummyStore from '../dummy-store';
import FolderList from "../FolderList/FolderList";
import NoteList from "../NoteList/NoteList";
// import Folder from "../Folder/Folder";
import DetailedNote from "../DetailedNote/DetailedNote";
import DataContext from '../DataContext';

class App extends Component {
    static contextType = DataContext
    state = {
        notes: [],
        folders: [],
        deleteNote: noteId => {
            this.apiDeleteNote(noteId).then(()=> this.fetchData())
        }
    };

    apiDeleteNote(noteId) {

        return fetch(`http://localhost:9090/notes/${noteId}`, { method: 'DELETE' }) 
    }

    fetchData() {
        
        let folderPromise = fetch('http://localhost:9090/folders').then(response => response.json())
            .catch(err => console.log(err))
    
        let notePromise = fetch('http://localhost:9090/notes').then(response => response.json())
            .catch(err => console.log(err))
        
        Promise.all([folderPromise, notePromise]).then(results => this.setState({
            ...this.state,
            folders: results[0],
            notes: results[1]
        }))
    }
    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div className="App">
                
                <DataContext.Provider value={this.state}>
                    <div className="App-header">
                        <Link to='/'>Noteful </Link>

                    </div>
                    <div className='SideNav'>
                        <Switch>
                            <Route path='/notes/:noteId' render={(routeProps) => {
                                const note = this.state.notes.find(note => note.id === routeProps.match.params.noteId);
                                const folder = { ...this.state.folders.find(folder => folder.id === note.folderId) };
                                return (
                                    <div>
                                        <div>{folder.name}</div>
                                        <Link to={'/folders/' + folder.id}>Go Back To</Link>
                                    </div>)
                            }} />
                            <Route path='/folders/:folderId'
                                render={(routeProps) => <FolderList folders={this.state.folders}
                                    id={routeProps.match.params.folderId} />} />
                            <Route exact path='/' render={(routeProps) => <FolderList folders={this.state.folders} />} />
                        </Switch>



                    </div>
                    <div className='Main'>
                        <Switch>
                            <Route path='/notes/:noteId' render={(routeProps) => <DetailedNote
                                note={this.state.notes.find(note => note.id === routeProps.match.params.noteId)} />} />
                            <Route path='/folders/:folderId'
                                render={(routeProps) => <NoteList folderId={routeProps.match.params.folderId}
                                    notes={this.state.notes} />} />
                            <Route exact path='/' render={(routeProps) => <NoteList notes={this.state.notes} />} />
                        </Switch>

                        <button> Add Note</button>
                    </div>
                </DataContext.Provider>
                
                
            </div>
        )
    }
}

export default App;
