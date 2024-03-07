"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, Menu, XIcon } from "lucide-react";
import "./styleMenu.css";

export function ThemeMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleActiveLink = (link: any) => {
    setActiveLink(link);
  };

  return (
    <div className="hidden_nav">
      <Button variant="ghost" size="icon" onClick={toggleMenu}>
        {menuOpen ? (
          <XIcon className="h-[1.5rem] w-[1.3rem] flex items-center justify-end" />
        ) : (
          <Menu className="h-[1.5rem] w-[1.3rem] flex items-center justify-end" />
        )}{" "}
        <span className="sr-only">Toggle menu</span>
      </Button>
      {menuOpen && (
        <div className="toggleMenu">
          <span className="atache"></span>
          <nav className="navToggle">
            <ul>
              <li>
                <a
                  className={`nav-link ${
                    activeLink === "home" ? "active" : ""
                  }`}
                  href="#about"
                  onClick={() => handleActiveLink("home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={`nav-link ${
                    activeLink === "about" ? "active" : ""
                  }`}
                  href="#about"
                  onClick={() => handleActiveLink("about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className={`nav-link ${
                    activeLink === "services" ? "active" : ""
                  }`}
                  href="#service"
                  onClick={() => handleActiveLink("services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className={`nav-link ${
                    activeLink === "portfolio" ? "active" : ""
                  }`}
                  href="#portfolio"
                  onClick={() => handleActiveLink("portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className={`nav-link ${
                    activeLink === "blog" ? "active" : ""
                  }`}
                  href="#blog"
                  onClick={() => handleActiveLink("blog")}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className={`nav-link ${
                    activeLink === "contact" ? "active" : ""
                  }`}
                  href="#contact"
                  onClick={() => handleActiveLink("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
