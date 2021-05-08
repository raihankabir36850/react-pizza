import styled from 'styled-components';
import imageBg from '../../images/image.jpg';

// eslint-disable-next-line import/prefer-default-export
export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${imageBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

export const HeroContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) / 2);
`;
export const HeroItem = styled.div`\
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    width:600px;
    padding: 0rem 2rem;
    color: #fff;
    text-transform: uppercase;
    line-height:1;
    font-weight: bold;

    @media screen and (max-width:600px){
        width:100%;
    }
`;
export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    letter-spacing: 3px;
    box-shadow: 3px 5px yellow;
`;
export const HeroP = styled.p`
    font-size: clamp(1.2rem, 2vw, 3rem);
    margin-bottom: 1rem;
`;
export const HeroBtn = styled.button`
    padding: 1.2rem 5rem;
    background: #900c3f;
    border-width: 0px;
    color: #fff;
    font-size: 1rem;
    transition: color 2s, background 2s;

    &:hover {
        color: #000;
        background: yellow;
    }
`;
