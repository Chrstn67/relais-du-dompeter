import React, { useState } from "react";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
