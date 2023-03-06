import styled from "styled-components";

const NavbarContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 30px 0 30px 30px;

    display: flex;
    align-items: center;
`;

const NavbarLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-size: 22px;
        font-weight: 800;
        color: #000;
        text-decoration: none;
    }
`;

const NavbarHamburguer = styled.div`
    position: absolute;
    right: 30px;
    top: 30px;

    display: block;
    width: 25px;
    height: 25px;

    cursor: pointer;
    z-index: 1;
    
    div {
        width: 100%;
        height: 2px;
        background-color: #000;
        border-radius: 10px;

        margin: 5px 0;
    }
`;

const NavbarUl = styled.ul`
    width: 300px;
    height: 40vh;
    padding: 20px 45px;

    position: absolute;
    right: 0;
    top: 0;

    border-radius: 0 0 0 20px;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;

    transform: ${props => props.open ? "translateX(0px)" : "translateX(300px)"};
    opacity: ${props => props.open ? "1" : "0"};
    transition: all .5s ease-in-out;

    a {
        margin: 20px 0;
        
        font-size: 22px;
        font-weight: 600;
        color: #000;
        letter-spacing: 0.3px;
        text-decoration: none;
        
        &:hover {
            opacity: 1;
        }
        
        opacity: .8;
        transition: all .5s ease-in-out;
    }
`;

export { NavbarContainer, NavbarLogo, NavbarHamburguer, NavbarUl };