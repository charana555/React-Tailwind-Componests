import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from "./Components/Tabs";
import Carasole from "./Components/Carasole";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/carasole" element={<Carasole />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
