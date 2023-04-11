import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import FormButton from "../components/FormButton"
import {AuthContext} from "../navigation/AuthProvider";

const EditProfileScreen = () => {

  const {user, logout} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text>Edit Profile</Text>
      
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
})