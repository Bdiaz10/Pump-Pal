import React, {useContext, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import * as Font from 'expo-font'

import {windowHeight, windowWidth} from '../utils/Dimensions';
import {AuthContext} from "../navigation/AuthProvider";
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext);
  const [isFontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Pacifico-Regular': require('../assets/fonts/Pacifico-Regular.ttf'),
    });
  
    setFontLoaded(true);
  };
  
  useEffect(() => {
    loadFonts();
  }, []);

  // const fetchFonts = async () =>
  //   await Font.loadAsync({
  //     'Great Vibes': require('../assets/fonts/GreatVibes-Regular.ttf'),
  // });
  // let [fontsLoaded] = useFonts({
  //   Pacifico_400Regular,
  // });
  // const [fontsLoaded] = useFonts({
  //   'Pacifico': require('../assets/fonts/Pacifico-Regular.ttf'),
  // });
  

  if (!isFontLoaded) {
    return null; // or a loading indicator
  }

  return (

    <View style={styles.container}>
      {/* <Image
        source={require('../assets/favicon.png')}
        style={styles.logo}
      /> */}

      <Text style={styles.text}>Pump Pal </Text>

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

      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text styles={styles.navButtonText}>
          Forgot Password?
        </Text>
      </TouchableOpacity>


      {/* <SocialButton
        buttonTitle="Sign in with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      /> */}


      <TouchableOpacity
        style={styles.createAccountButton} 
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have account? Create here
        </Text>
      </TouchableOpacity>
    </View>

  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#167C9D',
    height: windowHeight
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 50,
    marginBottom: 40,
    marginTop: 30,
    color: 'white',
  },
  navButton: {
    marginTop: 15,
    
  },
  forgotButton: {
    marginVertical: 35,
  },
  createAccountButton: {
  
  },
  navButtonText: {
    
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    // fontFamily: 'Lato-Regular',
  },
});