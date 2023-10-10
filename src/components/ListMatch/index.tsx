import React, { useContext } from 'react';
import { FootContext } from '../../contexts/footbal';
import { styleList } from '../ListChamps/style';
import { CardMatch } from '../CardMatch';
import { StyleMatchList } from './style';
import { CustomButton } from '../Button';

export const ListMatches = () => {
  const { listChampsFinded, decreaseNumber, increaseNumber } = useContext(FootContext);
  const { nameChamp, tagChamp } = useContext(FootContext);

  return (
    <div style={styleList.container}>
      <div style={StyleMatchList.container}>
        <div style={styleList.title}>{nameChamp}</div>
        {listChampsFinded.map((item, index) => {
          if (item && item.homeTeam && item.awayTeam) {
            return (
              <CardMatch
                key={index}
                homeTeamName={item.homeTeam.shortName}
                homeTeamCrest={item.homeTeam.crest}
                homeTeamTla={item.homeTeam.tla}
                awayTeamName={item.awayTeam.shortName}
                awayTeamCrest={item.awayTeam.crest}
                awayTeamTla={item.awayTeam.tla}
                idMatch={item.id}
                ScoreAway={item.score?.fullTime?.away}
                ScoreHome={item.score?.fullTime?.home}
                idTeamHome={item.homeTeam.id}
                idTeamAway={item.awayTeam.id}
              />
            );
          }
          return null;
        })}
      </div>
      <div style={StyleMatchList.buttons}>
        <CustomButton title='<' onPress={() => decreaseNumber(tagChamp)} />
        <CustomButton title='>' onPress={() => increaseNumber(tagChamp)} />
      </div>
    </div>
  );
};

