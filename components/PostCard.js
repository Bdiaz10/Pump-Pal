import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Card, UserImg, UserInfo, UserName, UserInfoText, PostTime, WorkoutTitle, WorkoutNotes, WorkoutInfo, InteractionWrapper, Interaction, InteractionText} from '../Styles/WorkoutFeedStyles';

const PostCard = ({item, navigation}) => {

  likeIcon = item.liked ? 'heart' : 'heart-outline';
  likeIconColor = item.liked ? '#2e64e5' : '#333';

  if (item.likes == 1) {
    likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Like';
  }

  if (item.comments == 1) {
    commentText = '1 Comment';
  } else if (item.comments > 1) {
    commentText = item.comments + ' Comments';
  } else {
    commentText = 'Comment';
  }

  return (
      <Card onPress={()=>navigation.navigate('FullWorkout', item)}>
        <UserInfo>
          {/* <UserImg source={item.userImg} /> */}
          <UserInfoText>
            <UserName>{item.email}</UserName>
            <PostTime>{item.date}</PostTime>
          </UserInfoText>

        </UserInfo>

        <WorkoutInfo>
          <WorkoutTitle>{item.content.title}</WorkoutTitle>
          <WorkoutNotes>{item.content.desc}</WorkoutNotes>
        </WorkoutInfo>

        <InteractionWrapper>
          <Interaction active={item.liked}>
            <Ionicons name={likeIcon} size={25} color={likeIconColor} />
            <InteractionText active={item.liked}>{likeText}</InteractionText>
          </Interaction>
          <Interaction>
            <Ionicons name="md-chatbubble-outline" size={25} />
            <InteractionText>{commentText}</InteractionText>
          </Interaction>
          {/* {user.uid == item.userId ? (
            <Interaction onPress={() => onDelete(item.id)}>
              <Ionicons name="md-trash-bin" size={25} />
            </Interaction>
          ) : null} */}
      </InteractionWrapper>
      </Card>

  );
};

export default PostCard;