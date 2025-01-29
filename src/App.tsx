import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import UserList from "./pages/UserList"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/UserList" element={<UserList/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
