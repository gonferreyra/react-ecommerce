import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'


export const Nav = styled.nav`
    background: #000;
    // ver
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: .8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const NavCartMobile = styled.div`
    position: absolute;
    top: calc(40px - 17.93px);
    left: calc(50% - 25px);

    @media screen and (min-width: 769px) {
        display: none;
    }
`

export const NavCartMobileBtn = styled(Link)`

`

export const NavCartMobileBtnImg = styled.img`
    width: 40px;
`

export const CartItemsMobile = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 20px;
    margin: auto;
    color: white;
    position: absolute;
    bottom: -10px;
    right: 0px;
    // if cart has no item, don't show the cero
    opacity: ${({ cartCount }) => (cartCount === 0 ? '0' : '1')};
`

// Toggle elemento on Nav to click and open
export const ToggleIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    //Hide list items under 768px
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

// ver Links react scroll
export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        /* border-bottom: 3px solid red; */
        box-shadow:inset 0px -3px 0px 0px #f00;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    /* background: #01bf71; */
    /* white-space: nowrap; */
    padding: 10px 22px;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    position: relative;

    /* &:hover {
        transition: all 0.2s ease-in out;
        background: #fff;
        color: #010606;
    } */
`

export const NavCartBtn = styled.img`
    width: 40px;
    height: 100%;
`

export const CartItems = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 20px;
    margin: auto;
    color: white;
    position: absolute;
    bottom: 0;
    right: 25px;
`