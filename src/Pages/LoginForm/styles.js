import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 50vw ;
    max-height: 30rem;
    min-height: 20rem;
    height: 70vh;
    max-width: 20rem;
    min-width: 13rem;
    display: flex;
    background-color: rgb(20, 18, 18);
    border-radius: 10px;
    justify-self: center;
    align-self: center;
    flex-direction: column;
    align-items: center;
    outline: 7px rgb(24, 23, 23) solid;
` 
export const FormHeader = styled.div`
    height: fit-content;
    color: white;
    display: flex;
    margin-top: 1rem;
`
export const CustomSpan = styled.span`
    font-size: 1.5rem;
    border-radius: 10px;
    font-weight: 600;
`

export const LogIn = styled.div`
    font-size: 1.3rem;
    text-align: center;
    line-height: 1.2rem;
    margin-top: 0.3rem;
    font-weight: 500;
`

export const FormContainer = styled.form`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    gap: 0.4rem;
`

export const FormItem = styled.input`
    width: 45vw;
    max-width: 18rem;
    min-width: 8rem;
    height: 1.5rem;
    border: rgb(173, 173, 173);
    border-radius: 5px;
`

export const FormButton = styled.button`
    width: 45vw;
    max-width: 12rem;
    min-width: 4rem;
    border-radius: 20px;
    margin-top: 0.5rem;
    font-size: 0.7rem;
    color: black;
    background-color: rgb(219, 219, 219);
    transition: background-color 0.3s ease;
    font-weight: 500;

    &:hover {
        background-color: rgb(190, 188, 188);
    }
    &:active {
        background-color: rgb(219, 219, 219);
    }
`
export const UtilitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.4rem;
`
export const SingUp = styled.div`
    font-weight: 500;
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
`

export const SingUpLink = styled.div`
    font-weight: 700;
    margin-left: 0.2rem;

    &:hover{
        color: rgb(202, 202, 202);
        cursor: pointer;
    }
    &:active{
        color: white;
    }
`
