import './App.css';
import { Router } from '@reach/router';
import AuthorForm from './components/AuthorForm';
import OneAuthor from './components/OneAuthor';
import EditAuthor from './components/EditAuthor';
import AllAuthors from './components/AllAuthors';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <AllAuthors path="/authors" default/>
        <AuthorForm path="/authors/create"/>
        <OneAuthor path="/authors/:id" />
        <EditAuthor path="/authors/edit/:id" />
        <Error path="/authors/error" />
      </Router>
    </div>
  );
}

export default App;
