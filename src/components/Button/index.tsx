import React from 'react';
import { styleButton } from './style';

type CustomButtonProps = {
  title: string;
  onClick: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, onClick }) => {
  return (
    <button style={styleButton.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
