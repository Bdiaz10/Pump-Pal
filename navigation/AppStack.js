import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from './AuthProvider';
import ProfileScreen from '../Screens/ProfileScreen';
import EditProfileScreen from '../Screens/EditProfileScreen';
import MyWorkoutScreen from '../Screens/MyWorkoutScreen';
import WorkoutFeedScreen from '../Screens/WorkoutFeedScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import FullWorkoutScreen from '../Screens/FullWorkoutScreen';
import ViewFollowingScreen from '../Screens/ViewFollowingScreen';
import ViewFollowersScreen from '../Screens/ViewFollowersScreen';
import AddFriendsScreen from '../Screens/AddFriendsScreen';
import FriendProfileScreen from '../Screens/FriendProfileScreen'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyWorkoutStack = ({navigation}) => {
  const [postState, setPublicPost] = useState(true);
  const [button, setButton] = useState("unlock")

  const handleLockClick = () => {
    setPublicPost(!postState);
    setButton(!postState ? "lock" : "unlock");
    navigation.navigate('AddPost', {postState: postState});
  }

  return(
  <Stack.Navigator>
    <Stack.Screen
      name="MyWorkout"
      component={MyWorkoutScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#167C9D',
          // fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
          // fontWeight: 700 
        },
        headerStyle: {
          shadowColor: 'white',
          backgroundColor: 'white',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={18}
              backgroundColor="white"
              color="#167C9D"
              onPress={() => {
                navigation.navigate('AddPost', {postState: true})
                setButton("unlock");
                }
              }
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'white',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color='#167C9D' />
          </View>
        ),
        headerRight: () => {
          
          return(
            <View style={{marginRight: 0}}>
              <FontAwesome5.Button
                name={button}
                color={'#167C9D'}
                backgroundColor={'white'}
                size={18}
                onPress={handleLockClick}

              />
            </View>
          )
        }
        
      }}
    />
    <Stack.Screen
      name="FullWorkout"
      component={FullWorkoutScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'white',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={22} color="#167C9D" />
          </View>
        ),
      }}
    />

      
  </Stack.Navigator>
)};

const WorkoutFeedStack = ({navigation}) => {
  return(
  <Stack.Navigator>
    <Stack.Screen
      name="WorkoutFeed" 
      component={WorkoutFeedScreen} 
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#167C9D',
          // fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          backgroundColor: 'white',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="search"
              backgroundColor="#fff"
              color="#167C9D"
              size={18}
              onPress={() => navigation.navigate("AddFriends")}
            />
          </View>
        ),
      }}
      
      />

  <Stack.Screen
      name="FullWorkout"
      component={FullWorkoutScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'white',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#167C9D" />
          </View>
        ),
      }}
    />

  <Stack.Screen
      name="AddFriends"
      component={AddFriendsScreen}
      options={{
        headerTitle: "",     
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#167C9D" />
          </View>
        ),
      }}
    />

  <Stack.Screen
      name="FriendProfile"
      component={FriendProfileScreen}
      options={{
        headerTitle: "Friend Screen",
        headerTitleAlign: 'center',
        headerBackTitleVisible: true,
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
)};


const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profiles"
      component={ProfileScreen}
      options={{
        headerTitleStyle: {
          color:"#167C9D"
        },
        // headerShown: false,
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="edit"
              backgroundColor="#fff"
              color="#167C9D"
              size={20}
              onPress={() => navigation.navigate("EditProfile")}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="ViewFollowing"
      component={ViewFollowingScreen}
      options={{
        headerTitle: 'Following',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => alert('clicked!')}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="ViewFollowers"
      component={ViewFollowersScreen}
      options={{
        headerTitle: 'Followers',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => alert('clicked!')}
            />
          </View>
        ),
      }}
    />

    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: "Edit Profile",
        headerTitleAlign: 'center',
        headerBackTitleVisible: true,
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="FriendProfile"
      component={FriendProfileScreen}
      options={{
        headerTitle: "Friend Screen",
        headerTitleAlign: 'center',
        headerBackTitleVisible: true,
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {

  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#167C9D',
          
        }}>
        <Tab.Screen
          name="MyWorkouts"
          component={MyWorkoutStack}
          options={({route}) => ({
            // tabBarLabel: 'MyWorkouts',
            // tabBarVisible: route.state && route.state.index === 0,
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name="barbell-sharp"
                color={color}
                size={size}
              />
            ),
            headerShown: false
          })}
        />
        <Tab.Screen
          name="WorkoutFeeds"
          component={WorkoutFeedStack}
          options={({route}) => ({
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name="people"
                color={color}
                size={size}
              />
            ),
            headerShown: false
          })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
      </Tab.Navigator>
 
    );
};

export default AppStack;