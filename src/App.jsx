import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import About from "./components/About";
import Contactus from "./components/Contact";
import Recepies from "./components/Recepies";
import MenucardFull from "./components/MenucardFull";
import Booknow from './components/Booknow';
import Error from "./components/Error";
import Footer from "./components/Footer";
// import LocomotiveScroll from 'locomotive-scroll';

function App() {
  // const locomotiveScroll = new LocomotiveScroll();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <div className="App" >
          <Navbar />
          <Routes >
            <Route path ="/" element ={<Home />} />
            <Route path = "/about" element ={<About />} />
            <Route path = "/contact" element ={<Contactus />} />
            <Route path = "/recepies" element ={<Recepies />} />
            <Route path= '/menu' element={<MenucardFull />} />
            <Route path = "/book" element = {<Booknow />} />
            <Route path = "/*" element = {<Error />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
