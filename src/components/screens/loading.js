import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const loading = () => {
  return (
    <View>
      <Text>loading..</Text>
    </View>
  )
}

export default loading

const styles = StyleSheet.create({
    loadingView:{
        flex:1,
        textAlign:'center',
        justifyContent:'center'
        
        }
})