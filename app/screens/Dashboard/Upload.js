import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions, TouchableOpacity, Button, } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'
import env from '../../constants/env'
import { PrimaryButton, RadioButton } from '../../components/Button'
import { InputField, DropDownInput } from '../../components/Input'
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import { ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')

function Upload({ navigation }) {

    const [image, setimage] = React.useState('https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg');
    const [board, setBoard] = React.useState(1)

    const [optime, setName] = React.useState("")
    const [value, setValue] = React.useState();
    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };



    const _submit = () => {
        navigation.navigate('SelectSubject')
    }
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setimage(image.path);
        });
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setimage(image.path);
        });
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
                    title='Upload'
                    leadingAction={() => navigation.goBack()}
                />

                <ScrollView>
                    <View style={{ marginTop: '5%', marginHorizontal: 25 }}>
                        <Text style={{ fontSize: 14, fontFamily: env.fontSemiBold }}>Board</Text>
                        <View style={styles.redioGroup}>
                            <RadioButton
                                title='CBSE'
                                selected={board === 1}
                                onPress={() => setBoard(1)}
                            />
                            <View style={{ width: 20 }} />
                            <RadioButton
                                title='ICSE'
                                selected={board === 2}
                                onPress={() => setBoard(2)}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: '5%', marginHorizontal: 25 }}>
                        <Text style={{ fontSize: 14, fontFamily: env.fontSemiBold }}>Class</Text>
                        <View style={styles.redioGroup}>
                            <RadioButton
                                title='9th'
                                selected={board === 1}
                                onPress={() => setBoard(1)}
                            />
                            <View style={{ width: 20 }} />
                            <RadioButton
                                title='10th'
                                selected={board === 2}
                                onPress={() => setBoard(2)}
                            />
                            <View style={{ width: 20 }} />
                            <RadioButton
                                title='11th'
                                selected={board === 2}
                                onPress={() => setBoard(2)}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: '5%', marginHorizontal: 25 }}>
                        <Text style={{ fontSize: 14, fontFamily: env.fontSemiBold }}>Subject</Text>
                    </View>

                    <View style={{ width: '90%', marginHorizontal: 15, }}>
                        <DropDownInput
                            placeholder='Select Subject'
                            items={[{ label: 'Science', value: 10 }, { label: 'Maths', value: 20 }, { label: 'Physics', value: 30 }, { label: 'Social Science', value: 40 }]}
                            value={value}
                            onChange={e => setValue(e.currentTarget.value)}
                        />
                    </View>
                    <View style={{ marginTop: '5%', marginHorizontal: 25 }}>
                        <Text style={{ fontSize: 14, fontFamily: env.fontSemiBold }}>Choose File</Text>
                    </View>
                    <View style={{ marginTop: '1%', marginHorizontal: 30, flexDirection: 'row' }}>
                        <ImageBackground
                            source={assets.rectangle_ic}
                            style={{ height: height * 18 / 100, width: width * 25 / 100, }}
                        >
                            <TouchableOpacity>
                                <View style={{ marginTop: '50%', alignSelf: 'center', }}>
                                    <Image source={assets.choose_ic}
                                        style={{}}
                                    ></Image>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginHorizontal: 24, marginTop: '1%', width: '30%', alignSelf: 'center' }}>
                            <TouchableOpacity onPress={toggleModal}>
                                <Text style={{ color: '#ACB1C0', fontFamily: env.fontSemiBold }}>no file choosen</Text>
                                <View style={{ marginTop: 50, alignSelf: 'center' }}>
                                    <Modal transparent={true}
                                        isVisible={isModalVisible}>
                                        <View style={{ backgroundColor: 'white', paddingVertical: 22, width: '35%', alignSelf: 'center', borderRadius: 12 }}>
                                            <View style={{ alignSelf: 'center', marginVertical: 5 }}>
                                                <Text style={{ alignItems: 'center', color: '#67299B', fontSize: 12 }}>Choose Photo</Text>
                                            </View>
                                            <View style={{ alignSelf: 'center', marginVertical: 5 }}>
                                                <TouchableOpacity onpress={takePhotoFromCamera}>
                                                    <Text>Camera</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ alignSelf: 'center', marginVertical: 5 }}>

                                                <TouchableOpacity onpress={choosePhotoFromLibrary}>
                                                    <Text>Gallery</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ alignSelf: 'center', marginVertical: 5 }}>
                                                <TouchableOpacity onPress={toggleModal}>
                                                    <Text>Cancel</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </Modal>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: '10%', width: '70%', alignSelf: 'center' }} >
                        <PrimaryButton
                            title='Upload'
                            onPress={_submit}
                        />
                    </View>


                    <View style={{ marginTop: '30%', marginHorizontal: 25, marginBottom: 20 }}>
                        <Text style={{ color: '#67299B', fontSize: 12 }}>Note : Upload your solution paper which you can see in school paper section from App</Text>

                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default Upload

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    redioGroup: {
        flexDirection: 'row', alignItems: 'center', marginVertical: 10
    },
})
