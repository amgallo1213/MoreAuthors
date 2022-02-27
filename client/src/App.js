import './App.css';
import { Router } from '@reach/router';
// import Main from './views/Main';
import AuthorForm from './components/AuthorForm';
import OneAuthor from './components/OneAuthor';
import EditAuthor from './components/EditAuthor';
import AllAuthors from './components/AllAuthors';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        {/* <Main path="/" /> */}
        <AllAuthors path="/authors" />
        <AuthorForm path="/author/create"/>
        <OneAuthor path="/author/:id" />
        <EditAuthor path="/author/:id" />
      </Router>
    </div>
  );
}

export default App;
