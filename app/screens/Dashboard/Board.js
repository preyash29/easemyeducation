import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions, TouchableOpacity, Button, } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'
import env from '../../constants/env'
import { PrimaryButton, RadioButton } from '../../components/Button'
import { ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')

function Board({ navigation }) {

    const [board, setBoard] = React.useState(1)

    const [optime, setName] = React.useState("")
    const [value, setValue] = React.useState();


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
                    title='ICSE-ISC class 9'
                    leadingAction={() => navigation.goBack()}
                />
                <View style={{ marginHorizontal: 58, top: '-2%' }}>
                    <Text style={{ fontSize: 15, color: '#67299B' }}>subject name</Text>
                </View>

                <View style={{ marginHorizontal: 20, marginTop: '4%' }}>
                    <Image source={assets.board} style={{ resizeMode: 'contain' }} />
                </View>

                <View style={{ backgroundColor: '#FCEEFE', width: '100%', marginTop: '10%', paddingVertical: 25 }}>


                    <View style={{ marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: env.fontSemiBold, color: '#000000', fontSize: 14 }}>Board papers</Text>
                        <Image source={assets.colapse}></Image>
                    </View>
                </View>

                <View style={{ backgroundColor: '#FCEEFE', width: '100%', marginTop: '3%', paddingVertical: 25 }}>


                    <View style={{ marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: env.fontSemiBold, color: '#000000', fontSize: 14 }}>Chapter papers</Text>
                        <Image source={assets.colapse}></Image>
                    </View>
                </View>
                <View style={{ backgroundColor: '#FCEEFE', width: '100%', marginTop: '3%', paddingVertical: 25 }}>


                    <View style={{ marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: env.fontSemiBold, color: '#000000', fontSize: 14 }}>Sample papers</Text>
                        <Image source={assets.colapse}></Image>
                    </View>
                </View>
                <View style={{ backgroundColor: '#FCEEFE', width: '100%', marginTop: '3%', paddingVertical: 25 }}>


                    <View style={{ marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: env.fontSemiBold, color: '#000000', fontSize: 14 }}>School papers</Text>
                        <Image source={assets.colapse}></Image>
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}

export default Board

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
   
})
