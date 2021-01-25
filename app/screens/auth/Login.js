import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, StatusBar, TextInput } from 'react-native'
import assets from '../../assets'
import { OutlineButton, PrimaryButton } from '../../components/Button'
import colors from '../../constants/colors'
import env from '../../constants/env'

function Login ({ navigation }) {
  const [phone, setPhone] = React.useState()

  const _submit = () => {
    navigation.navigate('verification')
  }

  const _loginWithGoogle = () => {
    navigation.navigate('register')
  }

  return (
    <View style={styles.root}>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
      <ImageBackground
        source={assets.appBG}
        style={styles.rootBg}
        resizeMode='stretch'>
        <Image
          source={assets.auth_banner}
          resizeMode='contain'
          style={{ alignSelf: 'center' }}/>

        <Text style={styles.title}>Login</Text>

        <View style={{ width: '100%' }}>
          <View
            style={styles.input}
          >
            <Image
              source={assets.phone_ic}
              style={styles.phoneIcon}/>
            <Text style={{ marginHorizontal: 10, color: colors.lightGray }}>+91  |</Text>
            <TextInput
              style={styles.inputText}
              placeholder='Mobile Number'
              placeholderTextColor={colors.lightGray}
              value={phone}
              keyboardType='phone-pad'
              returnKeyType='done'
              onChangeText={(text) => setPhone(text)}/>
          </View>
          <View style={styles.inputDivider} />
        </View>
        <Text style={styles.inputSupportText}>we will send you an OTP to verify</Text>
        <View style={{ width: '80%', marginTop: 50 }}>
          <PrimaryButton
            title='Next'
            onPress={_submit}
          />
          <View style={{ height: 20 }} />
          <OutlineButton
            title='Login using google'
            onPress={_loginWithGoogle}
            leading={<Image source={assets.google_ic} style={{ height: 18, resizeMode: 'contain', marginRight: 10 }} />}/>
        </View>
      </ImageBackground>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rootBg: {
    flex: 1, paddingTop: StatusBar.currentHeight, padding: 30, justifyContent: 'center', alignItems: 'center'
  },
  title: {
    color: colors.primary, fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 25
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  inputSupportText: {
    color: colors.lightGray, fontSize: 15, alignSelf: 'flex-start', marginTop: 10,fontFamily:env.fontSemiBold
  },
  phoneIcon: {
    resizeMode: 'contain', width: 14, height: 14
  },
  inputText: {
    flex: 1, color: colors.lightGray
  },
  inputDivider: {
    height: 1, backgroundColor: 'rgba(77, 27, 121, 0.35)'
  }
})