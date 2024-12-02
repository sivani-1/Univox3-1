import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";
import Train from "./components/Train";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train" element={<Train />} />
        <Route path="/test" element={<Test />} />
        {/* Add other routes like Train, Test, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
