import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background-color: var(--color-hearder);
  top: 0px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
`;

export const ProfileImg = styled.img`
  padding: .5rem;
`;

export const SearchButton = styled.button`
   border:none; 
   border-radius: 3rem;
   background-color: ${(props) => props.bgColor};
   cursor: pointer;
   padding: .5rem;
   transition: .5s;
`;
