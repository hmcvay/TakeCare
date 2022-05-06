import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function Home({navigation}){
  return(
    <View style={styles.container}>
      <Text>This is a home screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;