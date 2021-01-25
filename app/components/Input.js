import React from 'react'
import { View, TextInput, Image } from 'react-native'
import assets from '../assets'
import colors from '../constants/colors'
import env from '../constants/env'
import DropDownPicker from 'react-native-dropdown-picker'

export function InputField ({ value, onChangeText, icon, placeholder, ...other }) {
  return (
    <View style={{
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: 45
    }}
    >
      {
        icon && (
          <Image
            source={icon}
            style={{ width: 16, height: 16, resizeMode: 'contain', marginRight: 10 }}
          />
        )
      }

      <TextInput
        placeholder={placeholder}
        style={{ color: colors.black, flex: 1, fontFamily: env.fontMedium }}
        placeholderTextColor='#999999'
        value={value}
        onChangeText={onChangeText}
        {...other}
      />
    </View>
  )
}

export function TextArea ({ value, onChangeText, placeholder, ...other }) {
  return (
    <TextInput
      placeholder={placeholder}
      style={{
        color: colors.black,
        fontFamily: env.fontRegular,
        height: 150,
        borderWidth: 1,
        borderColor: '#828282',
        borderRadius: 6,
        padding: 15,
        textAlignVertical: 'top'
      }}
      multiline
      numberOfLines={6}
      placeholderTextColor='#999999'
      value={value}
      onChangeText={onChangeText}
      {...other}
    />
  )
}
export function DropDownInput ({ items, defaultValue, onChangeItem, placeholder, customStyle }) {
  return (
    <DropDownPicker
      items={items}
      containerStyle={{ height: 45 }}
      style={[{
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',

      }, customStyle]}
      placeholder={placeholder}
      placeholderStyle={{
        color: 'black',
        fontFamily: env.fontMedium
      }}
      itemStyle={{
        justifyContent: 'flex-start'
      }}
      labelStyle={{
        color: colors.lightBlack,
        fontFamily: env.fontMedium,
        
      }}
      defaultValue={defaultValue}
      onChangeItem={onChangeItem}
      customArrowDown={() => <Image source={assets.arrow_down_ic} style={{ width: 16, height: 16, resizeMode: 'contain' }} />}
      customArrowUp={() => <Image source={assets.arrow_up} style={{ width: 16, height: 16, resizeMode: 'contain' }} />}
    />
  )
}
export function DropDownInputForAddress ({ items, defaultValue, onChangeItem, placeholder, customStyle }) {
  return (
    <DropDownPicker
      items={items}
      containerStyle={{ height: 45 }}
      style={[{
        borderWidth: 0,
        borderBottomWidth: 1
      }, customStyle]}
      placeholder={placeholder}
      placeholderStyle={{
        color: 'rgba(27, 27, 36, 0.3)',
        fontFamily: env.fontMedium
      }}
      itemStyle={{
        justifyContent: 'flex-start'
      }}
      labelStyle={{
        color: colors.lightBlack,
        fontFamily: env.fontMedium
      }}
      defaultValue={defaultValue}
      onChangeItem={onChangeItem}
      customArrowDown={() => <Image source={assets.left_arrow_ic} style={{ width: 16, height: 16, resizeMode: 'contain' }} />}
      customArrowUp={() => <Image source={assets.arrow_down_ic} style={{ width: 16, height: 16, resizeMode: 'contain' }} />}
      />
  )
}


export function SearchInput ({ value, onChangeText, placeholder, ...other }) {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      paddingHorizontal: 15,
      borderRadius: 10,
      minHeight: 45
    }}
    >
      <Image
        source={assets.searchIcon}
        style={{ width: 16, height: 16, resizeMode: 'contain' }}
      />
      <View style={{ width: 2, backgroundColor: colors.red, height: '50%', marginHorizontal: 10 }} />
      <TextInput
        placeholder={placeholder}
        style={{ color: colors.black, flex: 1, fontFamily: env.fontMedium }}
        placeholderTextColor='#999999'
        value={value}
        onChangeText={onChangeText}
        {...other}
      />
    </View>
  )
}
