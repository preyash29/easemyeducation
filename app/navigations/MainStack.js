import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import colors from '../constants/colors'
import ChooseCourse from '../screens/auth/ChooseCourse'
import ChooseParent from '../screens/auth/ChooseParent'
import Login from '../screens/auth/Login'
import ParentIntroVideo from '../screens/auth/ParentIntroVideo'
import Register from '../screens/auth/Register'
import Verification from '../screens/auth/Verification'
import Subjects from '../screens/Dashboard/Subjects'
import UpcomingLectures from '../screens/Dashboard/UpcomingLectures'
import SplashView from '../screens/SplashView'
import DrawerNavigation from './DrawerNavigation'
import Profile from '../screens/Dashboard/Profile'
import AllSubject from '../screens/Dashboard/AllSubject'
import SelectSubject from '../screens/Dashboard/SelectSubject'
import Resources from '../screens/Dashboard/Resources'
import Question from '../screens/Dashboard/Question'
import Test from '../screens/Dashboard/Test'
import LiveChat from '../screens/Dashboard/LiveChat'
import Upload from '../screens/Dashboard/Upload'
import Board from '../screens/Dashboard/Board'
import BoardSubject from '../screens/Dashboard/BoardSubject'
import SelectAuthor from '../screens/Dashboard/SelectAuthor'
import SelectChapter from '../screens/Dashboard/SelectChapter'
import Lectures from '../screens/Dashboard/Lectures'
import Instruction from '../screens/Dashboard/Instruction'
import TestOngoing from '../screens/Dashboard/TestOngoing'
import Scored from '../screens/Dashboard/Scored'
import TestSolution from '../screens/Dashboard/TestSolution'
import DescriptiveAnswerSheet from '../screens/Dashboard/DescriptiveAnswerSheet'



const Stack = createStackNavigator()
export default function MainStack () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='DescriptiveAnswerSheet'
        screenOptions={{
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: colors.blank1,
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
              height: 0
            },
            borderBottomWidth: 0,
            elevation: 0
          },
          headerTitleStyle: {
            color: '#969696',
            fontSize: 20
          },
          headerTitleAlign: 'left'
        }}
      >
        <Stack.Screen name='splashscreen' component={SplashView} options={{ headerShown: false }} />
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='verification' component={Verification} options={{ headerShown: false }} />
        <Stack.Screen name='chooseCourse' component={ChooseCourse} options={{ headerShown: false }} />
        <Stack.Screen name='chooseParent' component={ChooseParent} options={{ headerShown: false }} />
        <Stack.Screen name='parentIntroVideo' component={ParentIntroVideo} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={DrawerNavigation} options={{ headerShown: false }} />

        <Stack.Screen name='subjects' component={Subjects} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />

        <Stack.Screen name='upcomingLectures' component={UpcomingLectures} options={{ headerShown: false }} />
        <Stack.Screen name='AllSubject' component={AllSubject} options={{ headerShown: false }} />
        <Stack.Screen name='SelectSubject' component={SelectSubject} options={{ headerShown: false }} />
        <Stack.Screen name='Resources' component={Resources} options={{ headerShown: false }} />
        <Stack.Screen name='Question' component={Question} options={{ headerShown: false }} />
        <Stack.Screen name='Test' component={Test} options={{ headerShown: false }} />
        <Stack.Screen name='LiveChat' component={LiveChat} options={{ headerShown: false }} />
        <Stack.Screen name='Upload' component={Upload} options={{ headerShown: false }} />
        <Stack.Screen name='Board' component={Board} options={{ headerShown: false }} />
        <Stack.Screen name='BoardSubject' component={BoardSubject} options={{ headerShown: false }} />
        <Stack.Screen name='SelectAuthor' component={SelectAuthor} options={{ headerShown: false }} />
        <Stack.Screen name='SelectChapter' component={SelectChapter} options={{ headerShown: false }} />
        <Stack.Screen name='Lectures' component={Lectures} options={{ headerShown: false }} />
        <Stack.Screen name='Instruction' component={Instruction} options={{ headerShown: false }} />
        <Stack.Screen name='TestOngoing' component={TestOngoing} options={{ headerShown: false }} />
        <Stack.Screen name='Scored' component={Scored} options={{ headerShown: false }} />
        <Stack.Screen name='TestSolution' component={TestSolution} options={{ headerShown: false }} />
        <Stack.Screen name='DescriptiveAnswerSheet' component={DescriptiveAnswerSheet} options={{ headerShown: false }} />

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
