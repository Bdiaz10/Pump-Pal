import React, { useState, useRef, createContext, useContext } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList } from 'react-native';
import { InputTitleField, InputTitleWraper, InputNotesField, Container} from '../Styles/AddPostStyles';
import ExercizeCard from '../components/ExercizeCard';


import {AuthContext} from "../navigation/AuthProvider"
import {db} from "../firebase"
import { collection, addDoc } from "firebase/firestore"; 


const AddPostScreen = () => {
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [workoutDescription, setWorkoutDescription] = useState('');
  const [exercises, setExercises] = useState([]);
  const [listData, setListData] = useState([]);
  const [postPublic, setPostPublic] = useState(true);

  const {user} = useContext(AuthContext);

  const handleAddExercise = () => {
    setListData([...listData, <ExercizeCard getExercises={getExercises}/>]);
    
  }

  const handleSubmit = async () => {
    const fullWorkout = {
      title: workoutTitle,
      desc: workoutDescription,
      exercises: exercises
    }

    try{
      const docRef = await addDoc(collection(db, "Posts"), {
        userId: user.uid,
        email: user.email,
        date: Date.now(),
        postTime: new Date(),
        content: fullWorkout,
        postPublic: postPublic,
        likes: null,
        comments: null
      })
      alert("Success" + docRef.id);
      
    }catch (e) {
      console.log(e);
    }

  }

  const getExercises = (data) => {
    const newExercise = {
      id: listData.length +1,
      title: data.title,
      sets: data.sets
    }
    setExercises([...exercises, newExercise])
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
       onPress={() => handleSubmit()}
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