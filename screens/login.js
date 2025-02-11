import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faLink } from '@fortawesome/free-solid-svg-icons'
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';



export default function Login() {

    const [isPressed, SetisPressed] = useState(false) 
    const navigation = useNavigation()

  return (


    <View style={styles.container}>
       <FontAwesomeIcon icon={faLink} size={125} style={{color: "#29126e", }} />
        <View style={styles.loginContent}>
      
        <Text style={
            {
                fontSize:32,
                textAlign:'center'
                
            }}>
            Welcome</Text>

           <View style={styles.InputContainer}>
           <Icon name="user" size={25} color="#888" style={styles.icon} />
           <TextInput placeholder="Username" style={styles.textinput}></TextInput>
           </View>
            
            <View style={styles.InputContainer}>
            <Icon name='lock' size={25} color="#888" ></Icon>
            <TextInput placeholder='Password' style={styles.textinput}></TextInput>
            </View>

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
            <Pressable style={styles.signupPressable} onPress={()=> navigation.navigate('Signup')}>
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

        fontSize:18,
        height:50,
        textAlign:'center',
        marginLeft:20

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
    },
    InputContainer:{
        flexDirection: 'row', // Icon ve TextInput'u yatayda hizaladık
        alignItems: 'center', // Dikeyde hizalama
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginVertical: 10,
        borderBottomWidth:1
        
    }
})