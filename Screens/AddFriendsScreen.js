import React from "react";
import {TextInput,Text, View, TouchableOpacity, Button, FlatList} from "react-native";
import { useState, useContext } from "react";
import {collection, getDocs, query, where, doc, updateDoc, arrayUnion} from 'firebase/firestore';
import {db} from "../firebase";
import {AuthContext} from "../navigation/AuthProvider"


const AddFriendsScreen = () => {
  const {user} = useContext(AuthContext);
  const [findUser, setFindUser] = useState(null);
  const [usersFound, setUsersFound] = useState(null);
  const [loading, setLoading] = useState(null);
  
  const handleSearch = async () => {
    const list = [];
    try {

      const q = query(collection(db, "Users"), where("email", "==", findUser));
      // const querySnapshot = await getDocs(collection(db, "Posts"));
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        const {
          userId,
          date,
          postTime,
          content,
          postPublic,
          email
        } = doc.data();
        
        list.push({
          id: doc.id,
          userId,
          date,
          postTime,
          content,
          postPublic,
          email
        });
        
        setUsersFound(list);

        if (loading){
          setLoading(false);
        }
        console.log('myWorkouts')
      })
    } catch (e) {
      alert(e);
    }
    
  };

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

  const AddFriendsCard = ({followUser}) => {
    return(
      <View>
        <Text>
          {followUser.email}
        </Text>
        <Button 
          title="addFriend"
          onPress={() => handleFollowUser(followUser)}
        ></Button>
      </View>
    );
  };

  return(
    <View>
      <TextInput 
        placeholder="Look up friends by their username or email"
        onChangeText={(findUser) => setFindUser(findUser)}  
      >
        
      </TextInput>

      <Button title="Search" onPress={handleSearch}></Button>
      <FlatList
        data={usersFound}
        renderItem={({item}) => (
          <AddFriendsCard 
            followUser={item}
          />
        )}
        keyExtractor={item=>item.toString()}
        showsVerticalScrollIndicator={false}
      />
      

      
    </View>
  );
};

export default AddFriendsScreen;