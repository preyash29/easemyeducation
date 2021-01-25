import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';


export const Header: React.FC<{
  leadingIcon?: any;
  leadingAction?: any;
  title?: String;
}> = ({ leadingIcon, title, leadingAction }) => {

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10
        }}
      >
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={leadingAction}
        >
          <Image
            source={leadingIcon}
            resizeMode='contain'
            style={{ width: 18, height: 18 }}
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 16, fontFamily: '500', color: colors.primary, marginLeft: 10 }}>{title}</Text>

      </View>

    </>
  )
};