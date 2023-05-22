import React from "react";
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from "react-native";
import { useState, useEffect } from "react";
import {auth} from "../firebase";
import {doc, getDoc, getDocs, query, collection, where} from 'firebase/firestore';
import {db} from "../firebase";
import ProfileCard from '../components/ProfileCard';


const ViewFollowersScreen = ({navigation}) => {
  const [followers, setFollowers] = useState(null); 

  const fetchFollowers = async () => {
    const currentUserDoc = await getDoc(doc(db, "Users", auth.currentUser.uid));
    const followers = currentUserDoc.data().followers;

    if (followers && followers.length > 0){

      const followersUsersSnapshot = await getDocs(query(collection(db, "Users"), where("userId", "in", followers)));
  
      const followersUsers = [];
      followersUsersSnapshot.forEach((doc) => {
        const user = doc.data();
        followersUsers.push({
          userId: user.userId,
          userName: user.userName,
          email: user.email,
          createdAt: user.createdAt,
          userImg: user.userImg,
          followers: user.followers,
          following: user.following
        });
      });
      setFollowers(followersUsers);
    } else{
      setFollowers([]);
    }
  }

  
  useEffect(() => {
    fetchFollowers();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>
        Your Followers List
      </Text> */}

      <FlatList
        data={followers}
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
export default ViewFollowersScreen;