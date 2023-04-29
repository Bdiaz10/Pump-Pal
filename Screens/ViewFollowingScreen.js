import React from "react";
import {View, Text, FlatList} from "react-native";
import { useState, useEffect } from "react";
import {auth} from "../firebase";
import {doc, getDoc, getDocs, query, collection, where} from 'firebase/firestore';
import {db} from "../firebase";

const ProfileCard = ({item}) => {
  return (
    <View>
      <Text>
        {item.email}
      </Text>
      
    </View>
  )
}


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
          userImg: user.userImg
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
    <View>
      <Text>
        Your Following List
      </Text>

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

export default ViewFollowingScreen;