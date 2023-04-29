import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import FormButton from "../components/FormButton"
import {AuthContext} from "../navigation/AuthProvider";

const ProfileScreen = ({navigation}) => {

  const {user, logout} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text>Welcome to the Profile screen</Text>
      <Text>User: {user.email}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()}>
      </FormButton>
      <FormButton buttonTitle="Seach People" onPress={() => navigation.navigate("AddFriends")}>
      </FormButton>
      <FormButton buttonTitle="View Following" onPress={() => navigation.navigate("ViewFollowing")}>
      </FormButton>
      <FormButton buttonTitle="View Followers" onPress={() => navigation.navigate("ViewFollowers")}>
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