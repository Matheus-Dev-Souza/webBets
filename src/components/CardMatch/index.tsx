import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styleMatch } from './style';
import { useNavigation } from '@react-navigation/native';
import { FootContext } from '../../contexts/footbal';

export const CardMatch = (props: any) => {
  const { homeTeamName, homeTeamCrest, homeTeamTla, awayTeamName, awayTeamCrest, awayTeamTla, idMatch, ScoreHome, ScoreAway, idTeamHome, idTeamAway } = props;
  const navigation = useNavigation();

  const { requestMatchData, requestInfoTeamAway, requestInfoTeamHome } = useContext(FootContext);
  
  const handleCardPress = () => {

    navigation.navigate('InfoMatch');
    requestMatchData(idMatch);
    requestInfoTeamHome(idTeamHome);
    requestInfoTeamAway(idTeamAway);
    
  };

  return (
    <TouchableOpacity onPress={() => handleCardPress()}>
      <View style={styleMatch.container}>
        <View style={styleMatch.li}>
          <Image source={{ uri: homeTeamCrest }} style={{ width: 50, height: 50 }} />
          <Text>{homeTeamName}</Text>
          <Text>{homeTeamTla}</Text>
          <Text style={styleMatch.textScore}>{ScoreHome}</Text>
        </View>
        <Text style={styleMatch.textX}>X</Text>
        <View style={styleMatch.li}>
          <Image source={{ uri: awayTeamCrest }} style={{ width: 50, height: 50 }} />
          <Text>{awayTeamName}</Text>
          <Text>{awayTeamTla}</Text>
          <Text style={styleMatch.textScore}>{ScoreAway}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};