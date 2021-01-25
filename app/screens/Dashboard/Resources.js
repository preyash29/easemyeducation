
import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import assets from '../../assets'
import Avatar from '../../components/Avatar'
import { PrimaryButton } from '../../components/Button'
import { InputText } from '../../components/Input'
import colors from '../../constants/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header } from '../../components/Header'
import SearchBar from "react-native-dynamic-search-bar";
import env from '../../constants/env'
import { ScrollView } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('window')

function Resources({ navigation }) {
  const _submit = () => {
    navigation.navigate('AllSubject')
  }
  return (
    <View style={styles.root}>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
      <ImageBackground
        source={assets.appBG2}
        style={{ flex: 1, paddingTop: StatusBar.currentHeight }}
        resizeMode='stretch'
      >

        <Header
          leadingIcon={assets.menu_ic}
          title='Resources'
          leadingAction={() => navigation.toggleDrawer()}
        />



        <View style={{ marginTop: '4%' }}>
          <View>
            <Image source={assets.study} style={{ resizeMode: 'contain' }} />
          </View>


        </View>

        <View style={{ paddingHorizontal: 50 }}>
          <Text style={{ fontFamily: env.fontSemiBold }}>Download Prelim paper & their solution</Text>

        </View>

        <View style={{ backgroundColor: '#FCEEFE', width: '100%', marginTop: '10%', paddingVertical: 10 }}>

          <View style={{ marginHorizontal: 20, flexDirection: 'row', paddingVertical: 10 }}>
            <View>
              <Image source={assets.testpaper_ic} style={{ resizeMode: 'contain' }} />
            </View>
            <View style={{ marginHorizontal: 20 }}>
              <Text style={{ fontFamily: env.fontSemiBold, color: '#67299B', fontSize: 14 }}>Board</Text>
              <Text style={{ fontFamily: env.fontSemiBold, fontSize: 14, paddingVertical: 2 }}>ICSE-ISC</Text>

            </View>

          </View>
        </View>

        <View style={{ backgroundColor: '#FCEEFE', width: '100%', marginTop: '3%', paddingVertical: 10 }}>

          <View style={{ marginHorizontal: 20, flexDirection: 'row', paddingVertical: 10 }}>
            <View>
              <Image source={assets.book_ic} style={{ resizeMode: 'contain' }} />
            </View>
            <View style={{ marginHorizontal: 20 }}>
              <Text style={{ fontFamily: env.fontSemiBold, color: '#67299B', fontSize: 14 }}>Solution</Text>
              <Text style={{ fontFamily: env.fontSemiBold, fontSize: 14, }}>Textbook</Text>

            </View>

          </View>
        </View>
        <View style={{ backgroundColor: '#FCEEFE', width: '100%', marginTop: '3%', paddingVertical: 10 }}>

          <View style={{ marginHorizontal: 20, flexDirection: 'row', paddingVertical: 10 }}>
            <View>
              <Image source={assets.download_ic} style={{ resizeMode: 'contain' }} />
            </View>
            <View style={{ marginHorizontal: 20 }}>
              <Text style={{ fontFamily: env.fontSemiBold, color: '#67299B', fontSize: 14 }}>Upload</Text>
              <Text style={{ fontFamily: env.fontSemiBold, fontSize: 14, marginHorizontal: 10, paddingVertical: 5 }}>Your school question paper</Text>

            </View>

          </View>
        </View>
      </ImageBackground>

    </View>
  )
}

export default Resources

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  
})
