import styled from "styled-components";

export const CartContainer = styled.div`
z-index: 1000;
    position: fixed;
    top: 80px;
    /* right: 0; */
    /* right: -100%; */
    right: ${({ cartIsOpen }) => (cartIsOpen ? '0' : '-100%')};
    width: 250px;
    height: calc(100vh - 80px);
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
    background-color: white;
    border: 1px solide red;
    transition: .4s ease-in-out;
    box-shadow: inset 0px -1px 5px 0px black;

    @media screen and (min-width: 1024px) {
        width: 300px;
    }
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