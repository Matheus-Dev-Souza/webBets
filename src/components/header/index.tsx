import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../../assets/logoNewBetWhite.png';
import { styleHeader } from './style';
import { MenuItem } from '../MenuItens';

export const HeaderPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const switchMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemPress = (data) => {
  };

  return (
    <div style={styleHeader.container}>
      <button style={styleHeader.menuButton} onClick={switchMenu}>
        {isMenuOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
      </button>
      <img src={Logo} alt="Logo" style={styleHeader.logo} />
      {isMenuOpen && (
        <div>
          <MenuItem title="Partidas" iconName="user" onPress={() => handleMenuItemPress('Matches')} />
        </div>
      )}
    </div>
  );
};
