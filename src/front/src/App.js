import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AuthorsTitlesPage } from './pages/AuthorsTitlesPage';
import { AuthorsPage } from './pages/AuthorsPage';
import { InputBookPage } from './pages/InputBookPage';

function App(props) {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authors/" element={<AuthorsPage />} />
          <Route path="/atitles/:authors" element={<AuthorsTitlesPage />} />
          <Route path="/inputBook" element={<InputBookPage />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
