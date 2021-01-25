import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'
import { PrimaryButton, RadioButton } from '../../components/Button'
import env from '../../constants/env'

const { width } = Dimensions.get('window')

const data = [
    { title: 'Mathematics' }, { title: 'Physics' }, { title: 'Chemistry' }, { title: 'Biology' }, { title: 'Social Science' }, { title: 'English' }
]

function DescriptiveAnswerSheet({ navigation }) {

    const _submit = () => {
        navigation.navigate('Resources')
    }

    const itemSeparator = () => {
        return (
            <View>
                <View style={{ marginHorizontal: 30, marginTop: '5%' }}>
                    <Text style={{ color: '#67299B', fontSize: 18, fontFamily: env.fontRegular, }}>Answer sheet 1</Text>
                </View>
                <View style={{ marginHorizontal: 30, marginTop: '5%', flexDirection: 'row' }}>
                    <Text style={{ color: '#67299B', fontSize: 18, fontFamily: env.fontRegular, }}>Question paper 1</Text>
                    <Text style={{ color: 'black', fontSize: 16, fontFamily: env.fontRegular, }}> (with solved answer sheet)</Text>
                </View>
                <View style={{ marginHorizontal: 30, marginTop: 5 }}>
                    <Text style={{ color: '#67299B', fontSize: 16, fontFamily: env.fontRegular, }}>15th, oct 2020</Text>
                </View>
                <View style={{ alignSelf: 'flex-end', flexDirection: 'row', marginHorizontal: 10 }}>
                    <TouchableOpacity>
                        <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                            <Text style={{ color: '#77838F', fontSize: 16, fontFamily: env.fontRegular, }}>Download</Text>
                            <Image source={assets.Icon} style={{ alignSelf: 'center', resizeMode: 'contain', marginHorizontal: 10 }}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 1, backgroundColor: '#C7C7C7', marginVertical: 15, width: '90%', alignSelf: 'center' }} />
            </View>
        );
    }

    return (
        <View style={styles.root}>

            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />

            <Header
                leadingIcon={assets.back_ic}
                title='Descriptive test Subject name'
                leadingAction={() => navigation.goBack()}/>
            <View style={styles.devider} />
            <FlatList
                data={[{}, {}, {}, {}]}
                keyExtractor={(it, i) => String(i)}
                ItemSeparatorComponent={itemSeparator}/>
        </View>
    )
}

export default DescriptiveAnswerSheet

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
})
