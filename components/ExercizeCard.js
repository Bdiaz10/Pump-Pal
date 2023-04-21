import React, {useState, useRef} from 'react';
import {Card, WorkoutTitle, Weight, Reps, SetWrapper, SetsContainer, ETitle} from "../Styles/ExercizeCardStyles";
import { Text, Button, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { FlatList, Swipeable } from 'react-native-gesture-handler';

const Set = ({data, getSets}) => {
  const [weight, setWeight] = useState('');
  const [reps, setReps ] = useState('');
  

  getSets({
    weight: weight,
    reps: reps
  })

  return (
    
      <SetWrapper>
        <Weight 
          value={weight}
          placeholder="Enter Weight" 
          keyboardType='numeric'
          onChangeText={(weight) => {
            setWeight(weight);
            
          }} 
        ></Weight>


        <Reps 
          value={reps}
          placeholder="Enter Reps" 
          keyboardType='numeric' 
          onChangeText={(reps) => {
            setReps(reps);
          
          }} 
        ></Reps>
      </SetWrapper>

    )
}



const ExercizeCard = ({getExercises}) => {
  const [exerciseTitle, setExerciseTitle] = useState('');
  const [listData, setListData] = useState([]);
  const [sets, setSets] = useState([]);

  getExercises({
    title: exerciseTitle,
    sets: sets
  });
  
  const handleAddSet = () => { 
    setListData([...listData, <Set getSets={getSets} />]);
  }

  const getSets = (data) => {
    setSets([...sets, data]);
  }

  
  return (
    // avoiding view isn't working
    <KeyboardAvoidingView
      behavior={'padding'}
      style={{flex:1}}
      >
      <Card>
        <ETitle 
          value={exerciseTitle}
          placeholder="Exercise Title"
          onChangeText={(exerciseTitle) => setExerciseTitle(exerciseTitle)}
        />
        <Button title="Add Set" onPress={handleAddSet}></Button>
        <SetsContainer>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={listData}
            renderItem={({item}) => item}
            showsVerticalScrollIndicator={false} 
          />
        </SetsContainer>

        
      </Card>
     

    </KeyboardAvoidingView>
  )
}

export default ExercizeCard;