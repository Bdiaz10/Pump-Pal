import React from 'react';
import {Card, PostTime, WorkoutTitle, WorkoutNotes, WorkoutInfo} from '../Styles/MyWorkoutStyles';
import {Button} from "react-native"

const MyWorkoutCard = ({item, navigation, deleteExercise}) => {

  

  return (
    <Card onPress={()=>navigation.navigate('FullWorkout', item)}>
      <WorkoutInfo>
        <WorkoutTitle>{item.content.title}</WorkoutTitle>
        <WorkoutNotes>{item.content.desc}</WorkoutNotes>
      </WorkoutInfo>

      
      <Button onPress={() => deleteExercise(item.content.title)} title={'Delete card'}></Button>
      
    </Card>

);
}

export default MyWorkoutCard;