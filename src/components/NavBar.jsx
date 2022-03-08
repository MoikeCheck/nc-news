import { getTopics } from "../Api";
import { Link } from "react-router-dom";
import * as api from "../Api";

export default function NavBar() {
  api.getTopics().then((topics) => {
    
  });
  return (
    <div>
      <nav className="NavBar">
        <Link to="/">Home</Link>
        <Link to="/topics/{:topic_slug}">Coding</Link>
        <Link to="/">Football</Link>
        <Link to="/">Cooking</Link>
      </nav>
    </div>
  );
}
