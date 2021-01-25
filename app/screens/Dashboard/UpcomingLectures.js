
import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions,TouchableOpacity } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'
import { PrimaryButton,RadioButton } from '../../components/Button'
import env from '../../constants/env'

const { width } = Dimensions.get('window')



function UpcomingLectures ({ navigation }) {

  const _submit = () => {
    navigation.navigate('Resources')
  }
  const renderItem = () => {
        return (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, }}>
            <Image
              source={{ uri: 'https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg' }}
              style={{ width: '35%', height: 85, borderRadius: 10, marginBottom: 15 }}
    
            />
            <View style={{ flex: 1, paddingLeft: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{top:'-3%'}}>
                  <Text style={{fontSize:14}}>Subject Name</Text>
                  <Text style={{fontSize:14,color:'#67299B',fontFamily: env.fontSemiBold}}>Topic name</Text>
                </View>
                <Image source={assets.arrow_right} style={{ marginTop: 5, resizeMode: 'contain', width: 12, height: 12 }} />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <Text style={{fontFamily: env.fontMedium,fontSize:14,color:'#ACB1C0'}}>starting at 12:30pm</Text>
                <Text style={{color:'#ACB1C0',fontSize:14}}>3 hrs</Text>
              </View>
            </View>
          </View>
        )
      }







  return (
    <View style={styles.root}>

      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
      
        <Header
          leadingIcon={assets.back_ic}
          title='Upcoming Lectures'
          leadingAction={() => navigation.goBack()}
        />
         <View style={styles.devider} />
         <View style={{ height: 10 }} />

         <FlatList
        data={[{}, {},{},{}]}
        keyExtractor={(it, i) => String(i)}
        renderItem={renderItem}
      />
            <View style={{ height: 30 }} />

</View>
  )
}

export default UpcomingLectures

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop:'4%'
  },
  devider: {
    backgroundColor: '#FEFEFE',
    height: 5,
    marginVertical: 10
},
})
