import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions,TouchableOpacity } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'
import env from '../../constants/env'
import { PrimaryButton } from '../../components/Button'

const { width } = Dimensions.get('window')

const data = [
  { title: 'Mathematics' }, { title: 'Physics' }, { title: 'Chemistry' }, { title: 'Biology' }, { title: 'Social Science' }, { title: 'English' }
]

function AllSubject ({ navigation }) {
    const _submit = () => {
        navigation.navigate('SelectSubject')
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
          leadingIcon={assets.back_ic}
          title='All subject'
          leadingAction={() => navigation.goBack()}
        />
       
       <View>
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-evenly', }}>
              <View>
                <Image source={assets.resources_ic}
                  style={{ resizeMode: 'contain', alignSelf: 'center' }}
                ></Image>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={{ color: '#000000', fontSize: 14, alignItems: 'center', fontFamily: env.fontBold }}>Methematics</Text>
                </View>
              </View>


              <View>
                <TouchableOpacity>
                  <View>
                    <Image source={assets.chats_ic}
                      style={{ resizeMode: 'contain', alignSelf: 'center' }}
                    ></Image>
                  </View>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: '#000000', fontSize: 14, alignItems: 'center', fontFamily: env.fontBold }}>Physics</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Download')}>
                  <View >
                    <Image source={assets.paperdownload_ic}
                      style={{ resizeMode: 'contain', alignSelf: 'center' }}
                    ></Image>
                  </View>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: '#000000', fontSize: 14, alignItems: 'center', fontFamily: env.fontBold }}>Chemistry</Text>
                  </View>
                </TouchableOpacity>
              </View>


            </View>

            <View>
              <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-evenly' }}>
                <View>
                  <View>
                    <Image source={assets.presentation_ic}
                      style={{ resizeMode: 'contain', alignSelf: 'center' }}
                    ></Image>
                  </View>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: '#000000', fontSize: 14, alignItems: 'center', fontFamily: env.fontBold }}>Biology</Text>
                  </View>
                </View>


                <View>
                  <View>
                    <Image source={assets.helps_ic}
                      style={{ resizeMode: 'contain', alignSelf: 'center' }}
                    ></Image>
                  </View>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: '#000000', fontSize: 14, alignItems: 'center', fontFamily: env.fontBold }}>Social Science</Text>
                  </View>
                </View>



                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('UploadPaper')}>
                    <View >
                      <Image source={assets.upload_ic}
                        style={{ resizeMode: 'contain', alignSelf: 'center' }}
                      ></Image>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                      <Text style={{ color: '#000000', fontSize: 14, alignItems: 'center', fontFamily: env.fontBold }}>English</Text>
                    </View>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
            </View>
            <View style={{ height: 30 }} />
            <PrimaryButton
              title='Submit'
              onPress={_submit}
            />

      </ImageBackground>
    </View>
  )
}

export default AllSubject

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
