import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Index from "./pages/Index";
import IndexLoaded from "./pages/IndexLoaded";
import Item from "./pages/products/Item";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Footer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/NotFound" element={<NotFound />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Index" element={<Index />} />
            <Route path="/IndexLoaded" element={<IndexLoaded />} />
            <Route path="products/Item" element={<Item />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;


