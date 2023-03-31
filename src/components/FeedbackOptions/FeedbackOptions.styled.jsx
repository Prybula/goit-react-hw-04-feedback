import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 36px 0;
  list-style: none;
`;

export const Button = styled.button`
  font-size: 26px;
  width: 150px;
  height: 50px;
  border: 1px solid black;
  box-shadow: 3px 3px 4px 1px rgba(100, 100, 100, 0);
  background-color: green;

  transition: scale 500ms ease-in;

  &: hover,
  &:focus {
    scale: 1.05;
  }
`;
