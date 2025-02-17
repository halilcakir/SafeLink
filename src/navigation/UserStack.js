import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomePage } from '../components';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { HeaderShownContext, HeaderTitle } from '@react-navigation/elements';


const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen  name='Home' component={HomePage}/>
    </Stack.Navigator>
        
    
  )
}

export default UserStack
