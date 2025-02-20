import { Pressable, StyleSheet, Text, View, FlatList, TextInput, Modal, Linking } from 'react-native';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import CustomPressable from '../components/customPressable';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';







const HomePage = () => {

  const {email} = useSelector((state)=>state.user)
  const [doclist, setdoclist] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');

  



  const handleLinkPress = (link) => {
      Linking.openURL(link).catch((err) => console.error('An error occurred', err));
   
  };




  // Veriyi Firestore'a ekleyen fonksiyon
  const sendData = async (linkTitle, linkContent, email) => {
  
    
    const data = {
      uuid:0,
      title:linkTitle ,
      link:linkContent ,
    };
  
    try {

     
      const docRef = await addDoc(collection(db,  email), data);
      console.log('Document written with ID: ', docRef.id);
      setModalVisible(false); // Modal'ı kapat
      setLink('')
      setTitle('')

    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };


  // Firestoreda veri silme

  const deleteData = async(email,docid)=>{
    console.log(email)
    
    try{

      await deleteDoc(doc(db, email, docid ))

    }catch (err){
      console.log("Hata mesajı:",err)

    }

  }
  

  // Firestore'dan veri çekme fonksiyonu
  const getData = async (email) => {

    try {
      const querySnapshot = await getDocs(collection(db, email));
      const dataList = [];
      querySnapshot.forEach((doc) => {
        dataList.push({ id: doc.id, ...doc.data() });
      });
      setdoclist(dataList); // Veriyi doclist state'ine kaydet
    } catch (e) {
      console.error('Error getting documents: ', e);
    }
  };




  // FlatList ile her elemanı render etmek için
  const Item = ({ title, link , docid }) => (
    <View style={styles.item}>
      <Text style={{fontFamily:'Montesserat', fontWeight:'700',
        fontSize:18,
        marginBottom:5
      }}>{title}</Text>



      <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            
      }}> 
      <Pressable onPress={()=>{handleLinkPress(link)}}>
        <Text style={{width:200}}>{link}</Text></Pressable> 

        <Pressable onPress={()=>{ deleteData(email,docid)
                                  getData(email)
                                 

        }}
                   
        
        ><Text style={{fontWeight:'700',

        }}>Delete</Text></Pressable>
        </View>
        

       
    </View>
  );


  useEffect(() => {
   
    getData(email);
    // Sayfa yüklendiğinde verileri al
  }, []);


  return (

    <View style={styles.container}>

      <SafeAreaView style={{height:'80%'}}>
    

          <FlatList
            data={doclist}
            style={styles.FlatList} // State'deki doclist'i veritabanı verisi olarak alıyoruz
            renderItem={({ item }) => (
        
              <Item title={item.title} link={item.link} docid={item.id}/>
            
          
            )}
            keyExtractor={(item) => item.id} // Her eleman için key olarak doc.id kullanıyoruz
          />
        
      </SafeAreaView>

      {/* Yeni Veri Ekleme butonları */}


      <View style={styles.functions}>



        <CustomPressable  buttonText="New Link" 
                          textColor={'white'} 
                          doThis={() => setModalVisible(true)} />


       
      </View>



      {/* Modal: Başlık ve Link eklemek için */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
                                setModalVisible(false);
                              }
                        }
      >


        <View style={styles.centeredView}>

          <View style={styles.modalView}>

            <Pressable style={styles.modalCloseButton} onPress={() => { setModalVisible(false),    
                                                                        setLink('')
                                                                        setTitle('')}}>


              <Text style={styles.modalCloseButtonText}>X</Text>

            </Pressable>

            <Text style={styles.modalText}>Add a New Link</Text>
            
            
            <TextInput
              style={styles.modalLinkInput}
              value={title}
              placeholder="Title"
              onChangeText={(text) => setTitle(text)}
            />


            <TextInput
              style={styles.modalLinkInput}
              value={link}
              placeholder="Enter a link"
              onChangeText={(text) => setLink(text)}
            />



            <Pressable  style={[styles.button, styles.buttonClose]} 
                        onPress={() => { 
                                          sendData(title, link, email), 
                                          getData(email)
                                        }
                                }
            >

              <Text style={styles.textStyle}>Save</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
   padding:0,
   margin:0,
   
  },
  item: {
    flex:1,
    backgroundColor: '#f9c2ff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    width: '80%',
    justifyContent:'space-evenly'
  },
  functions: {
    marginTop:25,
    flexDirection:'row',
    justifyContent:'space-evenly'
   
    
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    width: '80%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    width: 100,
    height: 40,
  },
  buttonClose: {
    backgroundColor: '#D69ADE',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  modalText: {
    alignSelf: 'center',
    fontWeight: '600',
  },
  modalLinkInput: {
    borderWidth: 0.5,
    borderRadius: 20,
    width: '100%',
    height: 50,
    textAlign: 'center',
    marginBottom: 15,
  },
  modalCloseButton: {
    backgroundColor: 'black',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    right: -10,
    top: -10,
  },
  modalCloseButtonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
    alignSelf: 'center',
  },
  FlatList:{
    width:'auto'
  }
});
