import Navbar from "./Navbar/navbar";
import Bandeau from "./Bandeau/Bandeau";

import "./header.scss";

export default function Header({ children }) {
  return (
    <header>
      <Navbar />
      <Bandeau />
      <main>{children}</main>
    </header>
  );
}
