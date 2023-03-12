import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import ThankYou from "./components/pages/ThankYou";
import ForTherapists from "./components/pages/ForTherapists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="for-therapists" element={<ForTherapists />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
