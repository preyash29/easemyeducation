
import React, { useState, useCallback, useEffect } from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions,TouchableOpacity } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'
import { PrimaryButton,RadioButton } from '../../components/Button'
import env from '../../constants/env'
import {GiftedChat, Actions, Bubble,Send } from 'react-native-gifted-chat';
const { width } = Dimensions.get('window')

function LiveChat ({ navigation }) {
  const [messages, setMessages] = React.useState([]);
  function renderBubble(props) {
    return (
        <Bubble
            {...props}
            wrapperStyle={{
                left: {
                    backgroundColor: '#e5e5e5',
                },
                right: {
                    backgroundColor: '#FEF9FF',
                    borderTopRightRadius: 2,
                },

            }}
            textStyle={{
                right: {
                    color: 'black',
                    fontSize: 14
                },
                left: {
                    color: 'black',
                    fontSize: 14
                }
            }}
        />
    );
}
function renderSend(props) {
  return (
    <Send {...props}>
      <View style={{flexDirection:'row',marginLeft:'20%',justifyContent:'space-around',top:'-8%'}}>
      <View>
        <Image source={assets.Fill_ic} style={{resizeMode:'contain'}}></Image>
      </View>
      <View style={{marginTop:5}}>
        <Image source={assets.Icon_ic} style={{resizeMode:'contain'}}></Image>
      </View>
      </View>
    </Send>
  );
}
useEffect(() => {
  setMessages([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        
        // avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ])
}, [])
const onSend = useCallback((messages = []) => {
  setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
}, [])
  const _submit = () => {
    navigation.navigate('Resources')
  }
  return (
    <View style={styles.root}>
<StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
     <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column',}}>
        <Header
          leadingIcon={assets.back_ic}
          title='Live Support'  
          leadingAction={() => navigation.goBack()}/>
        <View style={{ marginHorizontal:58,top:'-20%'
          }}>
        <Text style={{fontSize: 16, fontFamily: '500', color: colors.primary}}>Class 9th maths-Introduction</Text>
        </View>
        </View>
        <View style={{ width: 30 }} />
        <View style={{alignSelf:'center'}}>
        <Image source={assets.liveuser_ic}></Image>
        </View>
        </View>
         <View style={styles.devider} />
         <View style={{flexDirection:'row',marginTop:'2%'}}>
         <View style={{marginHorizontal:10}}>    
         </View>
     </View>
     <View style={{ flex: 1 }}>
     <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      renderSend={renderSend}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}/>
</View>
</View>
  )
}
export default LiveChat
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop:'4%'
  },
  devider: {
    backgroundColor: '#FEFEFE',
    height: 5,
    marginVertical: 10
},
})
