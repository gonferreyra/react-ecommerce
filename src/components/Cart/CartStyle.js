import styled from "styled-components";

export const CartContainer = styled.div`
z-index: 1000;
    position: fixed;
    top: 80px;
    /* right: 0; */
    /* right: -100%; */
    right: ${({ cartIsOpen }) => (cartIsOpen ? '0' : '-100%')};
    width: 250px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
    background-color: white;
    /* box-shadow: -2px solid 4px hsl(0 4% 15% / 10%); */
    border: 1px solide red;
    transition: .4s ease-in-out;

    /* &:active {
        right: 0;
        transition: all .5s ease-in-out;
    } */
`

export const CartTitle = styled.h2`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2rem;
`

export const CartTotal = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    border-top: 1px solid black;
`

export const TotalTitle = styled.p`
    font-size: 1rem;
    font-weight: 600;
`

export const TotalPrice = styled.p`
    margin-left: .5rem;
`

export const BtnBuy = styled.button`
    display: flex;
    margin: 1.5rem auto 0 auto;
    padding: 12px 20px;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
`