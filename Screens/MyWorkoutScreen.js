import React, { useState, useEffect, useContext } from 'react';
import {Container, Background} from '../Styles/WorkoutFeedStyles';
import MyWorkoutCard from '../components/MyWorkoutCard';
import { FlatList } from 'react-native-gesture-handler';
import {UserImg, UserInfo} from '../Styles/MyWorkoutStyles'
import {collection, getDocs, query, where, orderBy, onSnapshot} from 'firebase/firestore';
import {db} from "../firebase";

import {AuthContext} from "../navigation/AuthProvider"

// const MyWorkouts = [
//   {
//     id: '1',
//     postTime: '5 min ago',
//     title: 'Heavy Push Day',
//     notes: 'Chest focused push day, didn\'t do cable flys because shoulder was hurting. Finished with pushups',
//     exercises: [
//       {
//         id: '1',
//         title: "Bench Press",
//         sets: [
//           {
//             id: '1',
//             weight: 135,
//             reps: 15
//           },
//           {
//             id: '2',
//             weight: 135,
//             reps: 14
//           },
//           {
//             id: '3',
//             weight: 135,
//             reps: 13
//           }
//         ]
//       },
//       {
//         id: '2',
//         title: "Inlcine Dumbell",
//         sets: [
//           {
//             id: '1',
//             weight: 60,
//             reps: 15
//           },
//           {
//             id: '2',
//             weight: 60,
//             reps: 15
//           }
//         ]
//       },
//       {
//         id: '3',
//         title: "Cable Flys",
//         sets: [
//           {
//             id: '1',
//             weight: 25,
//             reps: 15
//           },
//         ]
//       },
//     ]
//   },
//   {
//     id: '2',
//     postTime: '2 days ago',
//     title: 'Pull Day',
//     notes: 'Focused on strength and went heavy on barbell rows',
//     exercises: [
//       {
//             id: '1',
//             title: " Barbell Rows",
//             sets: [
//               {
//                 id: '1',
//                 weight: 135,
//                 reps: 15
//               },
//               {
//                 id: '2',
//                 weight: 135,
//                 reps: 14
//               },
//               {
//                 id: '3',
//                 weight: 135,
//                 reps: 13
//               }
//             ]
//           },
//           {
//             id: '2',
//             title: "Pullups",
//             sets: [
//               {
//                 id: '1',
//                 weight: 135,
//                 reps: 15
//               },
//               {
//                 id: '2',
//                 weight: 135,
//                 reps: 14
//               },
//               {
//                 id: '3',
//                 weight: 135,
//                 reps: 13
//               }
//             ]
//           },
//           {
//             id: '3',
//             title: "Cable Rows",
//             sets: [
//               {
//                 id: '1',
//                 weight: 135,
//                 reps: 15
//               },
//               {
//                 id: '2',
//                 weight: 135,
//                 reps: 14
//               },
//               {
//                 id: '3',
//                 weight: 135,
//                 reps: 13
//               }
//             ]
//           },
//     ]
//   },
// ]


const MyWorkoutScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [myWorkouts, setMyWorkouts] = useState(null);
  const [loading, setLoading] = useState(null);
  
  const fetchMyWorkouts = async () => {
    
      const unsubscribe = onSnapshot(
        query
        (collection(db, "Posts"), 
        where("userId", "==", user.uid)
        ),
        
        (snapshot) => {
            const list = [];
            snapshot.forEach((doc) => {
              const {
                userId,
                date,
                postTime,
                content,
                postPublic
              } = doc.data();
              
              list.push({
                id: doc.id,
                userId,
                date,
                postTime,
                content,
                postPublic
              });
            })
            setMyWorkouts(list);
            setLoading(false);
          },
          (error) => {
            alert(error);
          }
      )
      return unsubscribe;
        
  };

  useEffect(() => {
    fetchMyWorkouts();
  }, []);

  

  const deleteExercise = (ExerciseId) => {
    // search through exercises to find the id and delete
    alert("Exercise deleted " + ExerciseId)
  }
  
  return (
 

      <Container>
        {/* <UserImg source={require('../assets/users/pika.png')} />
        <UserInfo>{user.email}</UserInfo> */}
        

        <FlatList
          data={myWorkouts}
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

