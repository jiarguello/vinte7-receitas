import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ThumbNail = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
`;

export const TitleContainer = styled.section`
  display: flex;
  justify-content: space-around;
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

export const H3 = styled.h3`
  align-self: left;
  margin: 0vh 10% 2vh 10%;
  font-size: 2.5em;
`

export const Label = styled.label`
  display: block;
  padding: 0vh 0vh 2vh 5%;
  font-size: 1.5em;
`

export const Input = styled.input`
  padding-left: 100px;
`

export const P = styled.p`
  text-align: justify;
  margin: 5vh 10% 5vh 10%;
  font-size: 1.5em;
`

export const ButtonFinish = styled.button`
  width: 80%;
  height: 7vh;
  align-self: center;
  margin: 0vh 0vh 5vh 0vh;
  color: white;
  font-size: 2em;
  background-color: rgb(107, 158, 94);
  border: none;
  border-radius: 5%;
`
