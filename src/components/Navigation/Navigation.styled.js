import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainNav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 2px 4px;
  background-color: blue;
  color: white;
  border: 2px solid black;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background-color: orange;
  }
`;
