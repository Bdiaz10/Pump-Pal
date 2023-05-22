import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image} from "react-native";

const UserInfo = ({data, title}) => {
  return(
    <View >
      <Text style={styles.info} >
        {data}
      </Text>

      <Text style={styles.info}>
        {title}
      </Text>
    </View>
  )
}

const ProfileCard = ({item, navigation}) => {

  return (
    <TouchableOpacity onPress={() => navigation.navigate('FriendProfile', item)} style={styles.card} >
      <View style={styles.heading}>

        <Image style={styles.userImg} source={require('../assets/users/pika.png')} />


        <View>

          <Text style={styles.userName}>
            {item.email}
          </Text>

          <Text style={styles.lastWorkout}>
            last workout posted 24hr ago
          </Text>
        </View>
      </View>

      <View style={styles.userInfo}>
        <UserInfo
          data={15}
          title={'Workouts'}
        >
        </UserInfo>
        <UserInfo
          data={item.followers.length}
          title={'Followers'}
        >
        </UserInfo>
        <UserInfo
          data={item.following.length}
          title={'Following'}
        >
        </UserInfo>
      </View>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    paddingBottom: 10,
    paddingTop: 10
  },
  userName: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  lastWorkout: {
    marginLeft: 10,
    fontSize: 11
  },
  userInfo: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-evenly'
    
  },
  info: {
    textAlign: 'center',
    paddingRight: 10,
    fontSize: 12,
    // fontWeight: 'bold'
  },
  heading: {
    marginLeft: 10,
    marginBottom: 5,
    flexDirection: 'row'
  },
  userImg: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
  }
  

  
})
export default ProfileCard;