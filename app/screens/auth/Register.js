import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, StatusBar, TextInput } from 'react-native'
import assets from '../../assets'
import { OutlineButton, PrimaryButton } from '../../components/Button'
import { InputText } from '../../components/Input'
import colors from '../../constants/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function Register ({ navigation }) {
  const _submit = () => {
    navigation.navigate('verification')
  }
  return (
    <View style={styles.root}>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
      <ImageBackground
        source={assets.appBG}
        style={styles.rootBg}
        resizeMode='stretch'
      >
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1, padding: 30 }}
        >
          <View style={{ height: 60 }} />
          <Text style={styles.title}>Access</Text>
          <Text style={styles.subTitle}>Unlimited paper and learning resources free</Text>
          <View style={{ height: 40 }} />
          <InputText
            placeholder='Full name'
            icon={assets.user_ic}
          />
          <View style={{ marginBottom: 10 }}>
            <View
              style={styles.input}
            >
              <Image
                source={assets.phone_ic}
                style={styles.phoneIcon}
              />
              <Text style={{ marginHorizontal: 10, color: colors.lightGray }}>+91  |</Text>
              <TextInput
                style={styles.inputText}
                placeholder='Mobile Number'
                placeholderTextColor={colors.lightGray}
                keyboardType='phone-pad'
                returnKeyType='done'
              />
            </View>
            <View style={styles.inputDivider} />
          </View>
          <InputText
            placeholder='Email address'
            icon={assets.main_ic}
          />
          <InputText
            placeholder='City/nearest location'
            icon={assets.location_ic}
          />
          <InputText
            placeholder='School name'
            icon={assets.school_ic}
          />
          <InputText
            placeholder='Date of birth'
            icon={assets.cake_ic}
          />

          <View margin={30}>
            <PrimaryButton
              title='Register'
              onPress={_submit}
            />
            <View style={{ height: 20 }} />
            <OutlineButton
              title='Login using google'
              leading={<Image source={assets.google_ic} style={{ height: 18, resizeMode: 'contain', marginRight: 10 }} />}
            />
          </View>
        </KeyboardAwareScrollView>

      </ImageBackground>

    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rootBg: {
    flex: 1, paddingTop: StatusBar.currentHeight
  },
  title: {
    color: colors.secondary, fontSize: 20, textAlign: 'center'
  },
  subTitle: {
    color: colors.primary, fontSize: 20, fontWeight: 'bold', textAlign: 'center'
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
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
