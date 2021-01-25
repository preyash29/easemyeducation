import React, { useEffect } from 'react'

function SplashView ({ navigation }) {
  useEffect(() => {
    // check auth here
    navigation.navigate('login')
  }, [])

  return null
}

export default SplashView
