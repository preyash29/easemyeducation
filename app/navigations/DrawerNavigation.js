import { createDrawerNavigator } from '@react-navigation/drawer'
import * as React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import assets from '../assets'
import Avatar from '../components/Avatar'
import colors from '../constants/colors'
import Home from '../screens/Dashboard/Home'
import Profile from '../screens/Dashboard/Profile'

const Drawer = createDrawerNavigator()

export default function DrawerNavigation () {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerType='back'
      hideStatusBar
      drawerStyle={{
        width: Dimensions.get('screen').width
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='Notifications' component={Home} />
    </Drawer.Navigator>
  )
}

function DrawerContent ({ navigation }) {
  const _navigation = (root) => {
    navigation.navigate(root)
  }
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={assets.appBG2}
        style={{ flex: 1 }}
        resizeMode='stretch'
      >
        <View style={styles.drawerHeader}>
          <Avatar
            size={70}
            source={{ uri: 'https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg' }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: colors.primary, fontSize: 16, fontWeight: 'bold' }}>Madhavi gupta</Text>
            <View style={styles.row}>
              <Text style={{ color: colors.blank, fontSize: 14, fontWeight: '500', marginRight: 10 }}>CBSE - 9th class</Text>

              <TouchableOpacity>
                <Image source={assets.edit_ic} style={{ resizeMode: 'contain', height: 18, width: 18 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <DrawerItem
          icon={assets.home_ic}
          title='Home'
          onPress={() => _navigation('Home')}
        />
        <DrawerItem
          icon={assets.profile_ic}
          title='My Profile'
          onPress={() => _navigation('Profile')}
        />
        <DrawerItem
          icon={assets.online_ic}
          title='E-learning'
        />
        <DrawerItem
          icon={assets.history_ic}
          title='Resources'
        />
        <DrawerItem
          icon={assets.assesment_ic}
          title='Assesments and Test'
        />
        <DrawerItem
          icon={assets.result_ic}
          title='Results'
        />
        <DrawerItem
          icon={assets.help_ic}
          title='Live Support'
        />
        <DrawerItem
          icon={assets.logout_ic}
          title='Logout'
        />
        <DrawerItem
          icon={assets.share_ic}
          title='share app'
        />
      </ImageBackground>
    </View>
  )
}

function DrawerItem ({ title, icon, active, onPress }) {
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={1}
      onPress={onPress}
    >
      <Image source={icon} style={[styles.drawerIcon, active && { tintColor: '#F97117' }]} />
      <Text style={[styles.drawerTitle, active && { color: '#F97117' }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    paddingVertical: 15,
    marginLeft: 20
  },
  drawerTitle: {
    fontSize: 14,
    marginLeft: 15,
    color: '#39404F'
  },
  drawerIcon: {
    resizeMode: 'contain',
    height: 18,
    width: 18,
    tintColor: '#39404F'
  },
  drawerHeader: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
