"use client";

import Link from "next/link";
import Image from "next/image";
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
                Conditions générales d&#39;utilisation
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Relais du Dompeter. <br /> Tous
          droits réservés.
        </p>
        <Image
          className="logo"
          src="/Logo.jpg"
          alt="Logo développeur"
          width={10}
          height={10}
        />
      </div>
    </footer>
  );
};

export default Footer;
