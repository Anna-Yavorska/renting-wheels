import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 64px;
  display: flex;
  border: 4px solid black;
  border-radius: 4px;
  gap: 64px;
`;

export const Card = styled.div`
  height: 150px;
  width: 180px;
  border: 2px solid black;
  border-radius: 4px;
  background-color: azure;
`;

export const ListItem = styled.li`
margin-bottom: 32px;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
