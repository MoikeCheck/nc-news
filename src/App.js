import "./App.css";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";
import DeleteComment from "./components/DeleteComment";
import User from "./components/User";
import { UserContext } from "./components/Contexts/UserContext";
import React, { useState } from "react";

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "weegembump",
    name: "Gemma Bump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
  });
  return (
    <>
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
              <Route path="/comment/:comment_id" element={<DeleteComment />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
