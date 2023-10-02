import Navbar from "./navbar";

export default function Header({ children }) {
  return (
    <header>
      <Navbar />
      <main>{children}</main>
    </header>
  );
}
