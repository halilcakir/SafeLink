import { Pressable, StyleSheet, Text, View , FlatList,TextInput} from 'react-native'
import React from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebaseConfig';
import CustomPressable from '../components/customPressable';
import { Modal } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = () => {

  const sendData = async()=>{
        try {
          const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    } 
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ];
    
    const Item = ({title}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  
    const [modalVisible, setModalVisible] = useState(false);



  return (
    <View style={styles.container}>
      
      
      <SafeAreaView style={styles.container}>
      <Text>My Links</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
       <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
            
          <View style={styles.centeredView}>
          
            <View style={styles.modalView}>
            <Pressable style={styles.modalCloseButton}  onPress={() => setModalVisible(!modalVisible)} ><Text style={styles.modalCloseButtonText}>X</Text></Pressable>
              <Text style={styles.modalText}>Add New Link</Text>
              <TextInput style={styles.modalLinkInput} placeholder='Title'></TextInput>
              <TextInput style={styles.modalLinkInput} placeholder='Enter a link'></TextInput>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    </SafeAreaView>
    
    <View style={styles.functions}>
    <CustomPressable buttonText="New" textColor={"white"} doThis={()=>{setModalVisible(true)}}/>
    </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    
    height:'80%'
   
  },
  HomePageTitle:{
    fontFamily:'Arial'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
    width:'70%'
  
  },
  functions:{
    flex:1,
    alignItems:'center'
  },
  
  centeredView: {
    flex: 1,
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    width:'80%',
    height:'40%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:100,
    height:40
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
   alignSelf:'center',
   fontWeight:'600'
  },
  modalLinkInput:{
    borderWidth:0.5,
    borderRadius:20,
    width:'100%',
    height:50,
    textAlign:'center'
  },
  modalCloseButton:{
    backgroundColor:'black',
    height:40,
    width:40,
    borderRadius:20,
    justifyContent:'center',
    position:'absolute',
    zIndex:1,
    right:-10,
    top:-10
    
    
  

    
    
  },modalCloseButtonText:
    {color:'white',fontWeight:'800',fontSize:18, alignSelf:'center'
}
  
})