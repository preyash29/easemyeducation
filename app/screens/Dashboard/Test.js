import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'
import env from '../../constants/env'
import { PrimaryButton, RadioButton } from '../../components/Button'

const { width } = Dimensions.get('window')
const cbscData = ['MCQ', 'Descriptive', '10th']

function Test({ navigation }) {
    const [board, setBoard] = React.useState(1)
    const _submit = () => {
        navigation.navigate('SelectSubject')
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
                    title='Test'
                    leadingAction={() => navigation.goBack()}
                />

                <View style={{ marginTop: '5%', marginHorizontal: 25 }}>
                    <Text style={{ fontSize: 14, fontFamily: env.fontSemiBold }}>Choose your type of test</Text>
                    <View style={styles.redioGroup}>
                    <RadioButton
                        title='MCQ'
                        selected={board === 1}
                        onPress={() => setBoard(1)}
                    />
                    <View style={{ width: 20 }} />
                    <RadioButton
                        title='Descriptive'
                        selected={board === 2}
                        onPress={() => setBoard(2)}
                    />
                </View>
                </View>
                <View style={{ marginTop:'80%',width:'70%',alignSelf:'center' }} >
                <PrimaryButton
                    title='Next'
                    onPress={_submit}
                />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    redioGroup: {
        flexDirection: 'row', alignItems: 'center', marginVertical:10
    },
})
