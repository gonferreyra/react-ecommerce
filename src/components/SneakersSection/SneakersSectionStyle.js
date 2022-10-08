import styled from "styled-components";

export const SneakerSection = styled.div`
  max-width: 1100px;
  // ojo cuando cargue todas las zapatillas que no quede chico el height. VER!!!
  height: 500px;
  margin: auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SneakerContainer = styled.div`
  @media screen and (max-width: 650px) {
    display: flex;
    justify-content: center;
  }
`

export const Card = styled.div`
  max-width: 300px;
  /* height: 300px; */
  margin: 0.5rem auto;

  &:hover {
    border: 1px solid gray;
    border-radius: 5px;
  }
`

export const CardImg = styled.div`
  
`

export const SneakerImg = styled.img`
  width: 100%;
`

export const CardInfoContainer = styled.div`
  padding: 1rem;
`

export const CardName = styled.p`
  font-size: 2rem;
  font-weight: 600;
`

export const CardPrice = styled.p`
  margin: 0.5rem 0;
`

export const CardHoverContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
  height: 0;
  overflow: hidden;

  ${Card}:hover & {
    transition: all 0.5s ease-in-out;
    margin: 1rem 0;
    border-top: 1px solid gray;
    padding-top: 1.5rem;
    height: auto;
  }
`

export const CardBtn = styled.div`
  
`

export const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 35px;
    border: none;
    border-radius: 10px;
    gap: 10px;
    cursor: pointer;
    /* background: transparent; */

    &:hover {
        transition: all 0.5s ease-in-out;
        color: red;
    }
`

export const CardIcons = styled.div`

`

export const IconBtn = styled.button`
    /* width: 50px; */
    height: 35px;
    border: none;
    border-radius: 10px;
    background: transparent;
    cursor: pointer;

    &:hover {
        transition: all 0.5s ease-in-out;
        color: red;
    }
`