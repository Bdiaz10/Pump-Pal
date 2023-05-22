import React from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import { useState, useEffect } from "react";
import {auth} from "../firebase";
import {doc, getDoc, getDocs, query, collection, where} from 'firebase/firestore';
import {db} from "../firebase";
import ProfileCard from '../components/ProfileCard';


const ViewFollowingScreen = ({navigation}) => {
  const [following, setFollowing] = useState(null); 

  const fetchFollowing = async () => {
    const currentUserDoc = await getDoc(doc(db, "Users", auth.currentUser.uid));
    const following = currentUserDoc.data().following;

    if (following && following.length > 0){

      const followingUsersSnapshot = await getDocs(query(collection(db, "Users"), where("userId", "in", following)));
  
      const followingUsers = [];
      followingUsersSnapshot.forEach((doc) => {
        const user = doc.data();
        followingUsers.push({
          userId: user.userId,
          userName: user.userName,
          email: user.email,
          createdAt: user.createdAt,
          userImg: user.userImg,
          following: user.following,
          followers: user.followers
        });
      });
      setFollowing(followingUsers);
    } else{
      setFollowing([]);
    }
  }

  
  useEffect(() => {
    fetchFollowing();
  }, []);

  return (
    <View style={styles.container}>

      <FlatList
        data={following}
        renderItem={({item}) => (
          <ProfileCard 
            item={item}
            navigation={navigation}
          />)}
        keyExtractor={item=>item.userId}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20
  },
  
})

export default ViewFollowingScreen;