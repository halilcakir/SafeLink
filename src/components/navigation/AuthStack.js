import React from 'react'
import { Login,Signup } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup}/>
    </Stack.Navigator>
  )
}

export default AuthStack
