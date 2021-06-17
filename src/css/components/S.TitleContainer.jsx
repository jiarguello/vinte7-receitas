import styled from 'styled-components';

export const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  text-transform: uppercase;
`;

export const RecomendationContainer = styled.section`
  overflow-x: auto;
  white-space: nowrap;
  margin: 3rem 0;
`;

export const Card = styled.section`
  width: 50%;
  height: 18rem;
  display: inline-block;

  img {
    width: 100%;
  }
`;

export const StartButton = styled.button`
  bottom: 0px;
  margin: auto;
  position: fixed;
  width: 50%;
`;

export const ButtonFavorite =styled.button`
  heigth: 100px;
`

export const H1 = styled.h1`
  margin: 3vh 10% 1vh 10%;
  font-size: 4vh;
`

export const Hr = styled.hr`
  width: 80%;
`

export const Div = styled.div`
  display: flex;
  justify-content: right;
  padding-left: 90% ;
  margin-top: 2vh;
  width: 60%;
`

export const Buttons = styled.button`
  background-color: white;
  border-radius: 10%;
  width: 7vh;
  border: none;
`
