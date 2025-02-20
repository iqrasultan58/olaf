import React, { useState, useEffect } from "react";
import "./Header.css"; // Import CSS file

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-container") && !event.target.closest(".search-btn")) {
        setShowSearch(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="landing-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="https://staging.salic.com/storage/media/640/SALIC-Hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

      {/* Transparent Header
       width:-webkit-fill-available */}
      <header className={`header ${showSearch ? "header-white" : ""}`}>
        <div className="logo">LOGO</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="header-right">
          <button className="search-btn" onClick={() => setShowSearch(!showSearch)}>🔍</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>

      {/* Search Bar (Appears Below Header) */}
      
        <div className={`search-container ${showSearch ? "show" : ""}`}>
        <input type="text" placeholder="Search here..." className="search-input" />
        <button className="close-btn" onClick={() => setShowSearch(false)}>✖</button>
      </div>
      
      {/* Overlay Content */}
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing experiences with our platform, where creativity meets innovation.</p>
      </div>
    </div>
  );
};

export default Header;

