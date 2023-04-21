import React from 'react';
import {Card, PostTime, WorkoutTitle, WorkoutNotes, WorkoutInfo} from '../Styles/MyWorkoutStyles';
import {Button} from "react-native"

const MyWorkoutCard = ({item, navigation, deleteExercise}) => {

  

  return (
    <Card onPress={()=>navigation.navigate('FullWorkout', item)}>
      <WorkoutInfo>
        <WorkoutTitle>{item.title}</WorkoutTitle>
        <WorkoutNotes>{item.notes}</WorkoutNotes>
      </WorkoutInfo>

      
      <Button onPress={() => deleteExercise(item.title)} title={'Delete card'}></Button>
      
    </Card>

);
}

export default MyWorkoutCard;