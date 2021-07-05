
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
<h1> Dictionary</h1>
      </header>
<Dictionary />
      <footer className="App-footer">
This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/joana-vasconcelos-carvalheiro-569056a5/"
        target="_blank"
        rel="noreferrer"
      >
        Joana Vasconcelos
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/joanavjc/dictionary-react-app"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        open-sourced on GitHub
      </a>{" "}
      </footer>
    </div>
    </div>
  );
}

export default App;
