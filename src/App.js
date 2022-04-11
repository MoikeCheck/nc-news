import "./App.css";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";
import User from "./components/User";
import { UserContext } from "./components/UserContext";
import React, { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "weegembump",
    name: "Gemma Bump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
  });
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/topics/:slug" element={<ArticleList />} />
            <Route path="/article/:article_id" element={<SingleArticle />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
