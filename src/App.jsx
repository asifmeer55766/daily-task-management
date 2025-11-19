import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";
import Settings from "./pages/Settings";
import Upcomming from "./pages/Upcomming";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<NewTask />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/upcoming" element={<Upcomming />} />
          <Route path="/inbox" element={<NotFound />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
