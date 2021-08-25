import React from "react";
import SearchBar from "../../organism/SearchBar/SearchBar";
import "./Styles.scss";

const NavBtns = ["Men", "Women", "Kids", "Home&Living", "Offers"];

interface IHeaderProps {
  setSearch: (v: string) => void;
}

function Header({ setSearch }: IHeaderProps) {
  return (
    <div className="header-wrapper">
      <div className="left-section">
        <div className="logo">LOGO</div>
        <div className="navs">
          {NavBtns.map((nav) => (
            <div key={nav} className="nav-item">
              {nav}
            </div>
          ))}
        </div>
      </div>
      <div className="right-section">
        <SearchBar onSubmit={setSearch} />
      </div>
    </div>
  );
}

export default React.memo(Header);
