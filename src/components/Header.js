//import React from 'react'
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "DarkSlateGray" : "green"}
        text={showAdd ? "Close" : "Add"}
        whenClicked={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Todo App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
