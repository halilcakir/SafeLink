import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'



export default function Login() {

    const [isPressed, SetisPressed] = useState(false) 

  return (


    <View style={styles.container}>
       <FontAwesomeIcon icon={faEye} size={125} style={{color: "#29126e", }} />
        <View style={styles.loginContent}>
      
        <Text style={
            {
                fontSize:32,
                textAlign:'center'
                
            }}>
            Welcome</Text>

            <Text>Username:</Text>
            <TextInput placeholder="Username" style={styles.textinput}></TextInput>
            <Text>Password:</Text>
            <TextInput placeholder='Password' style={styles.textinput}></TextInput>
            

        </View>
        <Pressable onPressIn={()=>{SetisPressed(true)}} 
                   onPressOut={()=>{SetisPressed(false)}} 
                   style={ 

            isPressed ? 
            styles.loginPressableonPress : styles.loginPressable }>
               
                <Text style={{color:'white',
                        fontSize:18

                }}>Login</Text>

            </Pressable>
            <Pressable style={styles.signupPressable}>
                <Text style={{
                    color:'white',
                    textAlign:'center',
                    fontSize:16
                
                }}
                >
                    SignUp</Text>
            </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
    },
    loginContent:{
        
        height:300,
        justifyContent:"space-evenly",
        width:"80%",
        
    },
    textinput:{

        borderWidth:1,
        height:50,
        borderRadius:10,
        textAlign:'center'

    },
    loginPressable:{
        marginTop:50,
        width:'80%',
        height:50,
        borderWidth:1,
        backgroundColor:'blue',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        color:'#f0f8ff'
    },
    loginPressableonPress:{
        marginTop:50,
        width:'80%',
        height:50,
        borderWidth:1,
        backgroundColor:'#6495ed',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        color:'#f0f8ff'
    },
    signupPressable:{
        marginTop:30,
        backgroundColor:'#29126e',
        width:'30%',
        height:50,
        borderRadius:10,
        justifyContent:'center'
    }
})