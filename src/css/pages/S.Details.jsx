import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
`

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

export const RecomendationContainer = styled.section`
  // overflow-x: auto;
  // white-space: nowrap;
  margin: 3rem 0;
  position: relative;
`;

export const Card = styled.section`
  width: 50%;
  height: 18rem;
  display: inline-block;

  img {
    width: 100%;
  }
`

export const StartButton = styled.button`
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

export const H3 = styled.h3`
  align-self: left;
  margin: 0vh 10% 2vh 10%;
  font-size: 1.5em;
`

export const Li = styled.ul`
  padding: 0vh 0vh 1vh 5%;
  font-size: 1.3em;
`

export const P = styled.p`
  text-align: justify;
  margin: 5vh 10% 5vh 10%;
  font-size: 1.5em;
`

export const Iframe = styled.iframe`
  margin-bottom: 5vh;
`
