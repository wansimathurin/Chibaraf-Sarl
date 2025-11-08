"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Search,
  Menu,
  X,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import React, { useState } from "react";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("services"), href: "/services" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    
    <nav className="fixed top-0 left-0 w-full z-50  bg-black/50 backdrop-blur-md border-b border-white/20 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-[10px] pt-10 md:pt-0 md:h-[70px] flex items-center justify-between">
        {/* Logo */}
        <img src="/images/logo-white.png" width="150" alt="logo" className="cursor-pointer" />

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link,i) => (
            <Link
              href={link.href}
              key={link.href}
              className="font-medium relative group cursor-pointer transition-all"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-5">
          <LanguageSwitcher />
          <span>|</span>
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-all duration-300 cursor-pointer">
            <Phone size={18} />
          </div>
          <div className="leading-tight">
            <h3 className="text-primary text-sm font-medium">Call Anytime</h3>
            <h2 className="font-bold text-lg">+(237) 6949-999-99</h2>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center z-50"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col items-center gap-6 py-6 bg-black/90 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-all">
            <Facebook size={18} />
          </div>
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-all">
            <Instagram size={18} />
          </div>
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-all">
            <Linkedin size={18} />
          </div>
        </div>

        <ul className="flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-lg hover:text-primary transition-all cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
            <div className="pt-2">
                <LanguageSwitcher />
              </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
