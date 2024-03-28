import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-400 shadow-md p-3">
      <div className="flex justify-between items-center max-w-6xl m-auto">
        <h1 className="font-bold text:sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Najiib</span>
          <span className="text-slate-700">Esatate</span>
        </h1>
        <form className=" bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="search..."
            className="bg-transparent focus:outline-none w-0 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
          </Link>
          <Link to="/profile">
            <li className="hidden sm:inline text-slate-700 hover:underline">Porofile</li>
          </Link>
          <Link to="/sign-in">
            <li className="hidden sm:inline text-slate-700 hover:underline">Sign-in</li>
          </Link>
          <Link to="/sign-up">
            <li className="hidden sm:inline text-slate-700 hover:underline">Sign-up</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
