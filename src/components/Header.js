import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      var navbar = document.getElementById("navbar");
      var sticky = navbar.offsetTop;

      if (window.scrollY >= sticky + navbarRef.current.offsetHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header className="header">
        <Logo />

        <div className="social-icons-container">
          <SocialIcon bgColor="white" url="https://github.com/sharjeelbaig" />
          <SocialIcon url="https://pk.linkedin.com/in/sharjeel-baig-250858222" />
          <SocialIcon url="https://www.facebook.com/sharjeel.baig.58" />
        </div>
      </header>

      <motion.nav
        ref={navbarRef}
        id="navbar"
        className={`nav ${isSticky ? "sticky" : ""}`}
        animate={isSticky ? { opacity: [0,0.8] }:{ opacity: [0.8,1] }}
        transition={{ duration: 1 }}
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {isSticky && <li>Code Linea 💻</li>}

          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
}
