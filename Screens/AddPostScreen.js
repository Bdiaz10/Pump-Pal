import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import FormButton from "../components/FormButton"
import {AuthContext} from "../navigation/AuthProvider";

const AddPostScreen = () => {

  const {user, logout} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text>Add Post</Text>
      
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
})