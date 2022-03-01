import logo from "./logo.svg"
import "./App.css"
import Header from "./components/layout/Header"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container-content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
