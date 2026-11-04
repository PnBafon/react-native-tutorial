import { useColorScheme, View, Image } from 'react-native'
import React from 'react'
import LogoLight from '../assets/images/logo_light.png'
import LogoDark from '../assets/images/logo_dark.png'

const ThemedLogo = () => {
    const colorScheme = useColorScheme();
    const logo = colorScheme === 'dark' ? LogoDark : LogoLight;
  return (
    <View>
      <Image source={logo} />
    </View>
  )
}

export default ThemedLogo
