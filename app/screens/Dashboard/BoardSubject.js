import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions, TouchableOpacity, Button, } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'
import env from '../../constants/env'
import { PrimaryButton, RadioButton } from '../../components/Button'
import { ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')

function BoardSubject({ navigation }) {

    

    

    return (
        <View style={styles.root}>

            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <ImageBackground
                source={assets.appBG2}
                style={{ flex: 1, paddingTop: StatusBar.currentHeight }}
                resizeMode='stretch'>
                <Header
                    leadingIcon={assets.back_ic}
                    title='ICSE-ISC'
                    leadingAction={() => navigation.goBack()} />
                <View style={{ backgroundColor: '#FCEEFE', width: '100%', marginTop: '10%', paddingVertical: 25 }}>
                    <View style={{ marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: env.fontSemiBold, color: '#000000', fontSize: 14 }}>Class 9</Text>
                        <Image source={assets.option}></Image>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', marginTop: '5%', backgroundColor: '#F6F3F9', paddingVertical:20, width: width * 90 / 100 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('DownloadDetail')}>
                    <View style={{marginHorizontal:10}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: '4%', justifyContent: 'space-between' }}>
                        <View style={styles.commonContainer}>
                                <Image
                                    source={assets.maths_ic}
                                    style={{ resizeMode: 'contain', flex: 1 }}
                                />
                            </View>
                            <View style={{ flex: 1, paddingLeft: 20 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ color: '#67299B' }}>Mathematics</Text>
                                    </View>
                                    <Image source={assets.arrow_right} style={{ marginTop: 5, resizeMode: 'contain', width: 12, height: 12 }} />
                                </View>
                            </View>
                        </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginHorizontal:10}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: '4%' }}>
                    <View style={styles.commonContainer}>
                            <Image
                                source={assets.physics_ic}
                                style={{ resizeMode: 'contain', flex: 1 }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#000000' }}>Physics</Text>
                                </View>
                                <Image source={assets.arrow_right} style={{ marginTop: 5, resizeMode: 'contain', width: 12, height: 12 }} />
                            </View>
                        </View>
                    </View>
                    </View>
                    <View style={{marginHorizontal:10}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: '4%' }}>
                    <View style={styles.commonContainer}>
                            <Image
                                source={assets.chemstry_ic}
                                style={{ resizeMode: 'contain', flex: 1 }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#000000' }}>Chemistry</Text>
                                </View>
                                <Image source={assets.arrow_right} style={{ marginTop: 5, resizeMode: 'contain', width: 12, height: 12 }} />
                            </View>
                        </View>
                    </View>
                    </View>
                    <View style={{marginHorizontal:10}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: '4%' }}>
                    <View style={styles.commonContainer}>
                            <Image
                                source={assets.biology_ic}
                                style={{ resizeMode: 'contain', flex: 1 }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#000000' }}>Biology</Text>
                                </View>
                                <Image source={assets.arrow_right} style={{ marginTop: 5, resizeMode: 'contain', width: 12, height: 12 }} />
                            </View>
                        </View>
                    </View>
                    </View>
                    <View style={{marginHorizontal:10}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: '4%' }}>
                    <View style={styles.commonContainer}>
                            <Image
                                source={assets.social_ic}
                                style={{ resizeMode: 'contain', flex: 1 }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#000000' }}>Social Science</Text>
                                </View>
                                <Image source={assets.arrow_right} style={{ marginTop: 5, resizeMode: 'contain', width: 12, height: 12 }} />

                            </View>
                        </View>
                    </View>
                    </View>
                    <View style={{marginHorizontal:10}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: '4%' }}>
                        <View style={styles.commonContainer}>
                            <Image
                                source={assets.english_ic}
                                style={{ resizeMode: 'contain', flex: 1 }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#000000' }}>English</Text>
                                </View>
                                <Image source={assets.arrow_right} style={{ marginTop: 5, resizeMode: 'contain', width: 12, height: 12 }} />

                            </View>
                        </View>
                    </View>
                    </View>
                    </View>
            </ImageBackground>
        </View>
    )
}

export default BoardSubject

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    commonContainer:{
        width: 65, height: 65, borderRadius: 200 / 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
