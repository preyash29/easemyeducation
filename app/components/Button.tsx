import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import assets from '../assets'
import colors from '../constants/colors'

export const OutlineButton: React.FC<{
  onPress: Function;
  title: String;
  containerStyle?: Object;
  leading?: any;
}> = ({ onPress, title, containerStyle, leading }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        height: 45,
        borderWidth: 1,
        borderColor: '#ACB1C0',
        borderRadius: 30
      }, containerStyle]}
    >
      {leading}
      <Text style={{ fontSize: 16, color: colors.primary }}>{title}</Text>
    </TouchableOpacity>
  )
};


export const PrimaryButton: React.FC<{
  onPress: Function;
  title: String;
  containerStyle?: Object;
}> = ({ onPress, title, containerStyle }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <ImageBackground
        source={assets.btnBG}
        style={[{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          height: 45
        }, containerStyle]}
        imageStyle={{ borderRadius: 30 }}
      >
        <Text style={{ fontSize: 16, color: colors.white,fontWeight:'bold' }}>{title}</Text>
      </ImageBackground>

    </TouchableOpacity>
  )
};

export const RadioButton: React.FC<{
  onPress: Function;
  selected?: Boolean;
  size?: Number;
  title?: String;
}> = ({ onPress, selected, size, title }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: 'row', alignItems: 'center' }}
    >
      <View
        style={{
          height: 20,
          width: 20,
          borderWidth: 3,
          borderColor: 'rgba(112, 112, 112, 0.2)',
          borderRadius: 10,
          backgroundColor: selected ? colors.primary : 'transparent'
        }}
      />
      {
        title && (
          <Text style={{ fontSize: 14, color: '#010101', marginLeft: 10 }}>{title}</Text>
        )
      }
    </TouchableOpacity>
  )
};

export const SelectionButton: React.FC<{
  onPress: Function;
  selected?: Boolean;
  title?: String;
  containerStyle?: Object;
}> = ({ onPress, selected, title, containerStyle }) => {

  return (
    <TouchableOpacity
      style={[{
        backgroundColor: '#FBF9FD',
        height: 34,
        paddingHorizontal: 20,
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: selected ? colors.primary : '#FBF9FD',
        elevation: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        }
      }, containerStyle]}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16, color: selected ? colors.primary : colors.blank }}>{title}</Text>
    </TouchableOpacity>
  )
};