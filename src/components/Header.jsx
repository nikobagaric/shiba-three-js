import React from "react";

function Header() {
  return (
    <header
      className="height-[70px] justify-between flex bg-background items-center"
    >
      <h1 className="text-primary text-[42px]">Shiba Inu</h1>
      <ul className="flex justify-evenly w-80">
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
            hover:text-primary hover:ease-in-out"
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
      <div />
    </header>
  );
}

export default Header;
