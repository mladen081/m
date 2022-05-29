import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthorsTitlesPage } from './pages/AuthorsTitlesPage';
import { InputBookPage } from './pages/InputBookPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/atitles/:author" element={<AuthorsTitlesPage />} />
          <Route path="/inputBook" element={<InputBookPage />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
