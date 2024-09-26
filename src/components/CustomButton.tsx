import {styled} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

interface CustomButtonProps {
  color: "primary" | "secondary";
  variant: "contained" | "outlined";
  size?: "small" | "medium" | "large";
  name?: string;
  onClick: (_event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type?: "submit" | "button";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color,
  variant,
  size = "small",
  name,
  onClick,
  children,
  type = "button",
}) => {
  return (
    <ButtonStyled
      color={color}
      variant={variant}
      size={size}
      name={name}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled(Button)({
  padding: "11px 15px",
  fontSize: 12,
  lineHeight: "14px",
  borderRadius: 30,
});

export default CustomButton;