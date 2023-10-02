import "./globals.scss";
import { Inter } from "next/font/google";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Relais du Dompeter",
  description: "Réservations et locations d'appartements à Avolsheim, Alsace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
