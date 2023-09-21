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

  return <div></div>;
};

export default Footer;
