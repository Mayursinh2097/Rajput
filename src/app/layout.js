import CustomNavbar from "../components/CustomNavbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";

import "../css/style.css";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "52 Gol Rajput Samaj",
  description: "Generated by Mayursinh Rajput",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomNavbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
