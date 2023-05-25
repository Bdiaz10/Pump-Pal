import React, {useContext} from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { WorkoutTitle, WorkoutNotes, TitleWrapper, Card, WCard, WCardTitle, SetWrapper, Weight, Reps, Sets, SetsContainer } from '../Styles/FullWorkoutSyles';
import {useRoute} from '@react-navigation/native';
import { windowWidth } from '../utils/Dimensions';
 
 const WorkoutCard = ({title, sets}) => {
  return (
    <WCard>
      <WCardTitle>{title}</WCardTitle>

      <FlatList style={styles.SList}
        data={sets}
        keyExtractor={item=>item.id}
        renderItem={({item}) => {
          return(
              
              <SetWrapper>
                {/* <Sets>{item.id}</Sets> */}
                <Weight>{item.weight}</Weight>
                <Reps>{item.reps}</Reps>
              </SetWrapper>
          )
        }}
      />

    </WCard>
  )
 }

const FullWorkoutScreen = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>

      {/* <View style={{backgroundColor: 'gray', width: windowWidth, padding: 8, border }}>
        <Text style={{color: 'black'}}>{route.params.email}</Text>
      </View> */}
      <TitleWrapper>
        <WorkoutTitle>{route.params.content.title}</WorkoutTitle>
        <WorkoutNotes>{route.params.content.desc}</WorkoutNotes>
      </TitleWrapper>

      <FlatList style={styles.list}
        data={route.params.content.exercises}
        renderItem={({item}) => <WorkoutCard title={item.title} sets={item.sets}></WorkoutCard>}
        keyExtractor={item=>item.id}
      >
      </FlatList> 
    </View>
  )
}

export default FullWorkoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  list: {
    width: windowWidth,
    paddingHorizontal: 10

  },
  SList: {
    marginBottom: 20
  }
})