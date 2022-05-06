import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

function AddPost({navigation}){
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