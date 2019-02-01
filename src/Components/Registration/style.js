import styled from 'styled-components';

export const PasswordGuide = styled.div`
  ${props => (props.open ? 'display: block;' : 'display: none;')};
  background: #40739e;
  margin-bottom: 20px;
  position: relative;
  color: #f5f6fa;
  border: 1px solid #192a56;
  box-shadow: 0px 3px 3px #273c75;
  ::before {
    content: '';
    position: absolute;
    z-index: 2;
    background: #40739e;
    height: 10px;
    width: 10px;
    border-style: solid;
    border-width: 1px 0px 0px 1px;
    border-color: #192a56;
    transform: translate(15px,-7px) rotate(45deg);
`;

export const GuideList = styled.ul``;
