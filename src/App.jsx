import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div >
      <div className="main">

        <BrowserRouter>
        <Navbar />

        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;
