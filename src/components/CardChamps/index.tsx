import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stylesLi } from './style';
import { FootContext } from '../../contexts/footbal';

export const CardChamp = (props: any) => {
  const { name, emblem, tag } = props;
  const navigation = useNavigation();

  const { requestDataChamp, number, setNameChamp, setTagChamp } = useContext(FootContext);

  const handleCardPress = () => {

    navigation.navigate('Matches');
    requestDataChamp(tag, number);
    setNameChamp(name)
    setTagChamp(tag)

  };

  return (
    <TouchableOpacity onPress={() => handleCardPress()}>
      <View style={stylesLi.container}>
        <Image style={stylesLi.img} source={{ uri: emblem }} />
        <Text style={stylesLi.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};