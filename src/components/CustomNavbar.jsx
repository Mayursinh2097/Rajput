"use client";
import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  return (
    <nav className="bg-orange-600 h-14 py-2 px-20 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <Link href={"/"} className="hover:text-blue-200">
            Rajputana
          </Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          <li>
            <Link href={"/about"} className="hover:text-blue-200">
              About Us
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="hover:text-blue-200">
              Contat Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          <li>
            <Link href={"/about"} className="hover:text-blue-200">
              Login
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="hover:text-blue-200">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
