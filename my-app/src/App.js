// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header name = "Yullia Hanchuk"/>
      <MainContent value = "10"/>
      <Footer name = "Yullia Hanchuk"/>
    </div>

  );
}

export default App;
