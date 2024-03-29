import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import FormButton from "../components/FormButton"
import {AuthContext} from "../navigation/AuthProvider";
// import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { useState } from 'react';
import {doc, getDoc, getDocs, query, collection, where} from 'firebase/firestore';
import {db, auth} from "../firebase";
import {windowHeight, windowWidth} from '../utils/Dimensions';

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

const ProfileScreen = ({navigation}) => {

  const {user, logout} = useContext(AuthContext);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  
  const getFollowersSize =  async () => {
    const currentUserDoc = await getDoc(doc(db, "Users", auth.currentUser.uid));
    const followers = currentUserDoc.data().followers;
    const following = currentUserDoc.data().following;

    const nFollowers = followers.length
    const nFollowing = following.length
    return [nFollowers, nFollowing];
    


  }


  const getWorkoutsSize = () => {

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


          <Image style={styles.userImg} source={require('../assets/profile-holder.jpeg')} />
       

        <Text style={styles.userName}>{user.email}</Text>

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
      </View>


      

      
    <TouchableOpacity onPress={logout} style={styles.logoutButton}  >
      <Text style={styles.logoutText}>
        Logout
      </Text>
    </TouchableOpacity>
      
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 20,
    backgroundColor: "white"
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
      marginBottom: 15
  },
  logoutButton: {
    position: 'absolute',
    bottom: 0,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 16,
    backgroundColor: '#167C9D',
    padding: 8,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  } ,


});
  

