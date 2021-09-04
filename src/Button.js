import styled from "styled-components";

const colors = {
  default: {
    background: "hsla(0, 0%, 88%, 1)",
    hover: "hsla(0, 0%, 68%, 1)",
    hoverLighter: "hsla(0, 0%, 68%, 0.1)",
    color: "#3F3F3F",
  },
  primary: {
    background: "hsla(224, 100%, 58%, 1)",
    hover: "hsla(223, 100%, 40%, 1)",
    hoverLighter: "hsla(224, 100%, 58%, 0.1)",
    color: "#FFFFFF",
  },
  secondary: {
    background: "hsla(199, 18%, 33%, 1)",
    hover: "hsla(198, 35%, 17%, 1)",
    hoverLighter: "hsla(198, 35%, 17%, 0.1)",
    color: "#FFFFFF",
  },
  danger: {
    background: "hsla(0, 65%, 51%, 1)",
    hover: "hsla(357, 100%, 30%, 1)",
    hoverLighter: "hsla(357, 100%, 30%, 0.1)",
    color: "#FFFFFF",
  },
};

const variants = {
  outline: {
    border: "1px solid ",
    background: "transparent",
  },
  text: {
    border: "transparent",
    background: "transparent",
  },
};

const sizes = {
  sm: {
    padding: ".7rem 1.5rem",
  },
  md: {
    padding: "1rem 2rem",
  },
  lg: {
    padding: "1.5rem 2.5rem",
  },
};

const Button = (props) => {
  return (
    <CustomButton {...props}>
      {props.startIcon && (
        <span className="material-icons" style={{ marginRight: "1rem" }}>
          {props.startIcon}
        </span>
      )}
      {props.children}
      {props.endIcon && (
        <span className="material-icons" style={{ marginLeft: "1rem" }}>
          {props.endIcon}
        </span>
      )}
    </CustomButton>
  );
};

const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: ${(props) => sizes[props.size].padding};

  font-size: inherit;
  font-family: inherit;
  border-radius: 0.5rem;

  color: ${(props) =>
    props.variant ? colors[props.color].background : colors[props.color].color};

  background: ${(props) =>
    props.variant
      ? variants[props.variant].background
      : colors[props.color].background};

  border: ${(props) =>
    props.variant ? variants[props.variant].border : "transparent"};

  &:hover,
  &:focus {
    background: ${(props) =>
      props.variant
        ? colors[props.color].hoverLighter
        : colors[props.color].hover};
  }

  &:disabled {
    cursor: auto;
    background: ${(props) =>
      props.variant === "text" ? "transparent" : colors.default.background};
    color: ${() => "hsla(0, 0%, 62%, 1)"};
  }
`;

CustomButton.defaultProps = {
  color: "default",
  size: "md",
};

export default Button;
