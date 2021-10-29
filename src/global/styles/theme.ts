import { DefaultTheme } from '@react-navigation/native'
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'
export const theme = {
  colors: {
    primary: `#FA5F43`,
    secondary100: '#F0754F',
    /*
    secondary90: '#0D133D',
    secondary80: '#0E1647',
    secondary85: '#171f52',
    secondary70: '#1B2565',
    secondary60: '#1B2565',
    secondary50: '#243189',
    secondary40: '#1D2766',
    secondary30: '#495BCC',
    */

    background: `#F3F3F3`,
    backgroundContrast: `#FFFFFF`,
    title: `#454550`,
    heading: `#1B1C29`, // Raisin Black
    subtitle: `#8B8B92`, // Dark Liver
    lightSubtitle: `#CDCDD0`,
    headingWhite: `#FFFFFF`,
    line: `#991F36`
  },
  fonts: {
    title700: 'Inter_800ExtraBold',
    title500: 'Inter_600SemiBold',
    text400: 'Inter_400Regular',
    text500: 'Inter_500Medium'
  }
}

export const navigationTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.background
  }
}
