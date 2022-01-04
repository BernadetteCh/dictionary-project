import "./App.css";
import icon from "./books.jpg";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header><img src={icon} alt="icon of books" className="icon"></img>Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer><a href="https://www.vecteezy.com/free-vector/literature">Literature Vectors by Vecteezy</a></footer>
      </div>
    </div>
  );
}

export default App;
