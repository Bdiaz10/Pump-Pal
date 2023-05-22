import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, } from 'react-native';
import {auth} from "../firebase";
import {Container} from '../Styles/WorkoutFeedStyles';
import PostCard from '../components/PostCard';
import { FlatList } from 'react-native-gesture-handler';
import {db} from "../firebase"
import {collection, getDocs, query, where, or, onSnapshot, and, getDoc, doc} from 'firebase/firestore';


const WorkoutFeedScreen = ({navigation}) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(null);
  const [deleted, setDeleted ] = useState(false);

  const fetchPosts = async () => {
    const currentUserDoc = await getDoc(doc(db, "Users", auth.currentUser.uid));
    const following = currentUserDoc.data().following;
    const unsubscribe = onSnapshot(
      query(
        collection(db, "Posts"),
        or(
          where("userId", "==", auth.currentUser.uid),
          where("userId", "in", following)
        )
      ),
      (snapshot) => {
        const list = [];
        snapshot.forEach((doc) => {
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
        });

        setPosts(list);
        setLoading(false);
      },
      (error) => {
        alert(error);
      }
    );

    return unsubscribe;
  }

  useEffect(() => {
    fetchPosts();
  }, [] );


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

