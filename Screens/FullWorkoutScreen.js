import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { WorkoutTitle, WorkoutNotes, TitleWrapper, Card, WCard, WCardTitle, SetWrapper, Weight, Reps, Sets, SetsContainer } from '../Styles/FullWorkoutSyles';
import {useRoute} from '@react-navigation/native';
 
 const WorkoutCard = ({title, sets}) => {
  return (
    <WCard>
      <WCardTitle>{title}</WCardTitle>

      <FlatList style={styles.SList}
        data={sets}
        keyExtractor={item=>item.id}
        renderItem={({item}) => {
          return(
            <SetsContainer>
              
              <SetWrapper>
                <Sets>{item.id}</Sets>
                <Weight>{item.weight}</Weight>
                <Reps>{item.reps}</Reps>
              </SetWrapper>
            </SetsContainer>
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

      <TitleWrapper>
        <WorkoutTitle>{route.params.title}</WorkoutTitle>
        <WorkoutNotes>{route.params.notes}</WorkoutNotes>
      </TitleWrapper>

      <FlatList style={styles.list}
        data={route.params.exercises}
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
    padding: 20,
  },
  list: {
    width: 375
  },
  SList: {
    marginBottom: 20
  }
})