"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Footer = () => {
  const [footerOpen, setFooterOpen] = useState(false);

  const links = [
    {
      id: 6,
      link: "Mentions légales",
    },
    {
      id: 7,
      link: "Conditions générales d'utilisation",
    },
    {
      id: 8,
      link: "À propos",
    },
  ];

  const toggleFooter = () => {
    setFooterOpen(!footerOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setFooterOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="bg-black py-4 px-4 border-t border-gray-700 bottom-0 w-full z-50">
      <div className="container mx-auto flex justify-evenly items-center bg-black bg-opacity-60 p-1">
        <div className="hidden md:flex space-x-4 items-center">
          {links.map((linkItem) => (
            <Link key={linkItem.id} href={`/${linkItem.link}`}>
              <span className="text-white cursor-pointer flex items-center space-x-2">
                {linkItem.link}
              </span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          {footerOpen ? (
            <FaTimes onClick={toggleFooter} className="text-white text-2xl" />
          ) : (
            <FaBars onClick={toggleFooter} className="text-white text-2xl" />
          )}
        </div>
      </div>

      {footerOpen && (
        <div className="md:hidden flex-col bg-black bg-opacity-40 p-1">
          {links.map((linkItem) => (
            <Link key={linkItem.id} href={`/${linkItem.link}`}>
              <span className="block py-2 px-4 text-white cursor-pointer flex items-center space-x-2">
                {linkItem.link}
              </span>
            </Link>
          ))}
        </div>
      )}
    </footer>
  );
};

export default Footer;
