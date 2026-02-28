import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    background-color: rgb(20, 18, 18);
    width: 60vw;
    max-width: 30rem;
    min-width: 10rem;
    height: 80vh;
    max-height: 25rem;
    min-height: 18rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    outline: 7px rgb(24, 23, 23) solid;
    justify-content: center;
`

export const ErrorCode = styled.div`
    background-color: orange;
    color: black;
    font-size: 5.3rem;
    text-align: center;
    width: fit-content;
    height: fit-content;
    font-weight: 600;
    border-radius: 10px;
    padding: 0 0.5rem 0 0.5rem;
`

export const ErrorMessage = styled.div`
    font-size: 2rem;
    font-weight: 400;
    color: white;
    text-align: center;
    margin-top: 0.5rem;
`

export const ErrorDesc = styled.div`
    font-size: 1.3rem;
    font-weight: 400;
    color: white;
    text-align: center;
    margin-top: 0.5rem;
`

export const ReturnHome = styled.a`
    font-size: 0.9rem;
    font-weight: 600;
    color: white;
    text-align: center;
    margin-top: 1rem;

    &:hover{
        cursor: pointer;
        color: rgb(202, 202, 202);
    }
`