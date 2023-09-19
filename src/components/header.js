import Navbar from "./navbar";

export default function Header({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
