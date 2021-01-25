import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import colors from '../constants/colors'
import { } from '../assets'

export default function Avatar ({ size, source, placeholder, containerStyle, radius }) {
  const [loader, setLoader] = useState(true)

  return (
    <View style={[styles.container, size && { height: size, width: size, borderRadius: size / 2 }, radius && { borderRadius: radius }, containerStyle]}>
      {
        (source && source.uri) ? (
          <Image
            source={source}
            style={styles.imageStyle}
            onError={() => setLoader(true)}
            onLoad={() => setLoader(false)}
          />
        ) : null
      }
      {
        loader && (
          <Image
            // source={placeholder || userPlaceholder}
            style={styles.IconStyles}
          />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: '100%',
    width: '100%'
  },
  IconStyles: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute'
  }
})
