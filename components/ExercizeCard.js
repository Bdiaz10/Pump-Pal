import React, {useState, useRef} from 'react';
import {Card, WorkoutTitle, Weight, Reps, SetWrapper, SetsContainer, ETitle} from "../Styles/ExercizeCardStyles";
import { Text, Button, KeyboardAvoidingView, TouchableOpacity, Pressable} from 'react-native';
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
    const newSet = {
      id: listData.length +1,
      weight: data.weight,
      reps: data.reps
    }
    setSets([...sets, newSet]);
  }

  
  return (
    // avoiding view isn't working
    
      <Card>
        <ETitle 
          value={exerciseTitle}
          placeholder="Exercise Title"
          onChangeText={(exerciseTitle) => setExerciseTitle(exerciseTitle)}
        />
        <Pressable onPress={handleAddSet} style={{alignSelf: 'center', paddingHorizontal: 5}}>
          <Text style={{color: '#167C9D', alignSelf: 'center', fontWeight: 'bold'}}>
            Add set
          </Text>
        </Pressable>
        <SetsContainer>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={listData}
            renderItem={({item}) => item}
            showsVerticalScrollIndicator={false} 
          />
        </SetsContainer>

        
      </Card>
     

  
  )
}

export default ExercizeCard;