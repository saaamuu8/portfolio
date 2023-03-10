import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 100%;
    min-height: 90vh;
    padding: 20px 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeaderText = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeaderTitle = styled.h1`
    font-size: 70px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 20px;
`;

const HeaderSubTitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
    text-transform: uppercase;

    margin-top: 20px;
`;

const HeaderButtons = styled.div`
    width: 100%;
    height: fit-content;
    
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -85%);

    display: flex;
    align-items: center;
    justify-content: center;

    a {
        width: fit-content;
        height: fit-content;
        padding: 0 20px;

        font-size: 17px;
        font-weight: 600;
        color: #000;
        text-decoration: none;
        text-transform: uppercase;
    }

    p {
        font-size: 18px;
        font-weight: 600;
        color: #000;
        text-decoration: none;
    }
`;

export { HeaderContainer, HeaderText, HeaderTitle, HeaderSubTitle, HeaderButtons };
