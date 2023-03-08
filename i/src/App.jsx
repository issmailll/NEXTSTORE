import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Kirish/Auth/Auth";
import Login from "./Pages/Kirish/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
