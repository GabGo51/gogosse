import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Cursor from "./Cursor";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import Header from "./components/Home/Header";
import OtherHeader from "./components/OtherHeader";
import EspaceFine from "./components/Projects/EspaceFine/EspaceFine";
import SAP from "./components/Projects/SAP/SAP";

function App() {
  return (
    <Router>
      <InnerApp />
    </Router>
  );
}

function InnerApp() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Cursor />
      <Container>
        {!isHomePage && <OtherHeader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Espace Fine" element={<EspaceFine />} />
          <Route path="/Horizon" element={<Contact/>} />
          <Route path="/Lapies" element={<Contact />} />
          <Route path="/SAP" element={<SAP/>} />
          <Route path="/Petit Budget Grand Gout" element={<Contact />} />
          <Route path="/Turbine" element={<Contact />} />
          <Route path="/Festival de Jazz" element={<Contact />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
`;

export default App;
