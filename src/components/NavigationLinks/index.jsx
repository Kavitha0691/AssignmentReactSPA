import React, { useState } from "react";
import styles from "./navigation.module.css";
import { X } from "lucide-react";
import Hamburger from "hamburger-react";
import HamburgerMenu from "./HamburgerMenu";

const Navigation = ({ categories, onCategorySelect, onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);


  const handleLinkClick = (category) => {
    setActiveLink(category);
    onCategorySelect(category);
    setIsOpen(false);
  };


  const handleLinkHover = (category) => {
    setHoveredLink(category);
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav className={styles.navbar}>
      <HamburgerMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />

      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
        <li
          onClick={() => {
            setActiveLink("home");
            onHomeClick();
            setIsOpen(false);
          }}
          className={`${activeLink === "home" ? styles.active : ""} ${hoveredLink === "home" ? styles.hovered : ""}`}
          onMouseEnter={() => handleLinkHover("home")}
          onMouseLeave={handleLinkLeave}
        >
          Home
        </li>

        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleLinkClick(category)}
            className={`${activeLink === category ? styles.active : ""} ${hoveredLink === category ? styles.hovered : ""}`}
            onMouseEnter={() => handleLinkHover(category)}
            onMouseLeave={handleLinkLeave}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

