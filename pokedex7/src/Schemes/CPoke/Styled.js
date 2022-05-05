import styled from "styled-components";

export const StyledDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 250px;
    /* height: 380px; */
    margin: 10px;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

    .div-card {
        width: 100px;
        height: 380px;
    }

    &:hover {
        -webkit-transform:scale(1.02);
        transform:scale(1.02);
    }
`

export const StyledDivImg = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    background-color: #99999950;
    border-radius: 10px;
    cursor: pointer;

    img {
        width: 200px;
        height: 200px;
    }
`

export const StyledInfo = styled.div `
    text-align: start;
    width: 100%;
    height: 50px;
    padding: 0 0 10% 8% ;
    line-height: 10px;
    margin: 0;
    
    h2 {
        font-size: 2.0rem;
    }

    strong {
        color: #919191;
    }
`

export const StyledButton = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    background-color: red;
    border-radius: 8px;
    width: 100%;
    height: 30px;
    outline: 3px solid black;
    outline-offset: -3px;
    cursor: pointer;
    user-select: none;
    margin-top: 5px;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: white;
        height: 27px;
    }
`

export const StyledTypes = styled.div `
    display: flex;
    justify-content: flex-start;
    text-align: center;
    padding: 5px 0 0 8%;
    width: 250px;
    height: 25px;
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
    width: 100px;
    height: 18px;
    margin: 2px;
    border-radius: 4px;
    padding: 3px;
    color: white
`