import { CssBaseline } from "@mui/material";
import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import Chat from "./components/Chat/Chat";

const App = () => {
  return (
    <main>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Router>
      </Provider>
    </main>
  );
};

export default App;
