import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'
import { PrimaryButton, SelectionButton } from '../../components/Button'
import env from '../../constants/env'

const { width } = Dimensions.get('window')
const icseData = ['a.Odd', 'Triangle', 'Square']


function Question({ navigation }) {
    const [board, setBoard] = React.useState(1)
    const [selected, setSelected] = React.useState()

    const _submit = () => {
        navigation.navigate('Resources')
    }

    return (
        <View style={styles.root}>

            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />

            <Header
                leadingIcon={assets.back_ic}
                title='Questions'
                leadingAction={() => navigation.goBack()}
            />
            <View style={styles.devider} />

            <View style={{ marginHorizontal: 30 }}>
                <Text style={{ fontSize: 17, fontFamily: env.fontMedium, }}>1,3,6,10 and so on are known as </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                <View
                    style={{
                        borderBottomColor: '#67299B',
                        borderBottomWidth: 1,
                        width: width * 37 / 100, marginLeft: 34, marginTop: 10
                    }}
                />

                <View style={{ marginLeft: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 17, fontFamily: env.fontMedium, }}>Numbers</Text>
                </View>

            </View>




            <View style={{ marginTop: '10%' }}>
                <TouchableOpacity style={{
                    width: '90%',
                    alignSelf: 'center',
                    // borderColor: selected ? colors.primary : '#FBF9FD',
                    backgroundColor: '#FBF9FD',
                    height: 54,
                    paddingHorizontal: 20,
                    borderRadius: 17,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 25,
                    borderColor: selected ? colors.primary : '#FBF9FD',
                    elevation: 5,
                    shadowColor: "#000000",
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                        height: 1,
                        width: 1
                    }
                }}>
                    <View style={{flexDirection:'row',}}>
                  <Text style={{ fontSize: 16, color: selected ? colors.primary : colors.blank }}>A.</Text> 
                   <View style={{alignSelf:'center'}}>
                   <Text style={{ fontSize: 16, color: selected ? colors.primary : colors.blank,alignItems:'center' }}>Odd</Text>
                   </View>
                   </View>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: '10%' }}>
                <TouchableOpacity style={{
                    width: '90%',
                    alignSelf: 'center',
                    // borderColor: selected ? colors.primary : '#FBF9FD',
                    backgroundColor: '#FBF9FD',
                    height: 54,
                    paddingHorizontal: 20,
                    borderRadius: 17,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 25,
                    borderColor: selected ? colors.primary : '#FBF9FD',
                    elevation: 5,
                    shadowColor: "#000000",
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                        height: 1,
                        width: 1
                    }
                }}>
                    <View style={{flexDirection:'row',}}>
                  <Text style={{ fontSize: 16, color: selected ? colors.primary : colors.blank }}>A.</Text> 
                   <View style={{alignSelf:'center'}}>
                   <Text style={{ fontSize: 16, color: selected ? colors.primary : colors.blank,alignItems:'center' }}>Odd</Text>
                   </View>
                   </View>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: '10%' }}>
                <TouchableOpacity style={{
                    width: '90%',
                    alignSelf: 'center',
                    // borderColor: selected ? colors.primary : '#FBF9FD',
                    backgroundColor: '#FBF9FD',
                    height: 54,
                    paddingHorizontal: 20,
                    borderRadius: 17,
                    justifyContent: 'center',
                    // alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 25,
                    borderColor: selected ? colors.primary : '#FBF9FD',
                    elevation: 5,
                    shadowColor: "#000000",
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                        height: 1,
                        width: 1
                    }
                }}>
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                  <Text style={{ fontSize: 16, color: selected ? colors.primary : colors.blank }}>A.</Text> 
                   <View style={{flexDirection:'row',alignSelf:'center'}}>
                   <Text style={{ fontSize: 16, color: selected ? colors.primary : colors.blank,alignItems:'center' }}>Square</Text>
                   </View>
                   </View>
                </TouchableOpacity>
            </View>

            <View style={{ height: 30 }} />
            <PrimaryButton
                title='Submit'
                onPress={_submit}
            />

        </View>
    )
}

export default Question

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: '4%'
    },
    devider: {
        backgroundColor: '#FEFEFE',
        height: 5,
        marginVertical: 10
    },
    rowGroup: {
        width: '100%', marginTop: '10%', alignSelf: 'center',
    }
})
