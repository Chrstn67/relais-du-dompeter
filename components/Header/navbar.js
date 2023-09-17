import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="flex justify-between items-center py-6 px-10 container mx-auto">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
            Relais du Dompeter
          </h1>
        </div>

        <div>
          <div className="hover:cursor-pointer sm:hidden">
            <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
            <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
            <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
          </div>
          <div className="flex items-center">
            <ul className="sm:flex space-x-4 hidden items-center">
              <li>
                <Link legacyBehavior href="/">
                  <a className="text-gray-700 hover:text-indigo-600 text-md">
                    Accueil
                  </a>
                </Link>
              </li>

              <li>
                <Link legacyBehavior href="/services">
                  <a className="text-gray-700 hover:text-indigo-600 text-md">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/products">
                  <a className="text-gray-700 hover:text-indigo-600 text-md">
                    Products
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                  <a className="text-gray-700 hover:text-indigo-600 text-md">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>

            <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
              <h1 className="text-gray-600 py-2 hover:cursor-pointer hover:text-indigo-600">
                Se connecter
              </h1>
              <h1 className="py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">
                S'inscrire
              </h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
