import React, { useContext } from 'react';
import { FootContext } from '../../contexts/footbal';
import { CardChamp } from '../CardChamps';
import { styleList } from './style';

const ListChamp = () => {
  const { listChamps } = useContext(FootContext);

  return (
    <div style={styleList.container}>
      <h2 style={styleList.title}>Campeonatos Ativos</h2>
      <div className="card-list">
        {listChamps.map((item, index) => {
          const { name, emblem, code } = item;
          return (
            <CardChamp
              key={index}
              name={name}
              emblem={emblem}
              tag={code}
            />
          );
        })}
      </div>
    </div>
  );
};



export default ListChamp;
