import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'; 

import AuthStack from './AuthStack';
import UserStack from './UserStack';




const RootNativigation = () => {

    const isAuth = false

  return (
    <NavigationContainer>
        {
            !isAuth
                ? <AuthStack/>
                : <UserStack/>
        }
    </NavigationContainer>
  )
}

export default RootNativigation

const styles = StyleSheet.create({})