"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaCalendar,
  FaInfo,
  FaMap,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    {
      id: 1,
      link: "Accueil",
      icon: <FaHome />,
    },
    {
      id: 2,
      link: "Réserver",
      icon: <FaCalendar />,
    },
    {
      id: 3,
      link: "Infos pratiques",
      icon: <FaInfo />,
    },
    {
      id: 4,
      link: "Autour de vous",
      icon: <FaMap />,
    },
    {
      id: 5,
      link: "Contact",
      icon: <FaEnvelope />,
    },
  ];

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav
      className="bg-black py-4 px-4 border-b border-gray-700"
      style={{
        backgroundImage: `url("./images/cours-accueil.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "auto 110%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container mx-auto flex justify-around items-center bg-black bg-opacity-60 p-1">
        <h1 className="text-white text-3xl font-bold">Relais du Dompeter</h1>

        <div className="hidden md:flex space-x-4 items-center">
          {links.map((linkItem) => (
            <Link key={linkItem.id} href={`/${linkItem.link}`}>
              <span className="text-white cursor-pointer flex items-center space-x-2">
                {linkItem.icon}
                <span>{linkItem.link}</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="md:hidden ">
          {navOpen ? (
            <FaTimes onClick={toggleNav} className="text-white text-2xl" />
          ) : (
            <FaBars onClick={toggleNav} className="text-white text-2xl" />
          )}
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden flex-col bg-black bg-opacity-40 p-1">
          {links.map((linkItem) => (
            <Link key={linkItem.id} href={`/${linkItem.link}`}>
              <span className="block py-2 px-4 text-white cursor-pointer flex items-center space-x-2">
                {linkItem.icon}
                <span>{linkItem.link}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
