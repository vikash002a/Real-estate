import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import About from "./pages/About"; // ✅ Add This
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import MyProfile from "./pages/MyProfile";
import MyFavorites from "./pages/MyFavorites";
import MyAds from "./pages/MyAds";   
import Payment from "./pages/Payment"; 
import Order from "./pages/Order";
import SafetyTipsPage from "./pages/SafetyTipsPage";
import SettingsPage from "./pages/SettingsPage";   // <-- यही आपका import है
import TestimonialsPage from "./pages/TestimonialsPage";
import UserProfile from "./pages/UserProfile";
import PropertiesDetails from "./pages/PropertyDetails";
import RecentPosts from "./components/RecentPosts";

import BlogDetails from "./components/BlogDetails";
import BlogGrid from "./pages/BlogGrid"; // <-- yaha import karna hoga
import BlogList from "./pages/BlogList"; // path aapke file structure ke hisaab se

function App() {
  return (
    <Router>
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
       

          <Route path="/contact" element={<ContactUs />} />
          {/* ✅ About Page Route */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
  <Route path="/edit-profile" element={<MyProfile />} />
<Route path="/my-profile" element={<MyProfile />} /> 
<Route path="/Payments" element={<Payment />} />
 <Route path="/orders" element={<Order />} />
   <Route path="/my-ads" element={<MyAds />} />   {/* ✔ ROUTE */}
       <Route path="/forgot-password" element={<ForgotPassword />} /> 
       <Route path="/my-favorites" element={<MyFavorites />} />
  <Route path="/safety-tips" element={<SafetyTipsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
           <Route path="/testimonials" element={<TestimonialsPage />} />
    <Route path="/UserProfile" element={<UserProfile />} />
         <Route path="/PropertyDetails/:id" element={<PropertiesDetails />} />

 <Route path="/" element={<RecentPosts />} />
       <Route path="/BlogDetails/:id" element={<BlogDetails />} />

<Route path="/blog-grid" element={<BlogGrid />} />
  <Route path="/blog-list" element={<BlogList />} /> {/* Ye naya route */}
<Route path="/blog-details/:id" element={<BlogDetails />} />

<Route path="/properties/:id" element={<PropertiesDetails />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
