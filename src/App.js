// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TributorE from "./components/Tributor E/TributorE";
import Contact from "./components/Contact/Contact";

// import Header from "./components/Header/Header"; 
import Footer from "./components/Footer/Footer";
import Career from "./components/Career/Career";

import Main from "./components/Main/Main";
import About from "./components/About/About";
import TributorCM from "./components/Tributor CM/TributorCM";
import Prekets from "./components/Prekets/Prekets";
import Careersub from "./components/Careersub/Careersub";
import Terms from "./components/Terms/Terms";
import Privacy from "./components/Privacy/Privacy";
import Cookie from "./components/Cookie/Cookie";
import ContactForm from "./components/ContactForm/ContactForm";
import PageNotFound from "./components/PageNotFound/PageNotFound";


// import Nav from "./components/Nav/Nav";
// import { Container, Nav, Navbar, Row, Col, NavDropdown } from 'react-bootstrap';

// import { DropDownMenu } from './components/DropDownMenu';
// import { DropDownSubMenu } from './components/DropDownSubMenu'; 
// import PopupGfg from "./components/Popup/Popup";



function App() {
  return (
    <div className="App">
    
      <Router>
       

        <Routes>
          <Route path="/" exact element={<Main/>} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Main />} />
          <Route path="/tributorE" element={<TributorE />} />
          <Route path="/tributorCM" element={<TributorCM />} />
          <Route path="/prekets" element={<Prekets />} />
          <Route path="/career" element={<Career />} />
          <Route path="/jobroles" element={<Careersub />} />
          <Route path="/terms" element={<Terms/>}/>  
          <Route path="/privacy" element={<Privacy/>}/>  
          <Route path="/cookie" element={<Cookie/>}/>   
          <Route path="*" exact element={<PageNotFound/>} />
         
        </Routes>

        <Footer />  
      </Router>

    </div>
  );
}

export default App;
