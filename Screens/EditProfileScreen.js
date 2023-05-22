import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import FormButton from "../components/FormButton"
import {AuthContext} from "../navigation/AuthProvider";
import FormInput from "../components/FormInput";


const handleSubmit = () => {
  alert("Saved");
}

const EditProfileScreen = () => {

  const {user, logout} = useContext(AuthContext)
  const [username, setUsername] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [profilePicture, setProfilePicture] = useState(require('../assets/profile-holder.jpeg'))

  return (
    <View style={styles.container}>
      <Image source={profilePicture} style={styles.profilePic}></Image>

      <FormInput
        labelValue={username}
        onChangeText={(username) => setUsername(username)} 
        placeHolderText={'Username'}
        iconType="edit"
        // keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={firstName}
        onChangeText={(firstName) => setFirstName(firstName)} 
        placeHolderText={'First name'}
        iconType="edit"
        // keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={lastName}
        onChangeText={(lastName) => setLastName(lastName)} 
        placeHolderText={'Last name'}
        iconType="edit"
        // keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormButton
        buttonTitle="Save Changes"
        onPress={handleSubmit}
        
      />

      
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  profilePic: {
    height: 75,
    width: 75,
    borderRadius: 8,
    marginBottom: 10
  }
})