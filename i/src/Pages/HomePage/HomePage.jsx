import React from "react";
import Brends from "./Brendlar bo'yicha/Brends";
import Dokonlarimiz from "./Do'konlarimiz/Dokonlarimiz";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SliderMebel from "../../Pages/HomePage/SliderMebel/Slider";
import Intro from "./Intro/Intro";

function HomePage() {
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

export default HomePage;
