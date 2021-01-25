import React from 'react'
import { Dimensions, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import assets from '../../assets'
import { PrimaryButton } from '../../components/Button'

const { height } = Dimensions.get('window')

function ParentIntroVideo ({ navigation }) {
  const _submit = () => {
    navigation.navigate('home')
  }

  return (
    <View style={styles.root}>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
      <ImageBackground
        source={assets.appBG}
        style={styles.rootBg}
        resizeMode='stretch'
      >
        <View style={styles.parentImgGroup}>
          <SafeAreaView />
          <Image
            source={assets.parent_ic}
            resizeMode='contain'
            style={styles.parentImg}
          />
        </View>

        <View style={styles.videoView}>
          <Image
            source={assets.play_ic}
            resizeMode='contain'
          />
        </View>

        <View style={{ width: '80%', marginTop: 50 }}>
          <PrimaryButton
            title='Next'
            onPress={_submit}
          />
        </View>

      </ImageBackground>

    </View>
  )
}

export default ParentIntroVideo

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rootBg: {
    flex: 1, paddingTop: StatusBar.currentHeight, justifyContent: 'center', alignItems: 'center'
  },
  parentImgGroup: {
    position: 'absolute',
    top: -40,
    left: 10
  },
  parentImg: {
    resizeMode: 'contain',
    width: 80
  },
  videoView: {
    backgroundColor: 'rgba(0, 0, 0, 0.47)',
    width: '100%',
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
