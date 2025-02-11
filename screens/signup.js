import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';





export default function Signup() {
  return (
    <View style={styles.container} >
    <View style={styles.forms} >

    <Text style={{fontSize:32, textAlign:'center', paddingBottom:25}}>SignUp</Text>

    <View style={styles.inputContainer}>
      <Icon name="user" size={25} color="#888" style={styles.icon} />
      <TextInput style={styles.textinput} placeholder='Username'></TextInput>
    </View>


    <View style={styles.inputContainer}>
        <Icon name='envelope' size={20} color="#888"></Icon>
    <TextInput style={styles.textinput}
         placeholder='Email' inputMode='email'> 
         </TextInput>
    </View>
   


    <View style={styles.inputContainer}>
    <Icon name='lock' size={25} color="#888" ></Icon>
    <TextInput style={styles.textinput} placeholder='Password' secureTextEntry={true} ></TextInput></View>
    
    <View style={styles.inputContainer}>
    <Icon name='lock' size={25} color="#888" ></Icon>
    <TextInput style={styles.textinput} placeholder='Confirm Password' secureTextEntry={true}></TextInput>
    </View>
    <View style={styles.PressableContainer}>
    <Pressable style={styles.signupPressable}>
        <Text style={{color:'white', fontWeight:'600', fontSize:18}}>SignUp</Text>
    </Pressable>
    </View>
    </View>
      
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    }
    ,
    forms:{
     
        width:'80%',
        height:'400',
        justifyContent:'space-evenly'

    },
    textinput:{
       
        height:50,
        borderRadius:10,
        textAlign:'center',
        fontSize:20,
        textAlign:'left',
        marginLeft:20


        
    },inputContainer: {
        flexDirection: 'row', // Icon ve TextInput'u yatayda hizaladık
        alignItems: 'center', // Dikeyde hizalama
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginVertical: 10,
        borderBottomWidth:1
      },
 
      input: {
        flex: 1, // TextInput'un genişliğini otomatik olarak ayarlayalım
        height: 40,
      },

      signupPressable:{
        backgroundColor:'#7886C7',
        marginTop:50,
        width:'40%',
        alignItems:'center',
        borderRadius:10,
        height:50,
        justifyContent:'center',
       

      },PressableContainer:{
        flex:1,
        alignItems:'center',
    
      }

})