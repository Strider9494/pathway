import styled from 'styled-components';

export const ProfileContainer = styled.main`
  width: 700px;
  position: relative;
  margin: 20px auto 20px auto;
  background: #dcdde1;
  padding: 50px;
  color: #2f3640;
  @media (max-width: 800px) {
    width: 400px;
  }

  @media (max-width: 450px) {
    width: 230px;
    padding: 20px;
  }
`;

export const ProfileTitle = styled.h1`
  margin-top: 0;
  font-size: 2em;
  @media (max-width: 450px) {
    font-size: 1.5em;
  }
`;

export const ProfileData = styled.div`
  font-size: 1.5em;
  font-family: 'Source Sans Pro', sans-serif;
  @media (max-width: 450px) {
    font-size: 1em;
  }
`;
