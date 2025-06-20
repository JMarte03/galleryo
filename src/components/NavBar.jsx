import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "relative py-2 text-brandRed font-semibold border-b-2 border-brandRed"
      : "relative transition duration-150 ease-linear hover:bg-gray-100 hover:rounded-lg py-2 px-3";

  return (
    <header className="flex justify-between items-center mb-20">
      <NavLink to="/" className="">
        <img src={logo} className="w-28 flex-shrink-0" alt="" />
      </NavLink>
      <div className="dropdown xl:hidden relative">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />{" "}
          </svg>
        </div>
        <ul className="font-openSans menu menu-sm dropdown-content bg-white rounded-lg z-1 mt-3 w-52 p-0 shadow absolute right-0">
          <li>
            <NavLink
              className="hover:bg-brandRed/10 hover:border-l-2 border-brandRed m-0 p-4 rounded-none pl-6 active:bg-white focus:bg-white focus:outline-none focus:ring-0 active:text-brandRed"
              to="/"
            >
              Latest
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-brandRed/10 hover:border-l-2 border-brandRed m-0 p-4 rounded-none pl-6 active:bg-white active:text-brandRed"
              to="/nature"
            >
              Nature
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-brandRed/10 hover:border-l-2 border-brandRed m-0 p-4 rounded-none pl-6 active:bg-white active:text-brandRed"
              to="/architecture"
            >
              Architecture
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-brandRed/10 hover:border-l-2 border-brandRed m-0 p-4 rounded-none pl-6 active:bg-white active:text-brandRed"
              to="/people"
            >
              People
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-brandRed/10 hover:border-l-2 border-brandRed m-0 p-4 rounded-none pl-6 active:bg-white active:text-brandRed"
              to="/places"
            >
              Places
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-brandRed/10 hover:border-l-2 border-brandRed m-0 p-4 rounded-none pl-6 active:bg-white active:text-brandRed"
              to="/illustrations"
            >
              Illustrations
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-brandRed/10 hover:border-l-2 border-brandRed m-0 p-4 rounded-none pl-6 active:bg-white active:text-brandRed"
              to="/animations"
            >
              Animations
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-brandRed/10 hover:border-l-2 border-brandRed m-0 p-4 rounded-none pl-6 active:bg-white active:text-brandRed"
              to="/food"
            >
              Food
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-brandRed/10 hover:border-l-2 border-brandRed m-0 p-4 rounded-none pl-6 active:bg-white active:text-brandRed"
              to="/holidays"
            >
              Holidays
            </NavLink>
          </li>
        </ul>
      </div>
      <nav className="hidden xl:flex gap-x-4 items-center font-openSans text-sm text-gray-600">
        <ul className="flex gap-x-4">
          <li>
            <NavLink className={linkClass} to="/">
              Latest
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/nature">
              Nature
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/architecture">
              Architecture
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/people">
              People
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/places">
              Places
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/illustrations">
              Illustrations
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/animations">
              Animations
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/food">
              Food
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/holidays">
              Holidays
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
