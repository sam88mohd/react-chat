import { CssBaseline } from "@mui/material";
import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
