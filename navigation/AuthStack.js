import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {View} from 'react-native';
import OnboardingScreen from '../Screens/OnboardingScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const AuthStack = () => {
  // check for first launch
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }else{
        setIsFirstLaunch(false);
      }
    })
  }, []);


  if (isFirstLaunch === null){
    return null;
  }else if (isFirstLaunch == true){
    routeName = 'Onboarding';
  }else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name='Onboarding'
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#167C9D',
            shadowColor: '#167C9D',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button 
                name="long-arrow-left"
                size={25}
                backgroundColor="#167C9D"
                color="white"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
      
    </Stack.Navigator>
  )
  
}


export default AuthStack;