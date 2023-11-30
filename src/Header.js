import React from "react";
import "./Header.css";

/*
  TODO: Complete the header
*/

function Header({name="Unknown Name",birthday="Unknown birthday",imageSrc="",}) {
  return (
      <header>
        <img src={imageSrc} alt="Spiral Zany" />
        <h1>{name}</h1>
        <h2>{birthday}</h2>
      </header>
  );
}

export default Header;
