import React from 'react';
import {Card, PostTime, WorkoutTitle, WorkoutNotes, WorkoutInfo} from '../Styles/MyWorkoutStyles';
import {Button, Text, View} from "react-native"

const MyWorkoutCard = ({item, navigation, deleteExercise}) => {

  

  return (
    <Card onPress={()=>navigation.navigate('FullWorkout', item)}>
      <WorkoutInfo>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <WorkoutTitle>{item.content.title}</WorkoutTitle>
          <Text style={{marginTop: 15,}}>10/22/23</Text>
        </View>

        <WorkoutNotes>{item.content.desc}</WorkoutNotes>
      </WorkoutInfo>

      
      {/* <Button onPress={() => deleteExercise(item.content.title)} title={'Delete card'}></Button> */}
      
    </Card>

);
}

export default MyWorkoutCard;