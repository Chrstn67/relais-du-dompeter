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
          <Link href="/accueil">
            <span className="text-white cursor-pointer flex items-center space-x-2">
              <FaHome />
              <span>Accueil</span>
            </span>
          </Link>
          <Link href="/les-logements">
            <span className="text-white cursor-pointer flex items-center space-x-2">
              <FaCalendar />
              <span>Logements</span>
            </span>
          </Link>
          <Link href="/infos-pratiques">
            <span className="text-white cursor-pointer flex items-center space-x-2">
              <FaInfo />
              <span>Infos pratiques</span>
            </span>
          </Link>
          <Link href="/autour-de-vous">
            <span className="text-white cursor-pointer flex items-center space-x-2">
              <FaMap />
              <span>Autour de vous</span>
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-white cursor-pointer flex items-center space-x-2">
              <FaEnvelope />
              <span>Contact</span>
            </span>
          </Link>
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
          <Link href="/accueil">
            <span className="block py-2 px-4 text-white cursor-pointer flex items-center space-x-2">
              <FaHome />
              <span>Accueil</span>
            </span>
          </Link>
          <Link href="/les-logements">
            <span className="block py-2 px-4 text-white cursor-pointer flex items-center space-x-2">
              <FaCalendar />
              <span>Logements</span>
            </span>
          </Link>
          <Link href="/infos-pratiques">
            <span className="block py-2 px-4 text-white cursor-pointer flex items-center space-x-2">
              <FaInfo />
              <span>Infos pratiques</span>
            </span>
          </Link>
          <Link href="/autour-de-vous">
            <span className="block py-2 px-4 text-white cursor-pointer flex items-center space-x-2">
              <FaMap />
              <span>Autour de vous</span>
            </span>
          </Link>
          <Link href="/contact">
            <span className="block py-2 px-4 text-white cursor-pointer flex items-center space-x-2">
              <FaEnvelope />
              <span>Contact</span>
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
