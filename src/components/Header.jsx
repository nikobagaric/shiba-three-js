import React from "react";

function Header() {
  return (
    <header
      className="height-[70px] justify-between flex w-full bg-background items-center
       border-b-2 border-black border-dashed fixed top-0 px-5 z-10"
    >
      <h1 className="text-primary text-[42px]">
        <a href="#">Shiba Inu</a>
      </h1>
      <ul className="flex justify-evenly  text-[32px]">
        <li>
          <a
            className="text-secondary mx-5
            hover:text-primary transition ease-in-out"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-secondary mx-5
            hover:text-primary transition ease-in-out"
            href="#feedback"
          >
            Feedback
          </a>
        </li>
        <li>
          <a
            className="text-secondary mx-5
            hover:text-primary transition ease-in-out"
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
