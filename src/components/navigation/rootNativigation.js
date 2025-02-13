import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'; 
import { useSelector, useDispatch } from 'react-redux';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import app from '../../../firebaseConfig';





const RootNativigation = () => {

  const {isAuth} = useSelector((state)=>state.user)


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