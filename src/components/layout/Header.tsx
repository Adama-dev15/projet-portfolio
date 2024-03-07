"use client";

import { SiteConfig } from "@/lib/site-config";
import Link from "next/link";
import { Typography } from "@/components/ui/Typography";
import { ThemeMenu } from "@/components/theme/ToggleMenu";
import { useEffect } from "react";
import { ThemeToggle } from "../theme/ThemeToggle";
import "./Header.css";

export function Header() {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link ");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((l) => {
          l.classList.remove("active");
        });
        link.classList.add("active");
      });
    });
  }, []);

  return (
    <header className="header">
      <div className="container  ">
        <div className="container_header">
          <nav
            className="hidden  md:flex flex items-center justify-between"
            id="menu"
          >
            <Typography
              variant="large"
              className="nav-link active mr-10"
              as={Link}
              href="#about"
            >
              Home
            </Typography>
            <Typography
              variant="large"
              as={Link}
              href="#about"
              className="nav-link  mr-10"
            >
              About
            </Typography>
            <Typography
              variant="large"
              as={Link}
              href="#service"
              className="nav-link mr-10"
            >
              Services
            </Typography>
          </nav>
          <Typography
            variant="h3"
            className="name-user h-8 w-8"
            as={Link}
            href="/"
          >
            {SiteConfig.title}
          </Typography>
          <nav className="hidden  md:flex " id="menu">
            <Typography
              variant="large"
              as={Link}
              href="#portfolio"
              className="nav-link ml-10"
            >
              Portfolio
            </Typography>
            <Typography
              variant="large"
              as={Link}
              href="#blog"
              className="nav-link ml-10"
            >
              Blog
            </Typography>
            <Typography
              variant="large"
              as={Link}
              href="#contact"
              className="nav-link ml-10"
            >
              Contact
            </Typography>
          </nav>
          <div className="floatToggle">
            <ThemeMenu></ThemeMenu>
            {/* <ThemeToggle /> */}
          </div>
        </div>
        <div className="lumiere">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
