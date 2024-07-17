import React, { useState } from "react";
import Container from "../container/Container";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Navbar = () => {
  const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);
  const [isHelpDropdownVisible, setHelpDropdownVisible] = useState(false);

  const toggleAccountDropdown = () => {
    setAccountDropdownVisible(!isAccountDropdownVisible);
    if (isHelpDropdownVisible) {
      setHelpDropdownVisible(false);
    }
  };

  const toggleHelpDropdown = () => {
    setHelpDropdownVisible(!isHelpDropdownVisible);
    if (isAccountDropdownVisible) {
      setAccountDropdownVisible(false);
    }
  };

  const closeDropdowns = () => {
    setAccountDropdownVisible(false);
    setHelpDropdownVisible(false);
  };

  return (
    <div className="bg-slate-700 text-white py-10 font-Roboto">
      <Container>
        <Desktop
          isAccountDropdownVisible={isAccountDropdownVisible}
          isHelpDropdownVisible={isHelpDropdownVisible}
          toggleAccountDropdown={toggleAccountDropdown}
          toggleHelpDropdown={toggleHelpDropdown}
          closeDropdowns={closeDropdowns}
        />
        <Mobile
          isAccountDropdownVisible={isAccountDropdownVisible}
          isHelpDropdownVisible={isHelpDropdownVisible}
          toggleAccountDropdown={toggleAccountDropdown}
          toggleHelpDropdown={toggleHelpDropdown}
          closeDropdowns={closeDropdowns}
        />
      </Container>
    </div>
  );
};

export default Navbar;
