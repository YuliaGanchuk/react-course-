// import logo from './logo.svg';
// import './App.scss';
import React from "react";
import {Header} from "./components/Header";
import {MainContent} from "./components/MainContent";
import {Footer} from "./components/Footer";
import './styles/App.scss';

function App() {
  const reviewerName = "Yullia Hanchuk";
  const numberOfListOptions = 10;
  return (
    <div className="App">
      <Header name = {reviewerName}/>
      <MainContent value = {numberOfListOptions}/>
      <Footer name = {reviewerName}/>
    </div>

  );
}

export default App;
