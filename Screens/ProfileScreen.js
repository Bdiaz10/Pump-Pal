import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import FormButton from "../components/FormButton"
import {AuthContext} from "../navigation/AuthProvider";

const ProfileScreen = () => {

  const {user, logout} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text>Welcome to the Profile screen</Text>
      <Text>User: {user.email}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()}>
    
      </FormButton>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
})