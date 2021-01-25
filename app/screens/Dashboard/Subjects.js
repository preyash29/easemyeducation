import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'

const { width } = Dimensions.get('window')

const data = [
  { title: 'Mathematics' }, { title: 'Physics' }, { title: 'Chemistry' }, { title: 'Biology' }, { title: 'Social Science' }, { title: 'English' }
]

function LiveClass ({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: width / 3,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15
        }}
      >
        <View style={{ backgroundColor: colors.red, height: (width / 3) * 0.65, width: (width / 3) * 0.65, borderRadius: (width / 3) * 0.65 }} />
        <Text style={{ fontSize: 13, color: colors.blank, marginTop: 10 }}>{item.title}</Text>
      </View>
    )
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
        <FlatList
          data={data}
          keyExtractor={(it, i) => String(i)}
          numColumns={3}
          renderItem={renderItem}
          contentContainerStyle={{ paddingTop: 30 }}
        />
      </ImageBackground>
    </View>
  )
}

export default LiveClass

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
