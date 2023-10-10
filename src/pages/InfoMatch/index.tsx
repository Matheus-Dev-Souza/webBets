import React, { useContext } from 'react';
import { styleInfoMatch } from './style';
import { FootContext } from '../../contexts/footbal';
import { FormBet } from '../../components/FormBet';

// Importe as funções necessárias do 'date-fns' para formatar a data
import { format, isValid } from 'date-fns';

const InfoMatchPage = () => {
  const { matchFinded, teamHomeFinded, teamAwayFinded } = useContext(FootContext);
  const date = matchFinded?.utcDate;
  const newDate = new Date(date ?? '');
  const dateFormatted = isValid(newDate) ? format(newDate, 'dd-MM-yyyy') : 'Data inválida';

  return (
    <div style={styleInfoMatch.scrollViewContent}>
      <div style={styleInfoMatch.divCont}>
        <div>
          <p style={styleInfoMatch.infosText}>Informações da Partida</p>
          <p style={styleInfoMatch.infosText}>Data: {dateFormatted}</p>
          <p style={styleInfoMatch.infosText}>Status: {matchFinded?.status}</p>
        </div>
        <div style={styleInfoMatch.container}>
          <div style={styleInfoMatch.li}>
            <img src={matchFinded?.homeTeam.crest} alt="Home Team Crest" style={{ width: 50, height: 50 }} />
            <p>{matchFinded?.homeTeam.shortName}</p>
            <p>{matchFinded?.homeTeam.tla}</p>
            <p style={styleInfoMatch.textScore}>{matchFinded?.score.fullTime.home}</p>
          </div>
          <p style={styleInfoMatch.textX}>X</p>
          <div style={styleInfoMatch.li}>
            <img src={matchFinded?.awayTeam.crest} alt="Away Team Crest" style={{ width: 50, height: 50 }} />
            <p>{matchFinded?.awayTeam.shortName}</p>
            <p>{matchFinded?.awayTeam.tla}</p>
            <p style={styleInfoMatch.textScore}>{matchFinded?.score.fullTime.away}</p>
          </div>
        </div>
        <div style={styleInfoMatch.infoMatch}>
          <p style={styleInfoMatch.infosText}>Home Team</p>
          <div style={styleInfoMatch.infoTeam}>
            <img src={matchFinded?.homeTeam.crest} alt="Home Team Crest" style={{ width: 50, height: 50 }} />
            <div style={styleInfoMatch.infoText}>
              <p style={styleInfoMatch.nameTeam}>{matchFinded?.homeTeam.shortName}</p>
              <p>{matchFinded?.homeTeam.tla}</p>
              <p>Técnico: {teamHomeFinded?.coach.firstName} {teamHomeFinded?.coach.lastName}</p>
            </div>
          </div>
          <p style={styleInfoMatch.infosText}>Away Team</p>
          <div style={styleInfoMatch.infoTeam}>
            <img src={matchFinded?.awayTeam.crest} alt="Away Team Crest" style={{ width: 50, height: 50 }} />
            <div style={styleInfoMatch.infoText}>
              <p style={styleInfoMatch.nameTeam}>{matchFinded?.awayTeam.shortName}</p>
              <p>{matchFinded?.awayTeam.tla}</p>
              <p>Técnico: {teamAwayFinded?.coach.firstName} {teamAwayFinded?.coach.lastName}</p>
            </div>
          </div>
        </div>
        {/* Adicione a condição para renderizar o componente FormBet */}
        {matchFinded?.status !== 'FINISHED' ? <FormBet /> : null}
      </div>
    </div>
  );
};

export default InfoMatchPage;
