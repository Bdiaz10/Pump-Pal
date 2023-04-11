import React from 'react';
import {View, Text, Image, TouchableOpacity, Button, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

// customize dots
const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';

  return (
    <View
      style={{
        width:5,
        height:5,
        marginHorizontal: 3,
        backgroundColor
      }}
    >
    </View>
  )
}

// customize other onboarding attributes like this
const Skip = ({...props}) => (
  <Button
    title='Skip'
    color='#000000'
    {...props}
  />
);

const Next = ({...props}) => (
  <Button
    title='Next'
    color='#000000'
    {...props}
  />
);

// customize component styles as well
const Done = ({...props}) => (
  <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
  >
    <Text style ={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    DotComponent={Dots}
    onSkip={()=> navigation.replace("Login")}
    onDone={()=> navigation.replace("Login")}

    pages={[
      {
        backgroundColor: '#13AFC2',
        image: <Image source={require('../assets/favicon.png')} />,
        title: 'Braxtons app Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper'
      },
      {
        backgroundColor: '#0F8A99',
        image: <Image source={require('../assets/favicon.png')} />,
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper'
      },
      {
        backgroundColor: '#0B6570',
        image: <Image source={require('../assets/favicon.png')} />,
        title: 'Onboarding 3',
        subtitle: 'Done with React Native Onboarding Swiper'
      },
    ]}
    
    />
  );
};

export default OnboardingScreen;
