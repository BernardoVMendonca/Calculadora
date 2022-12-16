import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: auto;
    margin-left: 25vw;
    border: 5px solid black;
    height: 100vh;
    max-height: 100vh;
    width: 40vw;
`;

export const Screen = styled.div`
    width: 100%;
    height: 16vh;
    max-height: 16vh;
    background-color: green;
    font-family: "Syncopate";
    text-align: end;
    font-size: 9vh;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
    flex: 1;
    flex-direction: column;
`
