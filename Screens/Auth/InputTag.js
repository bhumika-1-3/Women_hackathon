import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  icon,
  type,
  keyboardType,
}) => {
  return (
    <View
      style={{
        width: '85%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <MaterialCommunityIcons name={icon} size={24} color="black" />
      <TextInput
        value={value}
        keyboardType={keyboardType ? keyboardType : 'default'}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        selectionColor={'black'}
        placeholder={placeholder}
        secureTextEntry={type ? true : false}
        style={{marginLeft: 10}}
      />
    </View>
  );
};

export default CustomTextInput;