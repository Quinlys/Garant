import './App.css';
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Footer from './components/Footer/Footer'
import MainPage from "./components/MainPage/MainPage";
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
