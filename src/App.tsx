import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Dashboard from "./pages/Dashboard";
import Repository from "./pages/Repository";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/repository" element={<Repository />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
