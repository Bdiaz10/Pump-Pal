import React, { useContext } from 'react';
import {Container} from '../Styles/WorkoutFeedStyles';
import MyWorkoutCard from '../components/MyWorkoutCard';
import { FlatList } from 'react-native-gesture-handler';
import {UserImg, UserInfo} from '../Styles/MyWorkoutStyles'

const MyWorkouts = [
  {
    id: '1',
    postTime: '5 min ago',
    title: 'Heavy Push Day',
    notes: 'Chest focused push day, didn\'t do cable flys because shoulder was hurting. Finished with pushups',
    exercises: [
      {
        id: '1',
        title: "Bench Press",
        sets: [
          {
            id: '1',
            weight: 135,
            reps: 15
          },
          {
            id: '2',
            weight: 135,
            reps: 14
          },
          {
            id: '3',
            weight: 135,
            reps: 13
          }
        ]
      },
      {
        id: '2',
        title: "Inlcine Dumbell",
        sets: [
          {
            id: '1',
            weight: 60,
            reps: 15
          },
          {
            id: '2',
            weight: 60,
            reps: 15
          }
        ]
      },
      {
        id: '3',
        title: "Cable Flys",
        sets: [
          {
            id: '1',
            weight: 25,
            reps: 15
          },
        ]
      },
    ]
  },
  {
    id: '2',
    postTime: '2 days ago',
    title: 'Pull Day',
    notes: 'Focused on strength and went heavy on barbell rows',
    exercises: [
      {
            id: '1',
            title: " Barbell Rows",
            sets: [
              {
                id: '1',
                weight: 135,
                reps: 15
              },
              {
                id: '2',
                weight: 135,
                reps: 14
              },
              {
                id: '3',
                weight: 135,
                reps: 13
              }
            ]
          },
          {
            id: '2',
            title: "Pullups",
            sets: [
              {
                id: '1',
                weight: 135,
                reps: 15
              },
              {
                id: '2',
                weight: 135,
                reps: 14
              },
              {
                id: '3',
                weight: 135,
                reps: 13
              }
            ]
          },
          {
            id: '3',
            title: "Cable Rows",
            sets: [
              {
                id: '1',
                weight: 135,
                reps: 15
              },
              {
                id: '2',
                weight: 135,
                reps: 14
              },
              {
                id: '3',
                weight: 135,
                reps: 13
              }
            ]
          },
    ]
  },
]


const MyWorkoutScreen = ({navigation}) => {
  
  const deleteExercise = (ExerciseId) => {
    // search through exercises to find the id and delete
    alert("Exercise deleted " + ExerciseId)
  }
  
  return (
    <Container>
      <UserImg source={require('../assets/users/pika.png')} />
      <UserInfo>Pikachu's Workouts!</UserInfo>

      <FlatList
        data={MyWorkouts}
        renderItem={({item}) => (
          <MyWorkoutCard 
            item={item}
            navigation={navigation}
            deleteExercise={deleteExercise}
          />)}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default MyWorkoutScreen;

