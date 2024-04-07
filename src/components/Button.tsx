import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  colour: string;
}

const Button = ({ children, onClick, colour }: Props) => {
  return (
    <button onClick={onClick} type="button" className={"btn btn-" + colour}>
      {children}
    </button>
  );
};

export default Button;
