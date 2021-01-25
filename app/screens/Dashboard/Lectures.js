
import React, { useState, useCallback, useEffect } from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'
import { PrimaryButton, RadioButton } from '../../components/Button'
import env from '../../constants/env'
const { width, height } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler'

function Lectures({ navigation }) {
    const [messages, setMessages] = React.useState([]);


    const renderItem = () => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, }}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg' }}
                    style={{ width: '35%', height: 85, borderRadius: 10, marginBottom: 15 }}

                />
                <View style={{ flex: 1, paddingLeft: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ top: '-3%' }}>
                            <Text style={{ fontSize: 14 }}>Subject Name</Text>
                            <Text style={{ fontSize: 14, color: '#67299B', fontFamily: env.fontSemiBold }}>Topic name</Text>
                        </View>
                        <Image source={assets.arrow_right} style={{ marginTop: 5, resizeMode: 'contain', width: 12, height: 12 }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ fontFamily: env.fontMedium, fontSize: 14, color: '#ACB1C0' }}>starting at 12:30pm</Text>
                        <Text style={{ color: '#ACB1C0', fontSize: 14 }}>3 hrs</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.root}>
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', }}>
                    <Header
                        leadingIcon={assets.back_ic}
                        title='CBSE Class 9'
                        leadingAction={() => navigation.goBack()} />

                </View>
                <View style={{ width: '40%' }} />
                <View style={{ alignSelf: 'center' }}>
                    <Image source={assets.search_ic}></Image>
                </View>
                <View style={{ width: '6%' }} />

                <View style={{ alignSelf: 'center' }}>
                    <Image source={assets.liveuser_ic}></Image>
                </View>
            </View>
            <ScrollView>
                <View style={{ marginTop: '2%' }}>
                    <ImageBackground source={assets.Image_ic}
                        style={{
                            resizeMode: 'cover', width: width * 110 / 100, alignSelf: 'center', height: height * 30 / 100
                        }}>
                    </ImageBackground>
                    <View style={{ backgroundColor: 'white', width: '15%', top: '-11%', marginHorizontal: 25, borderRadius: 10, paddingVertical: 5 }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                            <Text style={{ color: 'red' }}>Live</Text>
                            <Image source={assets.arrow_right} style={{ alignSelf: "center", marginHorizontal: 5 }}></Image>
                        </View>
                    </View>
                </View>
                <View style={[styles.row, { justifyContent:'space-between',top:'-2%'}]}>
                    <View style={styles.row}>
                        <Text style={{ fontSize: 16, color: '#39404F', marginLeft: 10, fontFamily: env.fontSemiBold }}>Topic name</Text>
                    </View>
                    <Text style={{ fontSize: 14, color: '#77838F', fontFamily: env.fontRegular }}>Starting at 11:am</Text>
                </View>
                <View style={styles.devider} />

                <View style={[styles.row, { justifyContent: 'space-between', marginTop: '5%' }]}>
                    <View style={styles.row}>
                        <Text style={{ fontSize: 16, color: '#F97117', marginLeft: 10, fontFamily: env.fontSemiBold }}>Upcoming Lectures</Text>
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
                <View style={{ marginTop: '4%' }}>
                    <FlatList
                        data={[{}, {}, {}, {}]}
                        keyExtractor={(it, i) => String(i)}
                        renderItem={renderItem} />
                </View>
                <View style={[styles.row, { justifyContent: 'space-between', marginTop: '5%' }]}>
                    <View style={styles.row}>
                        <Text style={{ fontSize: 16, color: '#F97117', marginLeft: 10, fontFamily: env.fontSemiBold }}>Recently Conducted</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={{ paddingHorizontal: 5, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14, color: '#3C3C3C', fontFamily: env.fontSemiBold, }}>View All</Text>
                            <Image source={assets.arrow_right} style={{ marginTop: 5, resizeMode: 'contain', width: 12, height: 12, left: '10%', paddingRight: 50 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: '4%' }}>
                    <FlatList
                        data={[{}, {}, {}, {}]}
                        keyExtractor={(it, i) => String(i)}
                        renderItem={renderItem}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
export default Lectures
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
})
