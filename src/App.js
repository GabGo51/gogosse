import React, { useState } from "react";
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
import gif from './introgif.gif'

function App() {
  const [load, setLoad] = useState(false);

  setTimeout(() => {
    setLoad(true);
  }, 2500);
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
              <Route path="/HÉRITAGE" element={<Heritage />} />
              <Route path="/ESPACE FINE VOL.2" element={<EspaceFine />} />
              <Route path="/HORIZON 2023" element={<Horizon />} />
              <Route path="/LAPIÈS" element={<Lapies />} />
              <Route path="/SAP 2024" element={<SAP />} />
              <Route path="/PBGG" element={<Contact />} />
              <Route path="/TURBINE" element={<Turbine />} />
              <Route path="/FESTIVAL DE JAZZ" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </Container>
      ) : (
        <Container>
          <img alt="intro" className="intro-gif" src={gif} />
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

  .intro-gif {
    width: 100%;
    object-fit: cover;
    position: fixed;
  bottom: 0;
  left: 0;
    max-height:100vh;
  }
`;

export default App;
