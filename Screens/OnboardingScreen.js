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
        backgroundColor: '#167C9D',
        // image: <Image source={require('../assets/favicon.png')} />,
        title: 'Welcome to Pump Pal!',
        subtitle: 'Track your workouts while connecting with friends'
      },
      {
        backgroundColor: '#167C9D',
        // image: <Image source={require('../assets/favicon.png')} />,
        title: 'Track your workouts',
        subtitle: 'Track workouts daily and measure your progress over time'
      },
      {
        backgroundColor: '#167C9D',
        // image: <Image source={require('../assets/favicon.png')} />,
        title: 'Share workouts',
        subtitle: 'Share your workouts with your followers or keep your workouts private to yourself'
      },
    ]}
    
    />
  );
};

export default OnboardingScreen;
