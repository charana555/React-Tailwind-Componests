import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from "./Components/Tabs";
import Carasole from "./Components/Carasole";
import MultipleImage from "./Components/MultipleImage";
import AudioPlayer from "./Components/AudioPlayer";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/carasole" element={<Carasole />} />
        <Route path="/multiple" element={<MultipleImage />} />
        <Route path="/audio" element={<AudioPlayer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
