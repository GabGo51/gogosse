import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Cursor from "./Cursor";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Cursor />
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
