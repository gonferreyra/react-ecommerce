import styled from "styled-components";
import { Link } from 'react-router-dom'

export const HeroContainer = styled.div`
    /* background: #0c0c0c; */
    background: #101522;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    /* height: 800px; */
    height: 100vh;
    position: relative;
    z-index: 1;
    opacity: ${({ cartIsOpen }) => (cartIsOpen ? '0.7' : '1')};
    transition: 0.3s ease-in-out;
/* 
    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    } */

    /* @media screen and (min-width: 1450px) {
        height: 850px;
    } */
`

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const HeroBackgroundVideo = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HerobackgrundImageTest = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroContentH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 1024px) {
        font-size: 4rem;
    }
`

export const HeroContentP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.125rem;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.8rem;
    }
`

export const HeroContentBtn = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroButton = styled(Link)`
    padding: 12px 45px;
    background: #f0f0f0;
    border-radius: 50px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
        background-color: black;
        color: red;
    }
`