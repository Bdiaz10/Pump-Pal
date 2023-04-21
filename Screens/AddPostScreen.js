import React, { useState, useRef, createContext } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList } from 'react-native';
import { InputTitleField, InputTitleWraper, InputNotesField, Container} from '../Styles/AddPostStyles';
import ExercizeCard from '../components/ExercizeCard';

const AddPostScreen = () => {
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [workoutDescription, setWorkoutDescription] = useState('');
  const [exercises, setExercises] = useState([]);
  const [listData, setListData] = useState([]);

  const handleAddExercise = () => {
    setListData([...listData, <ExercizeCard getExercises={getExercises}/>]);
    
  }

  const handleSubmit = () => {
    const fullWorkout = {
      id: 0,
      date: '',
      title: workoutTitle,
      desc: workoutDescription,
      exercises: exercises
    }

    alert(JSON.stringify(fullWorkout))
  }

  const getExercises = (data) => {
    setExercises([...exercises, data])
  }


  return (
    <View style={styles.container}>
      <InputTitleWraper>
        <InputTitleField
          value={workoutTitle}
          placeholder="Title your Workout"
          onChangeText={(workoutTitle) => setWorkoutTitle(workoutTitle)} 
        />
        <InputNotesField
          value={workoutDescription}
          placeholder="Workout Description"
          numberOfLines={2}
          onChangeText={(workoutDescription) => setWorkoutDescription(workoutDescription)}
        />
      </InputTitleWraper>
      
      <Button
       title="Add Exercise"
       onPress={handleAddExercise}
       />
      
        <FlatList style={styles.list}
          data={listData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => item}
          showsVerticalScrollIndicator={false}
          windowSize={5}
        />

      <Button
       title="Submit"
       onPress={handleSubmit}
      />

    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  list: {
    width: 375
  },
})