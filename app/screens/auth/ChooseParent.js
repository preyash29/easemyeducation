import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, StatusBar, TextInput } from 'react-native'
import assets from '../../assets'
import { OutlineButton, PrimaryButton } from '../../components/Button'
import colors from '../../constants/colors'

function ChooseParent ({ navigation }) {
  const _submitAnw = (type) => {
    if (type === 'Yes') {
      return navigation.navigate('parentIntroVideo')
    }
    navigation.navigate('parentIntroVideo')
  }

  return (
    <View style={styles.root}>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
      <ImageBackground
        source={assets.appBG}
        style={styles.rootBg}
        resizeMode='stretch'
      >

        <View style={{ flex: 1.1 / 2 }}>
          <Image
            source={assets.parent_ic}
            resizeMode='contain'
          />
          <Text style={styles.title}>Are you a parent?</Text>
        </View>

        <View style={styles.buttonGroup}>
          <PrimaryButton
            title='Yes'
            onPress={() => _submitAnw('Yes')}
          />
          <View style={{ height: 20 }} />
          <OutlineButton
            title='No'
            onPress={() => _submitAnw('No')}
          />
        </View>

      </ImageBackground>

    </View>
  )
}

export default ChooseParent

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rootBg: {
    flex: 1, paddingTop: StatusBar.currentHeight, padding: 30, justifyContent: 'center', alignItems: 'center'
  },
  title: {
    color: colors.primary, fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 10
  },
  buttonGroup: {
    width: '85%'
  }
})
