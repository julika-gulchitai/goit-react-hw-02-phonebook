import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid lightblue;
  flex-direction: column;
gap: 20px
  margin: 0 auto;
  justify-content: center;
   height: '100vh';
          display: 'flex';
          align-items: center;
          font-size: 20px;
  
`;
export const StyledForm = styled.form`
  border: 1px solid lightblue;
  background-color: #c9ddf0;
  box-shadow: 2px 2px 7px 3px lightgray;
  width: calc((10vh + 10vw) * 1.1);
  padding: 40px 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h2`
  color: #4d5a66;
  font-size: 40px;
`;

export const StyledBtn = styled.button`
  padding: 10px 10px;
  margin-top: 20px;
  border-radius: 10px;
  background: #71b4f7;
  color: white;
  font-size: 20px;
  border: 1px solid lightblue;
  &:hover {
    background: #72b39c;
    color: #71b4f7;
  }
`;
export const StyledInput = styled.input`
  padding: 5px 10px;
  font-size: 10px;

  border: none;
  outline: none;
  border: 0.5px solid;
  margin-bottom: 10px;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: grey;
`;
export const StyledContacts = styled.li`
  color: grey;
  text-decoration: none;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 5px 20px;
  font-size: 10px;
  background: #a3d1c1;
  border: none;
  outline: none;
  border: 0.5px solid;
  margin-bottom: 10px;
  border-radius: 10px;
`;
