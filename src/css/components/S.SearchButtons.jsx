import styled from 'styled-components';

export const ButtonsContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  padding: .8rem;
  font-size: 1rem;
  border: none;
  background-color: #c4c4c4;
  border-radius: 5px;
  margin: 10px;
  opacity: 1;

  &:hover {
    // background-color: #d1d8df;
    cursor: pointer;
    opacity: 0.8;
  }
`;
