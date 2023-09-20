"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Footer = () => {
  const [footer, setFoot] = useState(false);

  const links = [
    {
      id: 1,
      link: "mentions légales",
    },
    {
      id: 2,
      link: "conditions générales d'utilisation",
    },
    {
      id: 3,
      link: "à propos",
    },
    {
      id: 4,
      link: "réseaux",
    },
  ];

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setFoot(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sticky bottom-0 w-full bg-gray-900 text-white">
      <div className="flex justify-between items-center p-3">
        <div>
          <p className="ml-2">Copyright © 2023 - Tous droits réservés</p>
        </div>

        <ul className="hidden md:flex justify-center items-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setFoot(!footer)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {footer ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {footer && (
        <ul className="flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 text-gray-500 text-1xl">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setFoot(!footer)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Footer;
