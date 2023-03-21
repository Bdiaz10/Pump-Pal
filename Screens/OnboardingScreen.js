import React from 'react';
import {View, Text, Image, TouchableOpacity, Button, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

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
    onDone={()=> navigation.navigate("Login")}

    pages={[
      {
        backgroundColor: '#33beff',
        // image: <Image source={require('../assets/')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper'
      },
      {
        backgroundColor: '#336fff',
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper'
      },
      {
        backgroundColor: '#5b33ff',
        title: 'Onboarding 3',
        subtitle: 'Done with React Native Onboarding Swiper'
      },
    ]}
    
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});