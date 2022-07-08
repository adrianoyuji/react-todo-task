import React from "react";
import "./style.scss";

interface Props {
  variant?: "primary" | "secondary" | "ghost";
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button = ({
  variant = "primary",
  label,
  onClick,
  type = "button",
  disabled = false,
}: Props) => {
  const buttonStyling = `btn btn--${variant} ${
    disabled ? "btn--disabled" : ""
  }`;

  return (
    <button
      className={buttonStyling}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default React.memo(Button);
