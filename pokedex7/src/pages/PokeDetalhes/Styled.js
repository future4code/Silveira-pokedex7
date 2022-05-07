import styled from "styled-components";

export const StyledDivGrid = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100vh;
    background-color: white;

    .div-main {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: 20px;
    }
    
    .div-name {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 1.3rem;
    }
`

export const StyledImg = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #99999950;
    border-radius: 10px;
    min-width: 400px;
    min-height: 400px;

    img {
        width: 80%;
        height: 80%;
    }
`

export const StyledStats = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #30a7d7;
    border-radius: 10px;
    width: 400px;
    height: 200px;

    span {
        color: white;
        font-weight: bold;
    }

    .div-grid {
        display: grid;
        grid-template-columns: repeat( 3, 1fr );
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

export const StyledCharacteristic = styled.div `
    display: grid;
    grid-template-columns: repeat( 2, 1fr );
    background-color: #30a7d7;
    border-radius: 10px;
    width: 400px;
    height: 300px;

    h4 {
        color: white;
    }
`

export const StyledType = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;

    .div-card {
        display: flex;
    }
`

export const StyledTypeCard = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${props => {
        if (props.divColor === "fire") {
            return "#fd7d24" 
        } 
        else if (props.divColor === "water") {
            return "#4592c4" 
        }
        else if (props.divColor === "grass") {
            return "#9bcc50" 
        }
        else if (props.divColor === "poison") {
            return "#b97fc9" 
        } 
        else if (props.divColor === "flying") {
            return "#3dc7ef" 
        } 
        else if (props.divColor === "bug") {
            return "#729F3F" 
        } 
        else {
            return "#bfe2ee"
        }
    }};
    width: 150px;
    height: 25px;
    margin: 2px;
    border-radius: 4px;
    padding: 3px;
    color: white
`