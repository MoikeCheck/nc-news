import "./App.css";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <nav>
        <Router>
          <ArticleList />
        </Router>
      </nav>
    </div>
  );
}

export default App;
