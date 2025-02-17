import { StyleSheet, Text, View ,ActivityIndicator } from 'react-native'
import React from 'react'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Loading = () => {
  return (
    

    
     
    <View style={styles.loadingView}>
      <ActivityIndicator size={'large'} color={'#29126e'}/>
      <Text style={{fontSize:'20', marginTop:20}}>Loading..</Text>
    </View>



  )
}

export default Loading

const styles = StyleSheet.create({
    loadingView:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        zIndex:1,
        backgroundColor:'#A3D1C6',
        
        
        },

})