import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: none;
  font-weight: bold;
  border-radius: 50%;
  padding: 50px;
  text-align: center;
  display: inline-block;
  font-size: 24px;
  margin: 4px 8px;
`;

export const Start = styled(Button)`

  background-color: ${props => (props.clicked==='Start') ? "green" : "purple"};
`;

export const Split = styled(Button)`
  background-color: ${props => (props.disabledStatus===false) ? "orange" : "lightgray"};
`;

export const Reset = styled(Button)`
  background-color: ${props => (props.disabledStatus===false) ? "blue" : "lightgray"};
`;

export const Div = styled.div`
  display: inline-flex;
  margin-bottom: 50px;
`;
