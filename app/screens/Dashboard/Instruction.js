
import React, { useState, useCallback, useEffect } from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'
import { PrimaryButton, RadioButton } from '../../components/Button'
import env from '../../constants/env'
const { width, height } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler'

function Instruction({ navigation }) {
    const [messages, setMessages] = React.useState([]);
    const _submit = () => {
        navigation.navigate('TestOngoing')
    }
    return (
        <View style={styles.root}>
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', }}>
                    <Header
                        leadingIcon={assets.back_ic}
                        title='Instruction'
                        leadingAction={() => navigation.goBack()}/>
                </View>
            </View>
            <View style={styles.devider} />

            <View style={{ marginTop: '2%', backgroundColor: '#FFFFFF', width: '85%', alignSelf: 'center', paddingVertical: 5, borderRadius: 10 }}>
                <View style={{ marginHorizontal: 20,flexDirection:'row',justifyContent:'space-between',marginTop:10 }}>
                    <Text style={{ fontSize: 14 }}> SST Week test - 8</Text>
                    <View style={{ marginHorizontal: 20,backgroundColor:'#FF9B2A',borderRadius:20,width:'30%',paddingVertical:5}}>
                    <TouchableOpacity>
                    <Text style={{ fontSize: 16, color: colors.white,fontWeight:'bold',alignSelf:'center' }}> End Test</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginHorizontal: 20, marginTop: '2%',}}>
                    <Text style={{ fontSize: 14 }}>Time(hrs)</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                    <View style={styles.itemTitle}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: '#67299B', fontSize: 24 }}>00</Text>
                        </View>
                    </View>
                    <View style={styles.itemTitle}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: '#F97117', fontSize: 24 }}>05</Text>
                        </View>
                    </View>
                    <View style={styles.itemTitle}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: '#67299B', fontSize: 24 }}>00</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: '10%', marginHorizontal: 25 }}>
                <Text style={{ fontSize: 16, color: '#000000', fontFamily: env.fontRegular }}>Instructions</Text>
            </View>
            <View style={{ marginTop: '10%', marginHorizontal: 25, flexDirection: 'row' }}>
                <Image source={assets.dot_ic} style={{}}></Image>
                <View style={{ top: '-2%', marginHorizontal: 10 }}>
                    <Text>Lorem Ipsum is simply dummy text of the
printing and typesetting industry. </Text>
                </View>
            </View>
            <View style={{ marginTop: '10%', marginHorizontal: 25, flexDirection: 'row' }}>
                <Image source={assets.dot_ic} style={{}}></Image>
                <View style={{ top: '-2%', marginHorizontal: 10 }}>
                    <Text>Lorem ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and
scrambled it to make a type specimen book. </Text>
                </View>
            </View>
            <View style={{ height: 70 }} />
            <View style={{width:'70%',alignSelf:'center'}}>
            <PrimaryButton
              title='Start Test'
              onPress={_submit}
            />
            </View>
        </View>
    )
}
export default Instruction
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
    row: {
        flexDirection: 'row', alignItems: 'center', marginHorizontal: 10
    },

    itemTitle: {
        backgroundColor: '#F5F5FB', width: '20%', paddingVertical: 20, marginTop: '2%', marginHorizontal: 5, borderRadius: 20
    }
})
