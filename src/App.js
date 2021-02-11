import logo from "./assets/icon-dark.png";
import "./App.css";
import { runSolution } from "./codeChallenge/palindromeCoersion.tsx";

function App() {
  runSolution(34985734);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Palindrome Coersion</p>
        <a
          className="App-link"
          href="https://github.com/Red-Technologies/Palindrome-Coersion"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instructions
        </a>
      </header>
    </div>
  );
}

export default App;
