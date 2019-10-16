import React from 'react';
import { Route, Switch }from 'react-router-dom';
import Mainpage from './Mainpage';
import Header from './Header';
import FolderView from './FolderView';
import NoteView from './NoteView';
import './dummy-store'
import './css/App.css'
import dummyStore from './dummy-store';
function App() {
  const folders=dummyStore.folders
  const notes=dummyStore.notes
  return (
    <main className='App'>
      <Route path='' component={Header} />
      <Switch>
        <Route path='/folder/:folderid/note/:noteid/' render={(props) => <><NoteView {...props} notes={notes} folders={folders}/></>}/>
        <Route path='/folder/:folderid/' render={(props)=> {
          return <FolderView {...props} folders={folders} notes={notes} />}} />
        <Route exact path='/' render={(props)=> {
          return <Mainpage {...props} folders={folders} notes={notes}/>
        }} />
      </Switch>
    </main>
  );
}

/*

*/

/*
<Header />-- click on 'Noteful' links to homepage
<FolderList />
  <Folder ></Folder> {./dummy-store.folders id, name}
  
<NoteList />
  <Note />
    -title as clickable button {./dummy-store: notes.name}
    -date modified {./dummy-store: notes.modified}
    -content <Link to"/note/:note-id> {./dummy-store: notes.content}
    -delete
      -folder ID {./dummy-store: notes.folderId}

Routes
"/" - <Mainpage store={}/> props are main store of all folders and notes
"/folder/:folderId" - <Mainpage folderId={} 

<Route path='folder/:folder-id' render={() =>
                      <FolderSelect
                        folderId={this.state.activeFolder}}> 
*/

export default App;