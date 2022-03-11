import { Link } from "react-router-dom";
import * as api from "../Api";
import { useEffect, useState } from "react";
import React from 'react';

export default function NavBar() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    api.getTopics().then((topics) => {
      setTopics(topics);
    });
  });

  return (
    <div>
      <nav className="NavBar">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__item__link" to={"/"}>
              All
            </Link>
          </li>
          {topics.map(({ slug }) => {
            return (
              <li key={slug} className="nav__item">
                <Link className="nav__item__link" to={`/topics/${slug}`}>
                  {slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
