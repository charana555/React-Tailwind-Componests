import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from "./Components/Tabs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tabs" element={<Tabs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
