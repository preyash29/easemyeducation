import OTPInputView from '@twotalltotems/react-native-otp-input'
import React from 'react'
import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import assets from '../../assets'
import { PrimaryButton } from '../../components/Button'
import colors from '../../constants/colors'

function Verification ({ navigation }) {
  const [otp, setOTP] = React.useState()

  const _submit = () => {
    navigation.navigate('chooseCourse')
  }

  return (
    <View style={styles.root}>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
      <ImageBackground
        source={assets.appBG}
        style={styles.rootBg}
        resizeMode='stretch'
      >

        <Image
          source={assets.auth_banner}
          resizeMode='contain'
          style={{ alignSelf: 'center' }}
        />
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subTitle}>please enter verification code sent</Text>
        <OTPInputView
          pinCount={4}
          autoFocusOnLoad
          style={styles.otpView}
          codeInputFieldStyle={styles.underlineStyleBase}
          onCodeChanged={(code) => setOTP(code)}
        />

        <Text style={styles.timerText}>0:30</Text>
        <Text style={styles.linkTitle}>RESEND</Text>

        <View style={{ width: '80%', marginTop: 15 }}>
          <PrimaryButton
            title='Submit'
            onPress={_submit}
          />
        </View>

      </ImageBackground>

    </View>
  )
}

export default Verification

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  underlineStyleBase: {
    width: 60,
    height: 61,
    borderWidth: 0,
    borderRadius: 10,
    fontSize: 22,
    color: colors.primary,
    backgroundColor: 'rgba(248, 244, 252, 0.8)'
  },
  rootBg: {
    flex: 1, paddingTop: StatusBar.currentHeight, padding: 30, justifyContent: 'center', alignItems: 'center'
  },
  title: {
    color: colors.primary, fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 25, marginBottom: 15
  },
  subTitle: {
    color: colors.lightGray, fontSize: 15, textAlign: 'center'
  },
  otpView: {
    height: 60, width: '80%', alignSelf: 'center', marginVertical: 25
  },
  timerText: {
    color: colors.blank, fontSize: 14, textAlign: 'center'
  },
  linkTitle: {
    color: colors.primary,
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginVertical: 20
  }
})
