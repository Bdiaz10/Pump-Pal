import styled from 'styled-components';

export const WorkoutTitle = styled.Text`
font-size: 24px;
text-align: center;
width: 90%;
margin-top: 8px;
`;

export const WorkoutNotes = styled.Text`
font-size: 15px;
text-align: center;
width: 90%;
margin-top: 2px;
`;

export const TitleWrapper = styled.View`
height: 75px;
align-items: center;
width: 100%;
background-color: #2e64e515;
border-radius: 15px;
`

export const Card = styled.View`
  background-color: #f8f8f8;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const WCard = styled.View`
background-color: #f8f8f8;
width: 100%;
align-self: center;
border-radius: 10px;
margin-bottom: 3px;
margin-top: 2px;
`;

export const WCardTitle = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 10px;
`;


export const SetsContainer = styled.View`
  // margin-bottom: 20px;
`;

export const SetWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
 
`;

export const Weight = styled.TextInput`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 65px;
`;

export const Reps = styled.TextInput`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
  margin-right: 65px;
`;

export const Sets = styled.TextInput`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 65px;
`;