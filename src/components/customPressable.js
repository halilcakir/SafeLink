import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomPressable = ({buttonText, textColor,doThis}) => {
  return (
    <View>
      <Pressable style={styles.Pressable} onPress={doThis}>
        <Text style={{color:textColor}}> {buttonText}</Text>
      </Pressable>
    </View>
  )
}

export default CustomPressable

const styles = StyleSheet.create({
    Pressable:{
        justifyContent:'center',
        width: 100,
        height: 50,
        backgroundColor:'blue',
        alignItems:'center',
        borderRadius: 20,
        padding: 10,
        elevation: 2
    }
})
