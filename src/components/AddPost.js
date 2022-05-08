import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
// import {db} from './../firebase/fireabase-config';
import {v4 as uuid} from 'uuid';
import PropTypes from 'prop-types';
// import {doc, setDoc, getDocs} from 'firebase.firestore';
// import NativeImagePickerIOS from 'react-native/Libraries/Image/NativeImagePickerIOS';
// import ImagePicker from 'react-native-image-crop-picker';

function AddPost({navigation}){

  // const [titleInput, setTitle] = useState('');
  // const onChangeTitle = titleValue => setTitle(titleValue);
  // const [descriptionInput, setDescription] = useState('');
  // const onChangeDescription = descriptionValue => setDescription(descriptionValue);
  // const [imageState, setImage] = useState('');

  // function takePhoto(){
  //   NativeImagePickerIOS.openCamera({
  //     width: 400,
  //     height: 500,
  //     cropping: true,
  //   }).then(image => {
  //     const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
  //     setImage(imageUri);
  //   });
  // }

  // const onPressAddPost = async () => {

  // }


  return(
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcc9a8',
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