import Navbar from "./Navbar/navbar";

import "./header.scss";

export default function Header({ children }) {
  return (
    <header>
      <Navbar />
      <main>{children}</main>
    </header>
  );
}
