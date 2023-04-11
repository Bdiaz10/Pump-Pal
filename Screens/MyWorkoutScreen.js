import React, { useContext } from 'react';
import {Container} from '../Styles/WorkoutFeedStyles';
import MyWorkoutCard from '../components/MyWorkoutCard';
import { FlatList } from 'react-native-gesture-handler';
import {UserImg, UserInfo} from '../Styles/MyWorkoutStyles'

const Posts = [
  {
    id: '1',
    postTime: '5 min ago',
    title: 'Heavy Push Day',
    notes: 'Chest focused push day, didn\'t do cable flys because shoulder was hurting. Finished with pushups',
  },
  {
    id: '2',
    postTime: '2 days ago',
    title: 'Leg day',
    notes: 'Focused on strength and squats',
  },
  {
    id: '3',
    postTime: '3 days ago',
    title: 'Pull day',
    notes: '',
  },
  {
    id: '4',
    postTime: '3 days ago',
    title: 'Gotta Row to Grow',
    notes: 'Heavy on barbell rows and pullups. Light on biceps',
  },
  {
    id: '5',
    postTime: '4 days ago',
    title: 'Light legs',
    notes: 'Started with a run and finished with light legs',
  },
  {
    id: '6',
    postTime: '1 week ago',
    title: 'Big Chest day',
    notes: 'High intensity and high volume',
  },

]


const MyWorkoutScreen = ({navigation}) => {
  return (
    <Container>
      <UserImg source={require('../assets/users/pika.png')} />
      <UserInfo>Pikachu's Workouts!</UserInfo>

      <FlatList
        data={Posts}
        renderItem={({item}) => (
          <MyWorkoutCard 
            item={item}
            navigation={navigation}
          />)}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
      />

    </Container>
  );
};

export default MyWorkoutScreen;

