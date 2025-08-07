import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row gap-8 text-white/95">
          <li className="font-bold px-1.5 hover:bg-amber-400 w-28 rounded-sm transition">
            <a href="">lorem ipsum</a>
          </li>
          <li className="font-bold px-1.5 hover:bg-amber-400 w-28 rounded-sm transition">
            <a href="">lorem ipsum</a>
          </li>
          <li className="font-bold px-1.5 hover:bg-amber-400 w-28 rounded-sm transition">
            <a href="">lorem ipsum</a>
          </li>
          <li className="font-bold px-1.5 hover:bg-amber-400 w-28 rounded-sm transition">
            <a href="">lorem ipsum</a>
          </li>
          <li className="font-bold px-1.5 hover:bg-amber-400 w-28 rounded-sm transition">
            <a href="">lorem ipsum</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
