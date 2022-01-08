import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://lucid-williams-1b13b8.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Bernadette
          </a>
          , and is open-sourced on{" "}
          <a
            href="https://github.com/BernadetteCh/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            Netflify
          </a>{" "}
          <br />{" "}
          <a
            href="https://www.vecteezy.com/free-vector/literature"
            target="_blank"
            rel="noreferrer"
          >
            Literature Vectors by Vecteezy
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
