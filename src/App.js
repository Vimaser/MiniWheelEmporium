import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { 
  Home, 
  ProductListing,
  ProductDetail,
  Login,
  Logout,
  Register,
  Header,
} from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlisting" element={<ProductListing />} />
          <Route path="/product/:docId" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
