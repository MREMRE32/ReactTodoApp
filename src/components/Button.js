import PropTypes from "prop-types";

const Button = ({ color, text, whenClicked }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="button"
      onClick={whenClicked}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  // Defaults for props
  color: "black",
  text: "Button",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  whenClicked: PropTypes.func,
};

export default Button;
