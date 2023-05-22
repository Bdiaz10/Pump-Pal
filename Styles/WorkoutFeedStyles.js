import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  // justify-content: center;
  // align-items: center;
  background-color: white;
  // border-top-left-radius: 50px;
  // border-top-right-radius: 50px;
  padding:0px;
`;

export const Background = styled.View`
  z-index: -10;
`

export const Card = styled.TouchableOpacity`
  background-color: #f8f8f8;
  width: 100%;
  border-radius: 0px;
  margin-bottom: 4px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px;
`;

export const UserImg = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 7px;
  margin-left: 10px;
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
  margin-bottom: 2px;
`;

export const WorkoutTitle = styled.Text`
  font-family: 'Lato-Regular';
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
  font-size: 12px;
  margin-top: 3px;

`;

export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 4px;
    margin-bottom: 5px;
`;

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    background-color: ${props => props.active ? '#2e64e515' : 'transparent'}
`;

export const InteractionText = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    font-weight: bold;
    color: ${props => props.active ? '#2e64e5' : '#333'};
    margin-top: 5px;
    margin-left: 5px;
`;


