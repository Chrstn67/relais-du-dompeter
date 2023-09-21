import React, { useState } from "react";

import Header from "./header";
import Accueil from "./accueil";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Accueil />
      <main>{children}</main>
      <Footer />
    </>
  );
}
