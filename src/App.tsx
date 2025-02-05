import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import UserList from "./pages/UserList"
import Navbar from "./components/Navbar"
import OfferList from "./pages/OfferList"
import OfferForm from "./pages/OfferForm"
import OfferDetail from "./pages/OfferDetail"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/userList" element={<UserList/>}/>
        <Route path="/offers" element={<OfferList/>}/>
        <Route path="/offers/:id" element={<OfferDetail/>}/>
        <Route path="/offers/new" element={<OfferForm/>}/>
        <Route path="/offers/edit/:id" element={<OfferForm/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
