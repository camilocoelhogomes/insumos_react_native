import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  title: {
    flex: 1,
    color: theme.colors.headingWhite,
    fontSize: 15,
    textAlign: 'center'
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line
  },
  icon: {
    width: 24,
    height: 18
  }
})
