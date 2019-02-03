import styled from 'styled-components';

export const FormContainer = styled.section`
  margin: auto;
  margin-top: 60px;
  padding: 30px
  width: 600px;
  border: 2px solid #40739e;
  border-radius: 10px;
  box-shadow: 0 5px 20px #353b48;
  display: flex;
  background: #718093;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Source Sans Pro', sans-serif;

  @media (max-width: 750px) {
    width:300px;
  }

  @media (max-width: 450px) {
    width:200px;
  }
`;

export const StyledForm = styled.form`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    width: 170px;
  }
`;

export const FormTitle = styled.h1`
  margin: 0px 0px 20px 0px;
  color: #f5f6fa;
`;

export const WarningMessge = styled.div`
  height: 60px;
  width: 100%;
  margin: 0px 0px 20px 0px;
  box-sizing: border-box;
  background: #360e10;
  color: #f5f6fa;
  padding: 10px 20px 10px 20px;
  border: 1px solid black;
  box-shadow: 0 0 0 1px #551e21 inset, 0 5px 10px #353b48;
  text-align: center;
`;

export const FormButton = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #f5f6fa;
  background: #487eb0;
  outline: none;
  border: 2px solid #0097e6;
  transition: 0.4s;
  font-family: inherit;
  font-size: 1em;
  :hover {
    background: #0097e6;
  }

  @media (max-width: 450px) {
    font-size: 0.9em;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: #353b48;
  color: white;
  border: solid 1px #273c75;
  margin-bottom: 20px;
  padding: 5px;
  font-family: inherit;
  font-size: 1.2em;

  @media (max-width: 450px) {
    font-size: 0.9em;
  }
`;
