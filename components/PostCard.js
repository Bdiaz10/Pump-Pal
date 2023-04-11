import React from 'react';

import {Card, UserImg, UserInfo, UserName, UserInfoText, PostTime, WorkoutTitle, WorkoutNotes, WorkoutInfo, Divider} from '../Styles/WorkoutFeedStyles';

const PostCard = ({item, navigation}) => {

  return (
      <Card onPress={()=>navigation.navigate('FullWorkout')}>
        <UserInfo>
          <UserImg source={item.userImg} />
          <UserInfoText>
            <UserName>{item.userName}</UserName>
            <PostTime>{item.postTime}</PostTime>
          </UserInfoText>

        </UserInfo>

        <WorkoutInfo>
          <WorkoutTitle>{item.title}</WorkoutTitle>
          <WorkoutNotes>{item.notes}</WorkoutNotes>
        </WorkoutInfo>
      </Card>

  );
};

export default PostCard;