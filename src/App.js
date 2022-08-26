import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <br></br>
          HELLO!
        </p>
        <a
          className="App-link"
          href="https://diegoroney.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DIEGO R
        </a>
      </header>
      <div className="hero">
        <h1>HERO PAGE!</h1>
      </div>
    </div>
  );
}

export default App;
