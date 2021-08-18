import styled from "styled-components";

export const Box = styled.div`
    display:flex;
    width:100vw;
    height:90vh;
`;    
export const Display = styled.div`
    flex-basis:1;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
export const Code = styled.div`
    flex-basis:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
`;

export const Pre = styled.pre`
    width:80%;
    max-height:300px;
    overflow-x:auto;
    border-top: 20px solid black;
    background-color:white;
    font-size:14px;
    color:black;
    :not(:last-child){
        margin-bottom:30px;
    }
`;