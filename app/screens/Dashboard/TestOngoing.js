
import React, { useState, useCallback, useEffect } from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, FlatList, Dimensions, TouchableOpacity, Button } from 'react-native'
import assets from '../../assets'
import { Header } from '../../components/Header'
import colors from '../../constants/colors'
import { PrimaryButton, RadioButton } from '../../components/Button'
import env from '../../constants/env'
const { width, height } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler'
import RoundCheckbox from 'rn-round-checkbox';
import { Checkbox, Custom } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import Modal from 'react-native-modal';


function TestOngoing({ navigation }) {
    const [messages, setMessages] = React.useState([]);
    const [selected, setSelected] = React.useState(false)
    const [checked, setChecked] = React.useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
    const [toggleCheckBox4, setToggleCheckBox4] = useState(false)
    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const _submit = () => {
        navigation.navigate('Instruction')
    }
    return (
        <View style={styles.root}>
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', }}>
                    <Header
                        leadingIcon={assets.back_ic}
                        title='Test Ongoing'
                        leadingAction={() => navigation.goBack()} />
                </View>
            </View>
            <View style={styles.devider} />
            <ScrollView>
                <View style={{ marginTop: '2%', backgroundColor: '#FFFFFF', width: '85%', alignSelf: 'center', paddingVertical: 10, borderRadius: 10 }}>
                    <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ fontSize: 14 }}> SST Week test - 8</Text>
                        <View style={{ marginHorizontal: 20, backgroundColor: '#FF9B2A', borderRadius: 20, width: '30%', paddingVertical: 5 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, color: colors.white, fontWeight: 'bold', alignSelf: 'center' }}> End Test</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 20, marginTop: '2%', }}>
                        <Text style={{ fontSize: 14 }}>Time(hrs)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                        <View style={styles.itemTitle2}>
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#67299B', fontSize: 24 }}>00</Text>
                            </View>
                        </View>
                        <View style={styles.itemTitle2}>
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#F97117', fontSize: 24 }}>05</Text>
                            </View>
                        </View>
                        <View style={styles.itemTitle2}>
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#67299B', fontSize: 24 }}>00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: '10%', marginHorizontal: 30, }}>
                    <View style={{ backgroundColor: '#E6E6FA', width: '15%', paddingVertical: 10, borderRadius: 10 }}>
                        <Text style={{ color: '#67299B', alignSelf: 'center' }}>Q.1</Text>
                    </View>
                    <View style={{ marginHorizontal: 20, }}>
                        <Text style={{ color: '#000000', fontSize: 14 }}>In pharetra nunc nec enim venenatis auctor?</Text>
                    </View>
                </View>
                <View style={{ marginLeft: '10%', marginTop: '5%', flexDirection: 'row' }}>
                    <CheckBox
                        disabled={false}
                        Type={Custom}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <View><Text style={{ color: '#77838F', fontSize: 14, fontFamily: env.fontRegular, alignSelf: 'center' }}>Syntax</Text></View>
                </View>
                <View style={{ marginLeft: '10%', marginTop: '3%', flexDirection: 'row' }}>
                    <CheckBox
                        disabled={false}
                        Type={Custom}
                        value={toggleCheckBox2}
                        onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                    />
                    <View><Text style={{ color: '#77838F', fontSize: 14, fontFamily: env.fontRegular }}>Pellentesque</Text></View>
                </View>
                <View style={{ marginLeft: '10%', marginTop: '3%', flexDirection: 'row' }}>
                    <CheckBox
                        disabled={false}
                        Type={Custom}
                        value={toggleCheckBox3}
                        onValueChange={(newValue) => setToggleCheckBox3(newValue)}
                    />
                    <View><Text style={{ color: '#77838F', fontSize: 14, fontFamily: env.fontRegular }}>Suspendisse</Text></View>
                </View>
                <View style={{ marginLeft: '10%', marginTop: '3%', flexDirection: 'row' }}>
                    <CheckBox
                        disabled={false}
                        Type={Custom}
                        value={toggleCheckBox4}
                        onValueChange={(newValue) => setToggleCheckBox4(newValue)}
                    />
                    <View><Text style={{ color: '#77838F', fontSize: 14, fontFamily: env.fontRegular }}>Blandit</Text></View>
                </View>
                <View style={{ marginTop: '5%', marginHorizontal: 30, }}>
                    <Text style={{ color: '#000000', fontSize: 16, fontFamily: env.fontRegular }}>Subject Name</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, }}>
                    <View style={styles.itemTitle}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 12, fontFamily: env.fontSemiBold }}>Q1</Text>
                        </View>
                    </View>
                    <View style={styles.itemTitle}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 12, fontFamily: env.fontSemiBold }}>Q2</Text>
                        </View>
                    </View>
                    <View style={styles.itemTitle}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 12, fontFamily: env.fontSemiBold }}>Q3</Text>
                        </View>
                    </View>
                    <View style={styles.itemTitle}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 12, fontFamily: env.fontSemiBold }}>Q4</Text>
                        </View>
                    </View>
                    <View style={styles.itemTitle}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 12, fontFamily: env.fontSemiBold }}>Q5</Text>
                        </View>
                    </View>
                    <View style={styles.itemTitle}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 12, fontFamily: env.fontSemiBold }}>Q6</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 30, marginTop: '15%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: env.fontRegular }}>Deselect</Text>
                    <Text style={{ fontSize: 16, fontFamily: env.fontRegular }}>Skip</Text>
                </View>
                <View style={{ height: 70 }} />
                <View style={{ width: '70%', alignSelf: 'center', marginBottom: 20 }}>
                    <PrimaryButton
                        title='Save and Next'
                        onPress={toggleModal}
                    />
                </View>
            </ScrollView>
            {/* <Button title="Show modal" onPress={toggleModal} /> */}
            {/* <View>  */}

            <View style={{}}>
                <Modal
                    isVisible={isModalVisible}
                    style={{ margin: 0 }}>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{
                            backgroundColor: colors.white,
                            width: width,


                        }}>

                            <View style={{
                                padding: 2,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginHorizontal: 20,
                                top:10
                            }}>

                                <Text style={styles.title}>Alert</Text>
                                <TouchableOpacity
                                    onPress={toggleModal}
                                >
                                    <View style={{alignItems:'center'}}>
                                    <Image
                                        source={assets.closeIcon}
                                        style={{ resizeMode: 'contain', tintColor: colors.black,alignSelf:'center' }}
                                    />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginHorizontal: 20 }}>
                                <Text style={{ color: '#67299B', fontFamily: env.fontRegular, fontSize: 16 }}>Pratik, You are leaving too soon</Text>
                            </View>
                            <View style={{ marginHorizontal: 20, marginTop: '3%' }}>
                                <Text style={{ color: '#000000', fontFamily: env.fontRegular, fontSize: 16 }}>Can you tell us reason?</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    width: width * 40 / 100,
                                    paddingVertical: 1,
                                    borderWidth: 1,
                                    marginTop: '5%',
                                    marginBottom: 10,
                                    borderRadius: 20,
                                    marginHorizontal: 20
                                }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                    // onPress={onPress}
                                    >
                                        <View style={{

                                        }}>

                                            <Text style={{ fontSize: 15, fontFamily: env.fontSemiBold }}>Too easy questions</Text>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    width: width * 35 / 100,
                                    paddingVertical: 1,
                                    borderWidth: 1,
                                    marginTop: '5%',
                                    marginBottom: 10,
                                    borderRadius: 20, marginHorizontal: 20
                                }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                    // onPress={onPress}
                                    >
                                        <View style={{

                                        }}>

                                            <Text style={{ fontSize: 15, fontFamily: env.fontSemiBold }}>Tough question</Text>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{
                                    width: width * 20 / 100,
                                    paddingVertical: 1,
                                    borderWidth: 1,
                                    marginTop: '5%',
                                    marginBottom: 10,
                                    borderRadius: 20,
                                    marginHorizontal: 23
                                }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                    // onPress={onPress}
                                    >
                                        <View style={{

                                        }}>

                                            <Text style={{ fontSize: 15, fontFamily: env.fontSemiBold }}>Other</Text>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    width: width * 40 / 100,
                                    paddingVertical: 1,
                                    borderWidth: 1,
                                    marginTop: '5%',
                                    marginBottom: 10,
                                    borderRadius: 20, marginHorizontal: 20
                                }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                              >
                                        <View style={{
                                        }}>
                                            <Text style={{ fontSize: 15, fontFamily: env.fontSemiBold }}>Internet issues</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ width: '70%', alignSelf: 'center', marginTop: 15, marginBottom: 20 }}>
                                <PrimaryButton
                                    title='Submit and leave'
                                    onPress={_submit}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}
export default TestOngoing
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
        marginTop: '5%', width: '10%', borderWidth: 1, paddingVertical: 5, marginHorizontal: 10,
    },
    itemTitle2: {
        backgroundColor: '#F5F5FB', width: '20%', paddingVertical: 20, marginTop: '2%', marginHorizontal: 5, borderRadius: 20
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(51, 51, 51, 0.3)'
    },
    title: {
        fontSize: 18,
        color: colors.black,
        fontFamily: env.fontSemiBold
    },
    button: {
        alignItems: "center",
        // backgroundColor: "#DDDDDD",
        padding: 5,
    },
})
