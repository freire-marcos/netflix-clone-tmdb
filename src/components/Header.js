import React from "react";
import "./Header.css";

export default function Header({black}) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
            alt="netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
            alt="usuario"
          />
        </a>
      </div>
    </header>
  );
}
