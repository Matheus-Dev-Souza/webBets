import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { styleInputBet } from './style';

interface CardInputBetProps {
  betHomeTeam: string;
  betAwayTeam: string;
  handleBetChange: (data: { betHomeTeam: string; betAwayTeam: string }) => void;
}

export const CardInputBet = ({ betHomeTeam, betAwayTeam, handleBetChange }: CardInputBetProps) => {
  const handleHomeTeamChange = (data: string) => {
    handleBetChange({ betHomeTeam: data, betAwayTeam });
  };

  const handleAwayTeamChange = (data: string) => {
    handleBetChange({ betHomeTeam, betAwayTeam: data });
  };

  return (
    <View style={styleInputBet.divInputs}>
      <TextInput
        style={styleInputBet.input}
        value={betHomeTeam}
        placeholder="Ex: 2"
        keyboardType="numeric"
        onChangeText={handleHomeTeamChange}
      />
      <Text style={styleInputBet.text}>X</Text>
      <TextInput
        style={styleInputBet.input}
        value={betAwayTeam}
        placeholder="Ex: 3"
        keyboardType="numeric"
        onChangeText={handleAwayTeamChange}
      />
    </View>
  );
}