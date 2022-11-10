import styled from "styled-components";

export const SneakerSection = styled.div`
  max-width: 1100px;
  // ojo cuando cargue todas las zapatillas que no quede chico el height. VER!!!
  /* height: 500px; */
  margin: auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ cartIsOpen }) => (cartIsOpen ? '0.7' : '1')};
  transition: 0.3s ease-in-out;

  @media screen and (min-width: 1024px) {
        min-height: 100vh;
  }
`

export const Section = styled.div`

`

export const SearchBar = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin: 0.5rem auto;
`

export const SearchText = styled.h2`

`

export const SearchInput = styled.input``

export const SearchBtn = styled.button``

export const SearchError = styled.div`
  padding: 1rem 1.5rem;
  text-align: center;
  background-color: red;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
`

export const SearchErrorP = styled.p``

export const SneakerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 650px) {
    justify-content: center;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ShowMoreBtn = styled.button`
  width: 120px;
  height: 40px;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  margin: 1rem auto;
  transition: all 0.4s ease;

  &:hover {
    color: red;
    background: black;
    transition: all 0.4s ease-in-out;
    scale: 1.2;
  }
`
