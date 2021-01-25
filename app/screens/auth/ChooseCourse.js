import React from 'react'
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import assets from '../../assets'
import { PrimaryButton, RadioButton, SelectionButton } from '../../components/Button'
import colors from '../../constants/colors'

const icseData = ['8th', '9th Science', '9th Others', '10th Science', '10th Others']
const cbscData = ['8th', '9th', '10th']

function ChooseCourse ({ navigation }) {
  const [board, setBoard] = React.useState(1)
  const [selected, setSelected] = React.useState()

  const _submit = () => {
    navigation.navigate('chooseParent')
  }

  return (
    <View style={styles.root}>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
      <ImageBackground
        source={assets.appBG}
        style={styles.rootBg}
        resizeMode='stretch'
      >
        <View style={{ height: 50 }} />
        <Text style={styles.title1}>Choose</Text>
        <Text style={styles.title2}>your Course</Text>

        <View style={styles.redioGroup}>
          <RadioButton
            title='ICSE'
            selected={board === 1}
            onPress={() => setBoard(1)}
          />
          <View style={{ width: 50 }} />
          <RadioButton
            title='CBSE'
            selected={board === 2}
            onPress={() => setBoard(2)}
          />
        </View>
        <View style={{ height: 20 }} />
        {
          board === 1 && (
            <View style={styles.rowGroup}>
              {icseData.map((item, i) => (
                <View
                  key={String(i)}
                  style={{ marginBottom: 20, width: '50%' }}
                >
                  <SelectionButton
                    title={item}
                    onPress={() => setSelected(item)}
                    selected={selected === item}
                    containerStyle={{ alignSelf: 'center', width: '90%' }}
                  />
                </View>
              ))}
            </View>
          )
        }

        {board === 2 && cbscData.map((item, i) => (
          <View
            key={String(i)}
            style={{ marginBottom: 20, width: '60%' }}
          >
            <SelectionButton
              title={item}
              onPress={() => setSelected(item)}
              selected={selected === item}
            />
          </View>
        ))}

        <View style={{ width: '80%', marginTop: 50 }}>
          <PrimaryButton
            title='Next'
            onPress={_submit}
          />
        </View>

      </ImageBackground>

    </View>
  )
}

export default ChooseCourse

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rootBg: {
    flex: 1, paddingTop: StatusBar.currentHeight, padding: 30, alignItems: 'center'
  },
  title1: {
    color: colors.secondary, fontSize: 20, fontWeight: 'bold', textAlign: 'center'
  },
  title2: {
    color: colors.primary, fontSize: 20, fontWeight: 'bold', textAlign: 'center'
  },
  redioGroup: {
    flexDirection: 'row', alignItems: 'center', marginVertical: 30
  },
  rowGroup: {
    flexDirection: 'row', flexWrap: 'wrap', width: '100%'
  }
})
