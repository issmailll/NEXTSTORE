import React from "react";
import Brends from "./components/Brendlar bo'yicha/Brends";
import Dokonlarimiz from "./components/Do'konlarimiz/Dokonlarimiz";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import SliderMebel from "./components/SliderMebel/Slider";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Intro />
        <Brends />
        <SliderMebel />
        <Dokonlarimiz />
      </main>
      <Footer />
    </>
  );
}

export default App;
