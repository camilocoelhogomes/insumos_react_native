import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { SignIn } from '../screens/SignIn/SignIn'
import { navigationTheme } from '../global/styles/theme'
//import { useAuth } from '../hook/auth'

const user = {
  id: 0,
  username: 'lucas'
}

export function Routes() {
  //const { user } = useAuth()
  console.log(user.id)
  console.log(user.username)

  return (
    <NavigationContainer theme={navigationTheme}>
      {user.id ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}
