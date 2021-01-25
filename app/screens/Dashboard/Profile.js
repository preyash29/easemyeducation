import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import assets from '../../assets'
import Avatar from '../../components/Avatar'
import { PrimaryButton } from '../../components/Button'
import { InputText } from '../../components/Input'
import colors from '../../constants/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header } from '../../components/Header'

function Profile ({ navigation }) {
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
          title='Profile'
          leadingAction={() => navigation.toggleDrawer()}
        />

        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={{ height: 30 }} />
          <View style={{ alignItems: 'center' }}>
            <Avatar
              size={70}
              source={{ uri: 'https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg' }}
            />
            <Image source={assets.avatar_dec} style={{ resizeMode: 'contain', width: 80, marginTop: -10 }} />
          </View>
          <View style={{ height: 20 }} />
          <Text style={styles.username}>Madhavi gupta</Text>
          <Text style={styles.classTitle}>CBSE - 9th class</Text>
          <View style={{ height: 20 }} />

          <View style={styles.devider} />
          <View style={{ height: 20 }} />
          <View style={{ paddingHorizontal: 20,marginBottom:50 }}>
            <Text style={styles.title}>Account Details</Text>
            <View style={{ height: 15 }} />

            <View style={[styles.row, { justifyContent: 'space-between' }]}>
              <View style={styles.row}>
                <Image source={assets.student_ic} style={styles.infoIcon} />
                <Text style={styles.infoTitle}>+91 12345-67890</Text>
              </View>
              <Image source={assets.edit_ic} style={styles.editIcon} />
            </View>
            <View style={{ height: 10 }} />
            <View style={[styles.row, { justifyContent: 'space-between' }]}>
              <View style={styles.row}>
                <Image source={assets.parents_ic} style={styles.infoIcon} />
                <Text style={styles.infoTitle}>+91 12345-67890</Text>
              </View>
              <Image source={assets.edit_ic} style={styles.editIcon} />
            </View>
            <View style={{ height: 20 }} />

            <Text style={styles.title}>Profile Details</Text>
            <View style={{ height: 10 }} />
            <InputText
              placeholder='School name'
              icon={assets.school_ic}
            />
            <InputText
              placeholder='Email address'
              icon={assets.main_ic}
            />
            <InputText
              placeholder='City/nearest location'
              icon={assets.location_ic}
            />
            <InputText
              placeholder='Date of birth'
              icon={assets.cake_ic}
            />
            <View style={{ height: 30 }} />
            <PrimaryButton
              title='Submit'
            />
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  title: {
    color: colors.blank, fontSize: 16, fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row', alignItems: 'center'
  },
  infoIcon: {
    resizeMode: 'contain', width: 24, height: 24
  },
  infoTitle: {
    color: colors.blank, fontSize: 14, marginLeft: 15
  },
  editIcon: {
    resizeMode: 'contain', width: 18, height: 18
  },
  devider: {
    height: 3, backgroundColor: 'rgba(198, 198, 198, 0.1)'
  },
  username: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  classTitle: {
    color: colors.blank,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5
  }
})
