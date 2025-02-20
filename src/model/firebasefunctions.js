import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';



class Firestorefunctions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doclist: [],
      link: '',
      title: '',
      modalVisible: false,
    };
  }

  // Veriyi Firestore'a ekleme
  sendData = async (linkTitle, linkContent, email) => {
    const data = {
      uuid: 0,
      title: linkTitle,
      link: 'http://' + linkContent,
    };

    try {
      const docRef = await addDoc(collection(db, email), data);
      console.log('Document written with ID: ', docRef.id);
      this.setState({ modalVisible: false, link: '', title: '' });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // Firestore'dan veri silme
  deleteData = async (docid) => {
    try {
      await deleteDoc(doc(db, this.props.email, docid));
      console.log('Document deleted');
      this.getData(this.props.email); // Silme işleminden sonra veriyi tekrar al
    } catch (err) {
      console.log('Error:', err);
    }
  };

  // Veriyi Firestore'dan alma
  getData = async (email) => {
    try {
      const querySnapshot = await getDocs(collection(db, email));
      const dataList = [];
      querySnapshot.forEach((doc) => {
        dataList.push({ id: doc.id, ...doc.data() });
      });
      this.setState({ doclist: dataList });
    } catch (e) {
      console.error('Error getting documents: ', e);
    }
  };

  // Component yüklendiğinde verileri almak için
  componentDidMount() {
    const { email } = this.props;
    if (email) {
      this.getData(email);
    }
  }

  render() {
    const { doclist } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Documents List</Text>
        {doclist.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text>{item.title}</Text>
            <Text>{item.link}</Text>
            <Button title="Delete" onPress={() => this.deleteData(item.id)} />
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 15,
  },
});

export default Firestorefunctions;
