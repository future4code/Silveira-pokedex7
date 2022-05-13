import styled from "styled-components";

export const StyledMain = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: sticky;
    width: 100vw;
    height: 60px;
    background-color: white;
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
`

export const StyledButton = styled.button `
    border: none;
    background: none;
    height: 100%;
    width: 100px;
    font-weight: bold;

    &:hover {
        background-color: #E3350D;
        color: white;
    }
`