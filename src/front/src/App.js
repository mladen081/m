import './App.css';
import { Page1 } from './pages/Page1';
import { Footer } from './components/Footer';
import PostForm from './components/PostForm';
import AddBookForm from './components/AddBookForm';

function App() {
  return (
    <div className="App">
      <Page1 />
      <AddBookForm />
      <Footer />
    </div>
  );
}

export default App;
