import React from 'react';
import HeaderPage from '../../components/header'; 
import ListChamp from '../../components/ListChamps'; 

const Main: React.FC = () => {
  return (
    <div style={{ flex: 1 }}>
      <HeaderPage />
      <ListChamp />
    </div>
  );
};

export default Main;
