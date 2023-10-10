import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Main } from './pages/Main';
import { MatchesPage } from './pages/MatchesPage';
import { InfoMatch } from './pages/InfoMatch';
import { FootProvider } from './contexts/Football';
import { Button } from './components/Button';
import { ButtonEditable } from './components/ButtonEditable';
import { CardChamps } from './components/CardChamps';
import { CardInputBet } from './components/CardInputBet';
import { CardMatch } from './components/CardMatch';
import { CardPlayer } from './components/CardPlayer';
import { FormBet } from './components/FormBet';
import { ListChamps } from './components/ListChamps';
import { ListMatch } from './components/ListMatch';
import { MenuItems } from './components/MenuItems';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <FootProvider>
        <Switch>
          <Route path="/MatchesPage" component={MatchesPage} />
          <Route path="/info-con" component={InfoMatch} />
          <Route path="/Main" component={Main} />
        </Switch>
      </FootProvider>
      <ToastContainer />
    </Router>
  );
}

export default App;
