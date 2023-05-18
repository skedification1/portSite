import React from 'react';

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__logo">
            {/* <img width="38" src="" alt="Pizza logo" /> */}
            <span>Github logo</span>
          </div>

          <nav className="header__navbar">
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">projects</a>
            <a href="#">skills</a>
            <a href="#">contacts</a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
