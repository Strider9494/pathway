import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderConteiner = styled.header`
  height: 100px;
  background: #40739e;
  box-shadow: 0px 3px 3px #273c75;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.div`
  color: #e1b12c;
  font-size: 3rem;
  font-family: 'Francois One', sans-serif;
`;

export const NavConteiner = styled.nav`
  position: absolute;
  right: 0;
  width: 30%;
  text-align: center;
  margin-left: 40px;
  color: #e1b12c;
  font-size: 1.5rem;
  font-family: 'Francois One', sans-serif;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #e1b12c;
`;

export const LogOutBut = styled.button`
  border: none;
  text-decoration: none;
  background: none;
  cursor: pointer;
  color: #e1b12c;
  font-size: 1.5rem;
  font-family: 'Francois One', sans-serif;
`;
