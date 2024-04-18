
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import FeedBackApp from './FeedBackApp';
import About from './pages/about';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        {/* redirection */}
        <Route path="" element={<Navigate to={'/signin'} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<FeedBackApp />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>

    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
