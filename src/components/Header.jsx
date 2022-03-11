import logo from "../assets/orange-slice.png";
import React from 'react';

export default function Header() {
  return (
    <header className="Header">
      <h1>Zest News</h1>
      <img src={logo} alt="orange logo" className="logo" />
    </header>
  );
}
