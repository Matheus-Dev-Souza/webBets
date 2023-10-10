import React from 'react';
import HeaderPage from '../../components/header'; 
import ListMatches from '../../components/ListMatch'; 
const MatchesPage: React.FC = () => {
  return (
    <div style={{ flex: 1 }}>
      <HeaderPage />
      <ListMatches />
    </div>
  );
};

export default MatchesPage;
