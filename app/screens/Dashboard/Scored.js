import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, StatusBar, TextInput } from 'react-native'
import assets from '../../assets'
import { OutlineButton, PrimaryButton } from '../../components/Button'
import colors from '../../constants/colors'
import env from '../../constants/env'
import ProgressCircle from 'react-native-progress-circle'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Scored({ navigation }) {
    const [phone, setPhone] = React.useState()

    const _submit = () => {
        navigation.navigate('verification')
    }

    const _loginWithGoogle = () => {
        navigation.navigate('register')
    }
    return (
        <View style={styles.root}>
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <ImageBackground
                source={assets.appBG}
                style={styles.rootBg}
                resizeMode='stretch'>
                <View style={{ flex: 1 }}>
                    <View style={{ alignSelf: 'flex-start', marginTop: '10%', right: '30%' }}>
                        <TouchableOpacity>
                            <Image source={assets.homedetail_ic} style={{ alignSelf: 'center' }}></Image>
                            <Text style={styles.inputSupportText}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignSelf: 'center', marginTop: '13%', justifyContent: 'center', }}>
                        <Text style={styles.ScoredText}>You have Scored</Text>
                    </View>
                    <View style={{ alignSelf: 'center', marginTop: '5%' }}>
                        <ProgressCircle
                            percent={40}
                            radius={80}
                            borderWidth={12}
                            color="#FF9B2A"
                            shadowColor="#999"
                            bgColor="#fff">
                            <Text style={{ fontSize: 30, color: '#67299B' }}>{'70/80'}</Text>
                        </ProgressCircle>
                    </View>
                    <View style={{ alignSelf: 'center', marginTop: '10%', justifyContent: 'center', }}>
                        <Text style={{ color: colors.blank, fontSize: 18, alignSelf: 'center', fontFamily: env.fontSemiBold }}>Ranked : 2nd</Text>
                    </View>
                    <View style={{ alignSelf: 'center', marginTop: '5%', justifyContent: 'center', }}>
                 <TouchableOpacity>
                        <Text style={styles.linkTitle}>Review Answers</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Scored

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    rootBg: {
        flex: 1, paddingTop: StatusBar.currentHeight, padding: 30, justifyContent: 'center', alignItems: 'center'
    },
    title: {
        color: colors.primary, fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 25
    },
    ScoredText: {
        color: colors.blank, fontSize: 18, alignSelf: 'center', fontFamily: env.fontSemiBold
    },
    inputSupportText: {
        color: colors.lightGray, fontSize: 15, alignSelf: 'center', fontFamily: env.fontSemiBold
    },
    linkTitle:{
        color: '#F97117', 
        fontSize: 18,
         alignSelf: 'center', 
         fontFamily: env.fontSemiBold,
          textDecorationLine: 'underline',
    }
})