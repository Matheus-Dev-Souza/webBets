import React from 'react';
import { FaFontAwesomeIcon, Icon } from 'react-icons/fa';
import { stylesMenu } from './style';

export const MenuItem = ({ title, iconName, onPress }) => {
  const menuItemStyle = {
    ...stylesMenu.menuItem, 
    cursor: 'pointer', 
  };

  return (
    <div style={menuItemStyle} onClick={onPress}>
      <Icon name={iconName} size={20} color="black" />
      <span style={stylesMenu.menuItemText}>{title}</span>
    </div>
  );
};
