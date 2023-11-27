import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route , useLocation} from "react-router-dom";

import Home from "./components/Home/Home";
import Cursor from "./Cursor";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import Header from "./components/Home/Header";
import OtherHeader from "./components/OtherHeader";

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
      {!isHomePage && <OtherHeader/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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
