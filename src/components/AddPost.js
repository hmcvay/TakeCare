import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {db} from './../firebase/fireabase-config';
import {v4 as uuid} from 'uuid';
import PropTypes from 'prop-types';
import {doc, setDoc, getDocs, Timestamp} from 'firebase.firestore';


const AddPost = ({navigation}) => {

  const [titleInput, setTitle] = useState('');
  const onChangeTitle = titleValue => setTitle(titleValue);
  const [descriptionInput, setDescription] = useState('');
  const onChangeDescription = descriptionValue => setDescription(descriptionValue);


  const onPressAddPost = async () => {
    if (titleInput !== ''){
      const id = uuid();
      await setDoc(doc(db, 'posts', id), {
        id: id,
        title: titleInput,
        description: descriptionInput,
        time: Timestamp.fromDate(newDate()),
        is_met: false,
      });
    }

  }


  return(
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efeee9',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('PostList')}
        style={{
          width: '80%',
          padding: 15,
          color: '#fcc9a8',
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>ADD POST FORM COMING</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView> 
  )
};

export default AddPost;