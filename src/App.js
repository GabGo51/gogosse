import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Cursor from "./Cursor";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import EspaceFine from "./components/Projects/EspaceFine/EspaceFine";
import SAP from "./components/Projects/SAP/SAP";
import Lapies from "./components/Projects/Lapies/Lapies";
import Turbine from "./components/Projects/Turbine/Turbine";
import Heritage from "./components/Projects/Heritage/Heritage";
import Horizon from "./components/Projects/Horizon/Horizon";
import PBGG from "./components/Projects/PBGG/PBGG";


function App() {
  const [load, setLoad] = useState(false);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < 100) {
        setCount(count + 1);
      } else {
        setLoad(true);
      }
    }, 25); // 1000ms / 25 = 40 updates per second (2.5 seconds for 100 updates)

    return () => clearTimeout(timer);
  }, [count]);


  return (
    <Router>
      <Cursor />

      {load ? (
        <Container>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/HÉRITAGE BÂTI" element={<Heritage />} />
              <Route path="/ESPACE FINE VOL.2" element={<EspaceFine />} />
              <Route path="/HORIZON 2023" element={<Horizon />} />
              <Route path="/LAPIÈS" element={<Lapies />} />
              <Route path="/SAP 2024" element={<SAP />} />
              <Route path="/PETITS BUDGETS GRANDS GOÛTS" element={<PBGG />} />
              <Route path="/TURBINE 2024" element={<Turbine />} />
              
            </Routes>
          </div>
          <Footer />
        </Container>
      ) : (
        <Container>
          <div className="loading-animation">{count}</div>
        </Container>
      )}
    </Router>
  );
}

//this makes sure that the page is always full screen when content is too small
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .content {
    flex: 1;
    width: 100%;
  }

  .loading-animation {
    position: absolute;
    bottom: 0px;
    right: 50px;
    font-size: clamp(100px, 20vw, 250px);
    font-family: Tagada;
    
  }
`;

export default App;
