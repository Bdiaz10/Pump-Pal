import React from 'react';
import {Card, PostTime, WorkoutTitle, WorkoutNotes, WorkoutInfo} from '../Styles/MyWorkoutStyles';

const MyWorkoutCard = ({item, navigation}) => {
  return (
    <Card onPress={()=>navigation.navigate('FullWorkout')}>
      <WorkoutInfo>
        <WorkoutTitle>{item.title}</WorkoutTitle>
        <WorkoutNotes>{item.notes}</WorkoutNotes>
      </WorkoutInfo>
    </Card>

);
}

export default MyWorkoutCard;