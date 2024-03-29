import React, { useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from "../navigation/AuthProvider";
import {windowHeight, windowWidth} from '../utils/Dimensions';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Create an account</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)} 
        placeHolderText={'Email'}
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)} 
        placeHolderText={'Password'}
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} 
        placeHolderText={'Confirm Password'}
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign up"
        onPress={() => register(email, password)}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By Registering, you are accepting our
        </Text>
        <TouchableOpacity onPress={() => alert("Terms of service Clicked!")}>
          <Text style={[styles.color_textPrivate, {color: "#e88832"}]}>Terms of service</Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: "#e88832"}]}>Privacy Policy</Text>
      </View>

{/* 
      <SocialButton
        buttonTitle="Sign up with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      /> */}


      <TouchableOpacity
        style={styles.navButton} 
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>
          Have an account? Sign in
        </Text>
      </TouchableOpacity>
    </View>

  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor:'#167C9D',
    height: windowHeight
  },
  text: {
    // fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: 'white',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    // fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    // fontFamily: 'Lato-Regular',
    color: 'white',
  },
});