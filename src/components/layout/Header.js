import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="container-header">
      <h2 className="header-title">Todo App By Huu Canh</h2>
      <nav
        style={{
          borderBottom: "solid 4px #fff",
          paddingBottom: "2rem",
        }}
      >
        <Link to="/" className="item-nav">
          Home
        </Link>{" "}
        <span style={{ color: "#fff" }}>|</span>{" "}
        <Link to="/blog" className="item-nav">
          Blog
        </Link>{" "}
        <span style={{ color: "#fff" }}>|</span>{" "}
        <Link to="/day" className="item-nav">
          Day information
        </Link>
      </nav>
    </header>
  )
}

export default Header
