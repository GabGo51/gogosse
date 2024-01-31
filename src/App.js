import React from "react";
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

function App() {
  return (
    <Router>
      <Cursor />
      <Container>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/HERITAGE" element={<Heritage />} />
            <Route path="/ESPACE FINE" element={<EspaceFine />} />
            <Route path="/HORIZON" element={<Horizon />} />
            <Route path="/LAPIÈS" element={<Lapies />} />
            <Route path="/SAP 2024" element={<SAP />} />
            <Route path="/PBGG" element={<Contact />} />
            <Route path="/TURBINE" element={<Turbine />} />
            <Route path="/FESTIVAL DE JAZZ" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Container>
    </Router>
  );
}


//this makes sure that the page is always full screen when content is too small 
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .content {
    flex: 1;
  }
`;

export default App;
