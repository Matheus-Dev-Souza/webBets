import React from 'react'
import { View, Text } from 'react-native'
import { styleCardPlayer } from './style';

export const CardPlayer = (props: any) => {

    const { name, position } = props;

  return (
    <View style={styleCardPlayer.container}>
        <Text style={styleCardPlayer.title}>{name}</Text>
        <Text style={styleCardPlayer.subTitle}>{position}</Text>
    </View>
  )
}
