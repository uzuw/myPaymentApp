import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Payment from "./pages/Payment";
import PaymentHistory from "./services/PaymentHistory";
import Services from './pages/Services'
import PaymetnHistory from "./services/PaymentHistory";
import Login from "./services/Login";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/history" element={<PaymentHistory />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
