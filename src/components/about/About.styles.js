import styled from "styled-components";

const AboutContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

const AboutLeft = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
        font-size: 18px;
        font-weight: 800;
        color: #000;
        letter-spacing: 0.5px;

        margin-bottom: 10px;
    }  
    
    h2 {
        font-size: 30px;
        font-weight: 400;
        color: #000;
        letter-spacing: 0.3px;

        margin-bottom: 50px;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        color: #000;

        text-align: justify;
        letter-spacing: 0.2px;
        line-height: 30px;

        margin-bottom: 50px;
    }

    a {
        width: fit-content;
        height: fit-content;
        padding: 8px 20px;

        border: 2px solid #000;
        border-radius: 5px;

        font-size: 16px;
        font-weight: 600;
        color: #000;
        text-decoration: none;
        text-transform: capitalize;
    }

`;

const AboutRight = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

export { AboutContainer, AboutLeft, AboutRight };