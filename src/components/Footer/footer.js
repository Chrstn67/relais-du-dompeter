"use client";

import React from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Mon Logo</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <Link href="/conditions-generales-d-utilisation">
                Conditions générales d'utilisation
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
            <li>
              <Link href="/about">À propos</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Relais du Dompeter. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
