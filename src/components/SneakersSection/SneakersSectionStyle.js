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
`

export const Section = styled.div`

`

export const SneakerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 650px) {
    /* display: flex; */
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
