import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import FormButton from "../components/FormButton"
import {AuthContext} from "../navigation/AuthProvider";
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { useState } from 'react';
import {doc, getDoc, getDocs, query, collection, where} from 'firebase/firestore';
import {db, auth} from "../firebase";
import {windowHeight, windowWidth} from '../utils/Dimensions';
import {useRoute} from '@react-navigation/native';


const UserData = ({data, label, ...rest}) => {
  return(
    <View>
      <TouchableOpacity {...rest}>
        <Text style={styles.info}>
          {data}
        </Text>

        <Text style={styles.info}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  )

}



const FriendProfileScreen = ({navigation, item}) => {
  const {user} = useContext(AuthContext);
  const route = useRoute();
  const [followerCount, setFollowerCount] = useState(null);
  const [followingCount, setFollowingCount] = useState(null);

  
  const getFollowersSize =  async () => {
    const currentUserDoc = await getDoc(doc(db, "Users", route.params.userId));
    const followers = currentUserDoc.data().followers;
    const following = currentUserDoc.data().following;

    const nFollowers = followers.length
    const nFollowing = following.length
    return [nFollowers, nFollowing];
    


  }


  const getWorkoutsSize = () => {

  }

  const handleFollowUser = async (followUser) => {
    try{
      // add user to folliwng
      const userRef = doc(db, "Users", user.uid)
      await updateDoc(userRef, {
        following: arrayUnion(followUser.userId)
      })
  
      // add yourself to their followers
      const followUserRef = doc(db, "Users", followUser.userId);
      await updateDoc(followUserRef, {
        followers: arrayUnion(user.uid)
      })
  
    }catch (e){
      console.log(e);
    }
   alert("you are now following " + followUser.email + "!!")
  
  
  }

  useEffect(() => {
    const fetchData = async () => {
      const [followerCount, followingCount] = await getFollowersSize();
      setFollowerCount(followerCount);
      setFollowingCount(followingCount);
    };
    fetchData();
  }, [getFollowersSize]);
  
  return (
    <View style={styles.container}>
      <View style={styles.heading}>

        <Image style={styles.userImg} source={require('../assets/users/pika.png')} />
        <Text style={styles.userName}>{route.params.email}</Text>

        <View style={styles.infoContainer}>
          <UserData
            data={31}
            label={"Workouts"}
          ></UserData>

          <UserData
            data={followingCount}
            label={"Following"}
            onPress={() => navigation.navigate("ViewFollowing")}
          ></UserData>

          <UserData
            data={followerCount}
            label={"Followers"}
            onPress={() => navigation.navigate("ViewFollowers")}
          ></UserData>
        </View>

      <TouchableOpacity style={styles.followButton} onPress={() => {handleFollowUser(route.params)}}>
        <Text style={styles.followText}>
          Follow
        </Text>
      </TouchableOpacity>
      </View>



      
    </View>
  );
};

export default FriendProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 20,
  },
  heading: {
    flex: 1
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  info: {

    textAlign: 'center'
  },
  userImg: {
    width: 65,
    height: 65,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center'
  },
  userName: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
      marginBottom: 5
  },
  followButton: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  followText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  } 

  
})