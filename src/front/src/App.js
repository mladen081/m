import './App.css';
import { Footer } from './components/Footer';
import PostForm from './components/PostForm';
import AddBookForm from './components/AddBookForm';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddBookForm />
      <Footer />
    </div>
  );
}

export default App;
