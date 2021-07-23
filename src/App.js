import "./App.css";
import Dictionary from "./Dictionary";
import background from "./library.jpg";

function App() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="App">
        <div className="container">
          <header className="App-header">
            <h1>Dictionary</h1>
            <p className="quote">
              "Words — so innocent and powerless as they are, as standing in a
              dictionary, how potent for good and evil they become, in the hands
              of one who knows how to combine them!"
            </p>
            <p className="quote-author"> - Nathaniel Hawthorne</p>
          </header>
          <Dictionary defaultKeyword="dictionary" />
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
    </div>
  );
}

export default App;
