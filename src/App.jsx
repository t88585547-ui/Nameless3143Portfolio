
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarBackground from "./components/StarryNightBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PortFolio from "./pages/PortFolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen text-white">
        <StarBackground />

        <div className="relative z-10">

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<PortFolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
