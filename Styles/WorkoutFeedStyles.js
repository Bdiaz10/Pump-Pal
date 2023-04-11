import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  // justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
`;

export const Card = styled.TouchableOpacity`
  background-color: #f8f8f8;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
`;

export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius:;
`;

export const UserInfoText = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const PostTime = styled.Text`
  font-size: 12px;

`;

export const WorkoutInfo = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
`;

export const WorkoutTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Divider = styled.View`
  border-bottom-color: #dddd;
  border-bottom-width: 1px;
  width: 90%;
  align-self: center;
`;

export const WorkoutNotes = styled.Text`
  font-size: 13px;
  margin-top: 3px;

`;

