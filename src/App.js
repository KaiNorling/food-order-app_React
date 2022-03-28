
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
// import CryptoDetails from "./pages/CryptoDetails"
// import Cryptocurrencies from "./pages/Cryptocurrencies"
// import Exchanges from "./pages/Exchanges"
function App() {
  return (
    <div className="App">
         <Navbar />
      <Routes>
  
       <Route path="/" element={<Home />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       {/* <Route path="/crypto/:coinId" element={<CryptoDetails />} />
       <Route path="/cryptocurrencies" element={<Cryptocurrencies />} /> */}

       {/* <Route path="/exchanges" element={<Exchanges />} />   */}
     </Routes>
     <Footer />
     
    </div>
  );
}

export default App;
