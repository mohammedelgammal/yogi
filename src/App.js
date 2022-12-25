// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import { Home } from "./Views";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<h2>pricing</h2>} />
        <Route path="/about-us" element={<h2>about-us</h2>} />
        <Route path="/contact" element={<h2>contact</h2>} />
        <Route path="/login" element={<h2>login</h2>} />
        <Route path="/signup" element={<h2>signup</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
