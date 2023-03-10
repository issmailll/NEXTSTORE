import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Kirish/Auth/Auth";
import Login from "./Pages/Kirish/Login/Login";
import Search from "./Pages/Search/Search";
import BarchaToifalar from "./Pages/BarchaToifalar/BarchaToifalar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/barchaToifalar" element={<BarchaToifalar/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
