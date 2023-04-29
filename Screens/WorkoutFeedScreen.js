import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, } from 'react-native';
import {auth} from "../firebase";
import {Container} from '../Styles/WorkoutFeedStyles';
import PostCard from '../components/PostCard';
import { FlatList } from 'react-native-gesture-handler';
import {db} from "../firebase"
import {collection, getDocs, query, where, or, onSnapshot, and, getDoc, doc} from 'firebase/firestore';



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
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(null);
  const [deleted, setDeleted ] = useState(false);

  const fetchPosts = async () => {
    const list = [];
    try {

      const currentUserDoc = await getDoc(doc(db, "Users", auth.currentUser.uid));
      const following = currentUserDoc.data().following;
      
      const q = query(collection(db, "Posts"),
          or(
            where("userId", "==", auth.currentUser.uid),
            where("userId", "in", following)
          )
          
      );
      const querySnapshot = await getDocs(q);
      
      querySnapshot.forEach((doc) => {
        const {
          userId,
          email,
          date,
          postTime,
          content,
          postPublic,
          likes,
          comments
        } = doc.data();
        
        list.push({
          id: doc.id,
          userId,
          email,
          date,
          postTime,
          content,
          postPublic,
          likes,
          comments
        });
        
        setPosts(list);

        if (loading){
          setLoading(false);
        }
        console.log('Posts', posts)
      })
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <Container>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostCard item={item} navigation={navigation}/>}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default WorkoutFeedScreen;

