import React, { useState } from "react";

import Header from "./header";
import Footer from "./footer";
import Test from "./test";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Test />
      <main>{children}</main>
      <Footer />
    </>
  );
}
