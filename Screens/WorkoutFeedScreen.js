import React from 'react';
import { View, Text, } from 'react-native';

import {Container} from '../Styles/WorkoutFeedStyles';
import PostCard from '../components/PostCard';
import { FlatList } from 'react-native-gesture-handler';

const Posts = [
  {
    id: '1',
    userName: "Pikachu",
    userImg: require('../assets/users/pika.png'),
    postTime: '5 min ago',
    title: 'Heavy Push Day',
    notes: 'Chest focused push day, didn\'t do cable flys because shoulder was hurting. Finished with pushups',
  },
  {
    id: '2',
    userName: "Charzard",
    userImg: require('../assets/users/charz.png'),
    postTime: '2 days ago',
    title: 'Leg day',
    notes: 'Focused on strength and squats',
  },
  {
    id: '3',
    userName: "Squirtle",
    userImg: require('../assets/users/Squirt.png'),
    postTime: '3 days ago',
    title: 'Pull day',
    notes: '',
  },
  {
    id: '4',
    userName: "Pikachu",
    userImg: require('../assets/users/pika.png'),
    postTime: '3 days ago',
    title: 'Gotta Row to Grow',
    notes: 'Heavy on barbell rows and pullups. Light on biceps',
  },
  {
    id: '5',
    userName: "Squirtle",
    userImg: require('../assets/users/Squirt.png'),
    postTime: '4 days ago',
    title: 'Light legs',
    notes: 'Started with a run and finished with light legs',
  },
  {
    id: '6',
    userName: "Charzard",
    userImg: require('../assets/users/charz.png'),
    postTime: '1 week ago',
    title: 'Big Chest day',
    notes: 'High intensity and high volume',
  },

]

const WorkoutFeedScreen = ({navigation}) => {

  return (
    <Container>
      <FlatList
        data={Posts}
        renderItem={({item}) => <PostCard item={item} navigation={navigation}/>}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default WorkoutFeedScreen;

