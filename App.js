import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import Signup from './screens/signup';



const RootStack = createNativeStackNavigator({
  
  initialRouteName:'Login',
  screens: {
    Signup:{ screen:Signup,
              options:{
                title:'',
                headerTransparent:true
              }
            
    } ,
    Login: {
      screen:Login,
      options:{
        headerShown:false
      }
    }

  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}