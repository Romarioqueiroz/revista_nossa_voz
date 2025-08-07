import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex flex-row  justify-between p-3 h-[300px] bg-[url('/src/img/night.jpg')] bg-cover bg-center">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
