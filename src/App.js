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

function App() {
  return (
    <Router>
      <Cursor />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ESPACE FINE" element={<EspaceFine />} />
          <Route path="/HORIZON" element={<Contact />} />
          <Route path="/LAPIÈS" element={<Lapies />} />
          <Route path="/SAP 2024" element={<SAP />} />
          <Route path="/PBGG" element={<Contact />} />
          <Route path="/TURBINE" element={<Turbine />} />
          <Route path="/FESTIVAL DE JAZZ" element={<Contact />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
`;

export default App;
