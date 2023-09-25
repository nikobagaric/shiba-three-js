import React from "react";

function Header() {
  return (
    <header
      className="height-[70px] flex-row flex
            justify-around bg-background items-center
             top-0"
    >
      <h1 className="text-primary text-[42px] w-[30px]">Shiba Inu</h1>
      <ul className="flex">
        <li>
          <a
            className="text-secondary
            hover:text-primary ease-in-out"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-secondary
            hover:text-primary ease-in-out"
            href="#feedback"
          >
            Feedback
          </a>
        </li>
        <li>
          <a
            className="text-secondary
            hover:text-primary ease-in-out"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
