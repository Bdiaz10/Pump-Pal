import React, { useState, useRef, createContext, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { InputTitleField, InputTitleWraper, InputNotesField, Container} from '../Styles/AddPostStyles';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import ExercizeCard from '../components/ExercizeCard';


import {AuthContext} from "../navigation/AuthProvider"
import {db} from "../firebase"
import { collection, addDoc } from "firebase/firestore"; 


const AddPostScreen = ({ route, navigation }) => {
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [workoutDescription, setWorkoutDescription] = useState('');
  const [exercises, setExercises] = useState([]);
  const [listData, setListData] = useState([]);
  const [postPublic, setPostPublic] = useState(true);
  
  const  postState  = route.params;
  
  // useEffect(() => {
  //   setPostPublic(postState);
  // }, [postPublic]);

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
    setPostPublic(postState.postState);

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

  // const handleLockClick = () => {
  //   alert('change privacy')
  // }
  // let privacy = () => {
  //   if (postPublic){
      
  //     return "Public";
  //   }else {
     
  //     return "Private";
  //   }
  // }


  return (
    <View style={styles.container}>
      <InputTitleWraper>
        <InputTitleField
          value={workoutTitle}
          placeholder="Title your workout"
          onChangeText={(workoutTitle) => setWorkoutTitle(workoutTitle)} 
          />
        <InputNotesField
          value={workoutDescription}
          placeholder="Workout description"
          numberOfLines={2}
          onChangeText={(workoutDescription) => setWorkoutDescription(workoutDescription)}
          />
          {/* <Button
            title={privacy}
            color={'red'}
            onPress={() => {setPostPublic(!postPublic)}}
          /> */}

          {/* <TouchableOpacity onPress={() => {
            setPostPublic(!postPublic)
            setPrivacyColor(!postPublic ? '#167C9D' : 'red');
            }}
            style={{backgroundColor: privacyColor, width: 350, alignItems: 'center', borderRadius: 20, marginTop: 5}}
            >
            <Text style={{color: 'white'}} >{privacy()}</Text>
          </TouchableOpacity> */}
      </InputTitleWraper>
      <Pressable onPress={handleAddExercise} style={{alignSelf: 'center', paddingHorizontal: 5}}>
          <Text style={{color: '#167C9D', alignSelf: 'center', fontWeight: 'bold', fontSize:16}}>
            Add Exercise
          </Text>
        </Pressable>
      
      
      <FlatList style={styles.list}
        data={listData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => item}
        showsVerticalScrollIndicator={false}
        windowSize={5}
      />

      {/* <Button
       title="Submit"
       onPress={() => handleSubmit()}
      /> */}

      <TouchableOpacity onPress={() => alert('submit')} style={styles.submitButton}  >
        <Text style={styles.submitText}>
          Post {postState.postState ? 'Public' : 'Private'}
          
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor:'white'
  },
  list: {
    width: windowWidth,
    
  },
  submitButton: {
    position: 'absolute',
    bottom: 0,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 16,
    backgroundColor: '#167C9D',
    padding: 8,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  } ,
})