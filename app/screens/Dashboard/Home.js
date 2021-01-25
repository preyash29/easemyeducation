
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
import BitSwiper from 'react-native-bit-swiper';
import { ScrollView } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('window')

function Home({ navigation }) {
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
          title='Good Morning'
          leadingAction={() => navigation.toggleDrawer()}
        />

        <View style={{ alignSelf: 'flex-end', right: '10%', top: '-7%' }}>
          <Image source={assets.group_ic}></Image>
        </View>
        <ScrollView>
          <View style={{ marginTop: '8%' }}>
            <SearchBar style={{ height: 42, width: '70%', borderWidth: 1, borderRadius: 50, borderColor: 'gray' }}
              fontColor="#fdfdfd"
              shadowColor="#282828"
              placeholder="Search"
              fontFamily="BurbankBigCondensed-Black"
              clearIconComponent={true}
              searchIconComponent={false}
            />
          </View>

          <View style={{ right: '5%', marginTop: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <View>
                <Text style={{ color: '#67299B' }}>View all</Text>
              </View>
              <Image source={assets.arrow_right} style={{ marginTop: 5, resizeMode: 'contain', width: 12, height: 12, paddingRight: 50 }} />
            </View>
          </View>


          <View>
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-evenly', }}>
              <View>
                <Image source={assets.resources_ic}
                  style={{ resizeMode: 'contain', alignSelf: 'center' }}
                ></Image>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={{ color: '#000000', fontSize: 14, alignItems: 'center', fontFamily: env.fontBold }}>Methematics</Text>
                </View>
              </View>


              <View>
                <TouchableOpacity onPress={_submit}>
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

          <View style={[styles.row, { justifyContent: 'space-between', marginTop: '10%' }]}>
            <View style={{ marginHorizontal: 40 }}>
              <Text style={{ fontSize: 18, color: '#F97117', fontFamily: env.fontBold, }}>
                Live <Text style={{ color: '#67299B' }}>Lectures</Text>
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{ paddingHorizontal: 5, flexDirection: 'row' }}
              >
                <Text style={{ fontSize: 14, color: '#3C3C3C', fontFamily: env.fontSemiBold, }}>View All</Text>

                <Image source={assets.arrow_right} style={{ marginTop: 5, resizeMode: 'contain', width: 12, height: 12, left: '10%', paddingRight: 50 }} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.swiper}>
            <BitSwiper
              items={['Item 1', 'Item 2', 'Item 3']}
              onItemRender={(item, index) => (
                <View style={{ flexDirection: 'row' }}>
                  <View key={index} style={{ height: [200][index], }}>
                    <Image
                      source={assets.slide_ic}
                      style={{ width: width * 55 / 100, borderRadius: 30, marginTop: 20 }}
                    />

                  </View>
                  <View>
                    <View style={{ marginTop: 15, }}>
                      <Text style={{ fontFamily: env.fontSemiBold, color: '#FF9B2A', fontSize: 14 }}>
                        Ongoing </Text></View>

                    <View style={{ marginTop: 4 }}>
                      <Text style={{ fontFamily: env.fontSemiBold, color: '#67299B', fontSize: 18 }}>
                        Maths tricks {'\n'}and tips </Text></View>


                    <View style={{}}>
                      <Text style={{ fontFamily: env.fontSemiBold, color: '#FF9B2A', fontSize: 9 }}>
                        CBSE class 9th math class</Text></View>

                    <View style={{}}>
                      <Text style={{ fontFamily: env.fontSemiBold, fontSize: 10, color: colors.blank, }}>
                        Starting at </Text></View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontFamily: env.fontSemiBold, fontSize: 12, color: colors.blank, }}>
                        12:00pm - 3:00pm</Text>
                      <Image source={assets.arrow_right} style={{ marginTop: 5, resizeMode: 'contain', width: 12, height: 12, left: '10%', paddingRight: 50 }} />

                    </View>
                  </View>
                </View>

              )}
            />
          </View>
          <View style={{ marginTop: '10%', marginHorizontal: 40 }}>
            <Text style={{ fontSize: 18, color: '#FF9B2A', fontFamily: env.fontBold, }}>Recently <Text style={{ color: '#67299B', fontFamily: env.fontBold, }}>Learned</Text></Text>
          </View>

          <View style={{ height: 30 }} />
            <PrimaryButton
              title='Submit'
              onPress={_submit}
            />
        </ScrollView>




        <View style={{ height: height * 10 / 100, borderTopEndRadius: 10, borderTopLeftRadius: 10 }}>
          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around' }}>
            <View style={{ flexDirection: 'column', marginTop: '4%' }}>
              <TouchableOpacity onPress={() => navigation.navigate('HomeDetail')}>

                <View style={{}}>
                  <Text style={{ color: '#67299B' }}>Home</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <TouchableOpacity onPress={() => navigation.navigate('LiveClass')}>
                <View style={{ alignSelf: 'center' }}>
                  <Image source={assets.live} style={{ resizeMode: 'contain' }}></Image>
                </View>

              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigation')}>

                <View style={{ marginTop: 15 }}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('AllSubject')}>
                  <Text style={{ color: '#67299B' }}>Chat</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        
      </ImageBackground>

    </View>
  )
}

export default Home

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
  },


  widgetTitle: {
    fontSize: 16,
    fontFamily: env.fontSemiBold,
    color: colors.black,
    marginHorizontal: 15
  },
  commanText: {
    fontSize: 14,
    color: '#343434',
    textAlign: 'center',
    fontFamily: env.fontRegular
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  swiper: {
    marginTop: '5%', backgroundColor: 'white', width: '90%', alignSelf: 'center', borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  }
})
