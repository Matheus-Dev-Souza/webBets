import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { iButtonEditableProps } from './type';
import { styleButtom } from '../Button/style';


export const ButtonEdit: React.FC<iButtonEditableProps> = ({ title, onPress, style }) => {
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <Text style={styleButtom.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };