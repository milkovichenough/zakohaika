import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <body className="home-page">
      <div className="wrap-body">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </body>
  );
}

export default App;
