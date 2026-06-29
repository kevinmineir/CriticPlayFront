import styled from "styled-components"

export const Container = styled.div`
    background-color: pink;
    width: 11rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
`

export const ImageContainer = styled.div`
    height: 12.5rem;
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const Name = styled.div`
    width: 95%;
    color: white;
    text-decoration: underline;
    font-size: 1.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const NotaContainer = styled.div`
    display: flex;
    flex-direction: row;

`

export const Nota = styled.div` 
    color: white;
    background-color: ${({ nota }) => {
    if (nota < 20) return 'rgb(145, 6, 6)';
    if (nota < 40) return 'rgb(207, 24, 24)';
    if (nota < 65) return 'rgb(243, 225, 61)';
    if (nota < 75) return 'rgb(56, 214, 56)';
    if (nota < 85) return 'rgb(12, 161, 12)';
    return 'rgb(13, 92, 13)';
    }};
    padding: 0.25rem 0.3rem 0.25rem 0.3rem;
    border-radius: 5px;
    font-size: 0.85rem;
    font-weight: 600;
`

export const NotaTexto = styled.div`
    color: white ;
    font-size: 0.8rem;
    text-align: center;
    margin-left: 0.5rem;
`